import { NextResponse } from "next/server";
import { readSession, signSession, setSessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  const session = await readSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const { name, age, city } = body as { name?: string; age?: number; city?: string };

  const updated = { ...session, profileComplete: true, name, city };
  const token = signSession(updated);
  const res = NextResponse.json({ ok: true, redirect: `/${session.role}` });
  setSessionCookie(res, token);
  return res;
}
