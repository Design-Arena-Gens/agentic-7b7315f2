"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function LoginInner() {
  const params = useSearchParams();
  const router = useRouter();
  const [role, setRole] = useState<string>(params.get("role") || "patient");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const r = params.get("role");
    if (r) setRole(r);
  }, [params]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone, role }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data?.error || "Login failed");
      return;
    }
    router.push(`/otp?role=${role}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`);
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6">
      <h1 className="text-xl font-semibold">Login / Signup</h1>
      <p className="mt-1 text-sm text-zinc-600">Use email or phone OTP (123456)</p>
      <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
        <label className="grid gap-1">
          <span className="text-sm">Role</span>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="rounded-md border px-3 py-2">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="lab">Lab</option>
            <option value="hospital">Hospital</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="rounded-md border px-3 py-2" placeholder="you@example.com" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Phone</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="rounded-md border px-3 py-2" placeholder="9999999999" />
          </label>
        </div>
        {error && <div role="alert" className="rounded border border-red-200 bg-red-50 p-2 text-sm text-red-700">{error}</div>}
        <button disabled={loading} className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50">
          {loading ? "Sending OTP..." : "Continue"}
        </button>
        <div className="mt-2 text-sm">
          <a href="/forgot" className="text-blue-700 underline underline-offset-4">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md">Loading...</div>}>
      <LoginInner />
    </Suspense>
  );
}
