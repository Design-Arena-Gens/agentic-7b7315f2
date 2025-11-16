import { NextResponse } from "next/server";
import { readSession } from "@/lib/session";

export async function POST(req: Request) {
  const session = await readSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const { bookingId, amount } = body as { bookingId?: string; amount?: number };
  if (!bookingId || !amount) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  // Mock PayU flow: immediately return success URL
  const successUrl = `/patient/booking/${bookingId}/confirm?status=success`;
  return NextResponse.json({ ok: true, successUrl });
}
