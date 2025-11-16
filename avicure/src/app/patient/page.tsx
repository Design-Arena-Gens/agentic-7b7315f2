import { readSession } from "@/lib/session";

export default async function PatientDashboard() {
  const session = await readSession();
  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-semibold">Hello{session?.name ? `, ${session.name}` : ""}</h1>
        <p className="mt-1 text-zinc-600">Welcome to your dashboard.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/patient/search" className="rounded-md border px-4 py-2 hover:bg-zinc-50">Search doctors & labs</a>
          <a href="/profile-setup" className="rounded-md border px-4 py-2 hover:bg-zinc-50">Update profile</a>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-6">
        <h2 className="font-medium">Quick actions</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-zinc-700">
          <li>Book a consultation</li>
          <li>Upload prescriptions</li>
          <li>View lab reports</li>
        </ul>
      </div>
    </div>
  );
}
