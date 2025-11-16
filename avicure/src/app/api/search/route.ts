import { NextResponse } from "next/server";
import { DOCTORS } from "@/data/doctors";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").toLowerCase();
  const city = (searchParams.get("city") || "").toLowerCase();

  const results = DOCTORS.filter((d) => {
    const matchesQuery = !q ||
      d.name.toLowerCase().includes(q) ||
      d.specialty.toLowerCase().includes(q);
    const matchesCity = !city || d.city.toLowerCase() === city;
    return matchesQuery && matchesCity;
  });

  return NextResponse.json({ results });
}
