"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function OTPInner() {
  const router = useRouter();
  const params = useSearchParams();
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const role = params.get("role") || "patient";
  const email = params.get("email") || undefined;
  const phone = params.get("phone") || undefined;
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onVerify(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, email, phone, otp, name }),
    });
    setLoading(false);
    const data = await res.json();
    if (!res.ok) {
      setError(data?.error || "Verification failed");
      return;
    }
    router.replace(data.redirect || "/");
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6">
      <h1 className="text-xl font-semibold">Enter OTP</h1>
      <p className="mt-1 text-sm text-zinc-600">We sent a code to your contact. Use 123456.</p>
      <form className="mt-4 grid gap-3" onSubmit={onVerify}>
        <label className="grid gap-1">
          <span className="text-sm">Full name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-md border px-3 py-2" placeholder="Your name" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">6-digit code</span>
          <input value={otp} onChange={(e) => setOtp(e.target.value)} inputMode="numeric" pattern="[0-9]*" maxLength={6} className="rounded-md border px-3 py-2 tracking-widest" placeholder="123456" aria-label="One time password" />
        </label>
        {error && <div role="alert" className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">{error}</div>}
        <button disabled={loading} className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50">
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md">Loading...</div>}>
      <OTPInner />
    </Suspense>
  );
}
