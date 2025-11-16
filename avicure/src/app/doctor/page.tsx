export default function DoctorDashboard() {
  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-semibold">Doctor Panel</h1>
        <p className="mt-1 text-zinc-600">Manage your slots, appointments, and earnings.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Today's appointments</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Manage availability</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Earnings</a>
        </div>
      </div>
    </div>
  );
}
