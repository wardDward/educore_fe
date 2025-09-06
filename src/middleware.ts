import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuth } from "./app/middleware/authMiddleware";


export function middleware(req: NextRequest) {
    return checkAuth(req)
}
export const config = {
  matcher: [
    "/",                   // root
    "/dashboard/:path*",   // learner pages
    "/profile/:path*",     // learner pages
    "/instructor/:path*",  // instructor pages
    "/login",              // so middleware can redirect logged-in users
    "/register",           // same
  ],
};
