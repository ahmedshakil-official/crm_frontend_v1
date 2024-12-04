import { withAuth } from "next-auth/middleware";
import { pagesOptions } from "./app/api/auth/[...nextauth]/pages-options";

export default withAuth({
  pages: {
    ...pagesOptions,
  },
});

export const config = {
  // restricted routes
  // matcher: [
  //   "/:path*"
  // ],
  matcher: [
    // Protect all dashboard routes
    "/dashboard/:path*",
    // Protect dashboard organization routes
    "/dashboard/organization/:path*",
    // Protect specific user-related routes
    "/users/:path*",
  ],
};