export default function Home() {
  return (
    <div className="mx-auto grid max-w-4xl gap-8 py-10">
      <section className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Welcome to AviCure</h1>
        <p className="mt-2 text-zinc-600">
          Unified healthcare super-app for Patients, Doctors, Labs, Hospitals, and Admins.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a className="rounded-md border px-4 py-3 text-center hover:bg-zinc-50" href="/role">
            Continue to role selection
          </a>
          <a className="rounded-md border px-4 py-3 text-center hover:bg-zinc-50" href="/login">
            Login / Signup
          </a>
        </div>
      </section>
      <section aria-labelledby="quick-links" className="grid gap-4 sm:grid-cols-2">
        <a href="/patient" className="rounded-lg border bg-white p-6 hover:bg-zinc-50">
          <h2 className="font-medium">Patient Panel</h2>
          <p className="mt-1 text-sm text-zinc-600">Book doctors, labs, and manage health.</p>
        </a>
        <a href="/doctor" className="rounded-lg border bg-white p-6 hover:bg-zinc-50">
          <h2 className="font-medium">Doctor Panel</h2>
          <p className="mt-1 text-sm text-zinc-600">Manage slots, consultations, and earnings.</p>
        </a>
      </section>
    </div>
  );
}
