import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "./app/middleware/authMiddleware";

export function middleware(req: NextRequest) {
  return checkAuth(req);
}

export const config = {
  matcher: [
    "/",             
    "/login",
    "/register",
    "/dashboard/:path*",
    "/profile/:path*",
    "/instructor/:path*",
  ],
  runtime: "edge",     
};
