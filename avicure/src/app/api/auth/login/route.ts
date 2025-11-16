import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, phone, role } = body as {
    email?: string;
    phone?: string;
    role?: string;
  };

  if (!role || (!email && !phone)) {
    return NextResponse.json({ error: "Missing role or contact" }, { status: 400 });
  }

  // In production, trigger OTP via SMS/Email provider. Here we always use 123456
  return NextResponse.json({ ok: true, otpHint: "Use 123456" });
}
