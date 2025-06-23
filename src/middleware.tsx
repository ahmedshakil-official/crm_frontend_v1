import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { pagesOptions } from "./app/api/auth/[...nextauth]/pages-options";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Role-based path protection
    if (path.startsWith("/dashboard/admin") && token?.user_type !== "ADMIN") {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("error", "unauthorized");
      return NextResponse.redirect(loginUrl);
    }

    // Network admin can access network dashboard
    if (
      path.startsWith("/dashboard/network") &&
      token?.user_type !== "NETWORK_ADMIN"
    ) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("error", "unauthorized");
      return NextResponse.redirect(loginUrl);
    }

    // Lead can access client dashboard
    if (path.startsWith("/dashboard/client") && token?.user_type !== "LEAD") {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("error", "unauthorized");
      return NextResponse.redirect(loginUrl);
    }

    // ORGANIZATION_ADMIN can access organisation dashboard
    if (
      path.startsWith("/dashboard/organisation") &&
      token?.user_type !== "ORGANIZATION_ADMIN"
    ) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("error", "unauthorized");
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  },
  {
    pages: {
      ...pagesOptions,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/dashboard/organisation/:path*",
    "/dashboard/client/:path*",
    "/dashboard/network/:path*",
    "/dashboard/network/usersettings/:path*",
  ],
};