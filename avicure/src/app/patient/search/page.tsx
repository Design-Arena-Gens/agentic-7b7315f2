"use client";

import { useEffect, useState } from "react";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  async function search() {
    setLoading(true);
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&city=${encodeURIComponent(city)}`);
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid gap-4">
      <form className="flex flex-wrap gap-2" onSubmit={(e) => { e.preventDefault(); search(); }}>
        <input className="w-full flex-1 rounded-md border px-3 py-2 sm:w-auto" placeholder="Search by name or specialty" value={q} onChange={(e) => setQ(e.target.value)} />
        <input className="w-full flex-1 rounded-md border px-3 py-2 sm:w-auto" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Search</button>
      </form>
      <div className="grid gap-3">
        {loading && <div>Loading...</div>}
        {!loading && results.length === 0 && <div>No results.</div>}
        {results.map((d) => (
          <a key={d.id} href={`/patient/doctor/${d.id}`} className="rounded-md border bg-white p-4 hover:bg-zinc-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{d.name}</div>
                <div className="text-sm text-zinc-600">{d.specialty} ? {d.city} ? ?{d.fee}</div>
              </div>
              <div aria-label="Rating" className="text-sm">? {d.rating}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
