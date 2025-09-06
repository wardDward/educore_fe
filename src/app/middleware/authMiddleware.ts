import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function checkAuth(req: NextRequest) {
    const token = req.cookies.get("access_token")?.value;
    const role = req.cookies.get("Role")?.value;
    const path = req.nextUrl.pathname;

    //      return new NextResponse(
    //     JSON.stringify({ path, role, token }),
    //     { status: 200, headers: { "Content-Type": "application/json" } }
    //   );

    // if has token
    if (token && (path === "/login" || path === "/register")) {
        if (role?.toLowerCase() === "learner") return NextResponse.redirect(new URL("/dashboard", req.url));
        if (role?.toLowerCase() === "instructor") return NextResponse.redirect(new URL("/instructor", req.url));
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (!token && path !== "/login" && path !== "/register") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // learner pages
    const learnerRoutes = ["/dashboard"];
    if (learnerRoutes.some(r => path.startsWith(r))) {
        if (role !== "learner") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    // instructor pages
    if (path.startsWith("/instructor") && role !== "instructor") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}


