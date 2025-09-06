import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export type JwtPayload = {
  sub: number;
  role: string;
};

export async function checkAuth(req: NextRequest): Promise<NextResponse> {
  const token = req.cookies.get("accessToken")?.value;
  const path = req.nextUrl.pathname;

  if (!token) {
    if (!["/login", "/register"].includes(path)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  let decoded: JwtPayload;
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(token, encoder.encode(process.env.ACCESS_TOKEN));
    decoded = payload as unknown as JwtPayload;
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //store in state manegemnt 
  const role = decoded.role.toLowerCase();


  if (["/login", "/register"].includes(path)) {
    if (role === "learner") return NextResponse.redirect(new URL("/dashboard", req.url));
    if (role === "instructor") return NextResponse.redirect(new URL("/instructor", req.url));
    return NextResponse.redirect(new URL("/", req.url));
  }

  const learnerRoutes = ["/dashboard", "/profile"];
  if (learnerRoutes.some(r => path.startsWith(r)) && role !== "learner") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (path.startsWith("/instructor") && role !== "instructor") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
