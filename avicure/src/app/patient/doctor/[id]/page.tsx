import { DOCTORS } from "@/data/doctors";
import Link from "next/link";

export default function DoctorProfile({ params }: { params: { id: string } }) {
  const doctor = DOCTORS.find((d) => d.id === params.id);
  if (!doctor) return <div className="text-red-700">Doctor not found.</div>;
  return (
    <div className="grid gap-4">
      <div className="rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-semibold">{doctor.name}</h1>
        <div className="mt-1 text-zinc-600">{doctor.specialty} ? ?{doctor.fee} ? ? {doctor.rating}</div>
        <p className="mt-3 text-sm text-zinc-700">{doctor.bio}</p>
        <div className="mt-4">
          <Link href={`/patient/booking/${doctor.id}/slots`} className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book appointment</Link>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-6">
        <h2 className="font-medium">Languages</h2>
        <p className="mt-1 text-sm text-zinc-700">{doctor.languages.join(", ")}</p>
      </div>
    </div>
  );
}
