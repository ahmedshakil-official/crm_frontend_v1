"use client";
import { ImagePath } from "@/Constant";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Container } from "reactstrap";
import { CountdownData } from "../Common/CountdownData";

const ComingWithBgImageContainer = () => {
  const { data: session } = useSession();

  const getRedirectPath = () => {
    const userType = session?.user?.user_type;
    switch (userType) {
      case "LEAD":
        return "/dashboard/client";
      case "ADMIN":
        return "/dashboard/admin";
      case "NETWORK_ADMIN":
        return "/dashboard/network";
      case "ADVISOR":
        return "/dashboard/organization";
      default:
        return "/dashboard/organization";
    }
  };

  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <a href={getRedirectPath()}>
              <Image
                width={104}
                height={62}
                priority
                className="for-light"
                src={`${ImagePath}/other-images/logo-login.png`}
                alt="logo"
              />
              <Image
                width={104}
                height={62}
                priority
                className="for-dark"
                src={`${ImagePath}/other-images/dark-logo-login.png`}
                alt="logo"
              />
            </a>
            <h5>{"WE ARE COMING SOON"}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ComingWithBgImageContainer;
