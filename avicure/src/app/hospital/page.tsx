export default function HospitalDashboard() {
  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-semibold">Hospital Panel</h1>
        <p className="mt-1 text-zinc-600">Manage departments, doctors, and appointments.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Departments</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Doctors</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Schedules</a>
        </div>
      </div>
    </div>
  );
}
