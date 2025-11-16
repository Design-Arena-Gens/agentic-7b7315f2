import { NextResponse } from "next/server";
import { Session, signSession, setSessionCookie } from "@/lib/session";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, phone, role, otp, name } = body as {
    email?: string;
    phone?: string;
    role?: Session["role"];
    otp?: string;
    name?: string;
  };

  if (!role || (!email && !phone)) {
    return NextResponse.json({ error: "Missing role or contact" }, { status: 400 });
  }
  if (otp !== "123456") {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  const userId = randomUUID();
  const session: Session = {
    userId,
    email,
    phone,
    role,
    profileComplete: false,
    name,
  };
  const token = signSession(session);
  const res = NextResponse.json({ ok: true, redirect: role === "patient" ? "/profile-setup" : `/${role}` });
  setSessionCookie(res, token);
  return res;
}
