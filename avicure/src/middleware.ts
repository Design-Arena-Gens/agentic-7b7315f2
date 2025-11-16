import { NextRequest, NextResponse } from "next/server";

function readRole(req: NextRequest): string | null {
  const token = req.cookies.get("avicure_session")?.value;
  if (!token) return null;
  try {
    const b64 = token.split(".")[1]?.replace(/-/g, "+").replace(/_/g, "/");
    if (!b64) return null;
    const json = typeof atob === "function" ? atob(b64) : Buffer.from(b64, "base64").toString("utf8");
    const payload = JSON.parse(json);
    return payload?.role ?? null;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const role = readRole(req);

  const rolePrefixes = ["/patient", "/doctor", "/lab", "/hospital", "/admin"];
  const isProtected = rolePrefixes.some((p) => pathname.startsWith(p));

  if (!isProtected) return NextResponse.next();

  if (!role) {
    const url = req.nextUrl.clone();
    url.pathname = "/role";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  // ensure role matches path
  if (!pathname.startsWith(`/${role}`)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${role}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/patient/:path*",
    "/doctor/:path*",
    "/lab/:path*",
    "/hospital/:path*",
    "/admin/:path*",
  ],
};
