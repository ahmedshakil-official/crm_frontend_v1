import { ImagePath } from "@/Constant";
import { LoginFormProp } from "@/Types/PagesType";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export const CommonLogo: React.FC<LoginFormProp> = ({ logoClass }) => {
  const { data: session } = useSession();

  const getRedirectPath = () => {
    const userType = session?.user?.user_type;
    switch (userType) {
      case "LEAD":
        return "/dashboard/client";
      case "ADMIN":
        return "/dashboard/admin";
      case "ADVISOR":
        return "/dashboard/organization";
      default:
        return "/dashboard/organization";
    }
  };

  return (
    <a className={`logo ${logoClass}`} href={getRedirectPath()}>
      <Image
        width={91}
        height={27}
        className="img-fluid for-light"
        src={`${ImagePath}/logo/logo1.png`}
        alt="looginpage"
      />
      <Image
        width={91}
        height={27}
        className="img-fluid for-dark"
        src={`${ImagePath}/logo/logo-dark.png`}
        alt="looginpage"
      />
    </a>
  );
};
