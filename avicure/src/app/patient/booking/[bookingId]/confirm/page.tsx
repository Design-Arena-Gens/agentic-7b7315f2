import { redirect } from "next/navigation";

export default function Confirmation({ searchParams }: { searchParams: { status?: string } }) {
  if (searchParams.status !== "success") {
    redirect("/patient");
  }
  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6 text-center">
      <div className="text-4xl" aria-hidden>
        ?
      </div>
      <h1 className="mt-2 text-xl font-semibold">Booking confirmed</h1>
      <p className="mt-1 text-sm text-zinc-600">Your consultation has been scheduled. A confirmation has been sent.</p>
      <div className="mt-4">
        <a href="/patient" className="rounded-md border px-4 py-2 hover:bg-zinc-50">Back to dashboard</a>
      </div>
    </div>
  );
}
