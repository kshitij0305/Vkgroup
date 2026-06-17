import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth";

// Portal pages live at the top level (route group "(portal)" adds no URL segment).
const PORTAL_PREFIXES = [
  "/dashboard",
  "/employees",
  "/prospects",
  "/hierarchy",
  "/reports",
  "/activity",
  "/settings",
];

// API routes that anyone may call.
const PUBLIC_API = ["/api/auth/login"];

function isPortalPath(pathname: string): boolean {
  return PORTAL_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  // Logged-in users skip the login page.
  if (pathname === "/login") {
    if (session) return NextResponse.redirect(new URL("/dashboard", req.url));
    return NextResponse.next();
  }

  if (pathname.startsWith("/api")) {
    // CSRF hardening: state-changing requests must originate from our own host.
    // (SameSite=Lax already blocks most CSRF; this closes the rest.)
    if (!["GET", "HEAD", "OPTIONS"].includes(req.method)) {
      const origin = req.headers.get("origin");
      if (origin) {
        try {
          if (new URL(origin).host !== req.nextUrl.host) {
            return NextResponse.json({ error: "Cross-origin request blocked" }, { status: 403 });
          }
        } catch {
          return NextResponse.json({ error: "Cross-origin request blocked" }, { status: 403 });
        }
      }
    }
    if (PUBLIC_API.some((p) => pathname.startsWith(p))) return NextResponse.next();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return NextResponse.next();
  }

  // Protected portal pages — unauthenticated visitors are sent to login.
  if (isPortalPath(pathname) && !session) {
    const login = new URL("/login", req.url);
    if (pathname !== "/dashboard") login.searchParams.set("from", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  // Run on portal pages, the login page, and all API routes. Public marketing
  // pages (/, /payment, …) are not matched, so they stay fully public.
  matcher: [
    "/dashboard/:path*",
    "/employees/:path*",
    "/prospects/:path*",
    "/hierarchy/:path*",
    "/reports/:path*",
    "/activity/:path*",
    "/settings/:path*",
    "/api/:path*",
    "/login",
  ],
};
