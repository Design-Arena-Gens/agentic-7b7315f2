"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SlotSelection() {
  const params = useParams<{ id: string }>();
  const doctorId = params.id;
  const [doctor, setDoctor] = useState<any | null>(null);
  const [slot, setSlot] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/search?q=${doctorId}`);
      const data = await res.json();
      const d = (data.results || []).find((x: any) => x.id === doctorId);
      setDoctor(d || null);
    }
    load();
  }, [doctorId]);

  async function onBook(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ doctorId, slot }),
    });
    const data = await res.json();
    if (res.ok) {
      router.push(`/patient/booking/${data.bookingId}/payment?amount=${doctor.fee}`);
    }
  }

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-lg rounded-lg border bg-white p-6">
      <h1 className="text-xl font-semibold">Select a slot</h1>
      <p className="mt-1 text-sm text-zinc-600">{doctor.name} ? ?{doctor.fee}</p>
      <form className="mt-4 grid gap-3" onSubmit={onBook}>
        <label className="grid gap-1">
          <span className="text-sm">Available slots</span>
          <select className="rounded-md border px-3 py-2" value={slot} onChange={(e) => setSlot(e.target.value)} required>
            <option value="" disabled>
              Select a time
            </option>
            {doctor.availableSlots.map((s: string) => (
              <option key={s} value={s}>{new Date(s).toLocaleString()}</option>
            ))}
          </select>
        </label>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Continue to payment</button>
      </form>
    </div>
  );
}
