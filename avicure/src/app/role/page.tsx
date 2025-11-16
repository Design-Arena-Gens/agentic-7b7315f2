export default function RoleSelection() {
  const roles = [
    { id: "patient", label: "Patient", desc: "Book doctors and labs" },
    { id: "doctor", label: "Doctor", desc: "Manage consultations" },
    { id: "lab", label: "Lab", desc: "Handle test bookings" },
    { id: "hospital", label: "Hospital", desc: "Manage departments" },
  ];
  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <h1 className="text-2xl font-semibold">Choose your role</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {roles.map((r) => (
          <a
            key={r.id}
            href={`/login?role=${r.id}`}
            className="rounded-lg border bg-white p-5 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="text-lg font-medium">{r.label}</div>
            <div className="text-sm text-zinc-600">{r.desc}</div>
          </a>
        ))}
      </div>
      <a
        href="/admin"
        className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-700"
      >
        Admin panel
      </a>
    </div>
  );
}
