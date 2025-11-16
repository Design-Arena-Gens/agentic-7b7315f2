"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6">
      <h1 className="text-xl font-semibold">Password reset</h1>
      <p className="mt-1 text-sm text-zinc-600">Enter your email to receive reset instructions.</p>
      <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="rounded-md border px-3 py-2" placeholder="you@example.com" />
        </label>
        <button className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Send reset link</button>
      </form>
      {sent && (
        <div className="mt-3 rounded border border-green-200 bg-green-50 p-2 text-sm text-green-700" role="status">
          If an account exists, a reset link has been sent.
        </div>
      )}
    </div>
  );
}
