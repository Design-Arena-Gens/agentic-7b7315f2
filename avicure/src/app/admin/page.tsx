export default function AdminDashboard() {
  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <p className="mt-1 text-zinc-600">Platform overview and moderation.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Users</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Transactions</a>
          <a href="#" className="rounded border p-4 hover:bg-zinc-50">Settings</a>
        </div>
      </div>
    </div>
  );
}
