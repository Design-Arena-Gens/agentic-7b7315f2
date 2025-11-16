"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function PaymentInner() {
  const params = useParams<{ bookingId: string }>();
  const search = useSearchParams();
  const amount = Number(search.get("amount") || 0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onPay(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/payments/payu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId: params.bookingId, amount }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) router.replace(data.successUrl);
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6">
      <h1 className="text-xl font-semibold">Payment</h1>
      <p className="mt-1 text-sm text-zinc-600">Pay securely via PayU (mock)</p>
      <div className="mt-4 rounded border bg-zinc-50 p-3">
        <div className="flex items-center justify-between text-sm">
          <span>Amount</span>
          <span className="font-medium">?{amount.toFixed(2)}</span>
        </div>
      </div>
      <form className="mt-4 grid gap-3" onSubmit={onPay}>
        <button disabled={loading} className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-50">
          {loading ? "Processing..." : "Pay with PayU"}
        </button>
      </form>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md">Loading...</div>}>
      <PaymentInner />
    </Suspense>
  );
}
