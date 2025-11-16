import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AviCure ? Healthcare Super-App",
  description:
    "Role-based healthcare platform for patients, doctors, labs, hospitals, and admins.",
  applicationName: "AviCure",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <a href="/" className="inline-flex items-center gap-2 font-semibold">
              <span aria-hidden>??</span>
              <span>AviCure</span>
            </a>
            <nav aria-label="Global" className="flex items-center gap-3 text-sm">
              <a href="/role" className="rounded px-3 py-1.5 hover:bg-zinc-100">Roles</a>
              <a href="/patient" className="rounded px-3 py-1.5 hover:bg-zinc-100">Patient</a>
              <a href="/doctor" className="rounded px-3 py-1.5 hover:bg-zinc-100">Doctor</a>
              <a href="/lab" className="rounded px-3 py-1.5 hover:bg-zinc-100">Lab</a>
              <a href="/hospital" className="rounded px-3 py-1.5 hover:bg-zinc-100">Hospital</a>
              <a href="/admin" className="rounded px-3 py-1.5 hover:bg-zinc-100">Admin</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto min-h-[calc(100vh-56px)] w-full max-w-6xl px-4 py-6">{children}</main>
        <footer className="border-t bg-white/80">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-500">
            ? {new Date().getFullYear()} AviCure
          </div>
        </footer>
      </body>
    </html>
  );
}
