import { NextResponse } from "next/server";
import { readSession } from "@/lib/session";

export async function POST(req: Request) {
  const session = await readSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const { doctorId, slot } = body as { doctorId?: string; slot?: string };
  if (!doctorId || !slot) return NextResponse.json({ error: "Missing inputs" }, { status: 400 });

  const bookingId = `b_${Math.random().toString(36).slice(2, 10)}`;
  // In production, persist booking
  return NextResponse.json({ ok: true, bookingId });
}
