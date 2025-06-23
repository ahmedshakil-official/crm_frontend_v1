import { useSession } from "next-auth/react";

export const getRedirectPaths = () => {
  const { data: session } = useSession();
  if (!session) {
    return "/auth/login";
  }

  const userType = session?.user?.user_type;
  switch (userType) {
    case "LEAD":
      return "/dashboard/client";
    case "ADMIN":
      return "/dashboard/admin";
    case "NETWORK_ADMIN":
      return "/dashboard/network";
    case "ORGANIZATION_ADMIN":
      return "/dashboard/organisation";
    case "ORGANIZATION_ADVISER":
      return "/dashboard/orgadviser";
    default:
      return "/auth/login";
  }
};
