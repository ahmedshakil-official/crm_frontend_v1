import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { pagesOptions } from "./app/api/auth/[...nextauth]/pages-options";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Role-based path protection
    if (path.startsWith("/dashboard/admin") && token?.user_type !== "ADMIN") {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    if (
      path.startsWith("/dashboard/network") &&
      token?.user_type !== "NETWORK_ADMIN"
    ) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    if (path.startsWith("/dashboard/client") && token?.user_type !== "LEAD") {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    if (
      path.startsWith("/dashboard/organisation") &&
      token?.user_type !== "ADVISOR"
    ) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
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
