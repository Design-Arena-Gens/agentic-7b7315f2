export default function LabDashboard() {
  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-semibold">Lab Panel</h1>
        <p className="mt-1 text-zinc-600">Manage test bookings and reports.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">New bookings</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">In-progress</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Completed</a>
        </div>
      </div>
    </div>
  );
}
