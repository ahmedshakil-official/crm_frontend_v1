"use client";
import { Container } from "reactstrap";
import { CountdownData } from "../Common/CountdownData";
import Link from "next/link";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const SimpleComingSoonContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container className="p-0" fluid>
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <Link href={`/dashboard/default`}>
              <Image width={104} height={62} priority className="for-light" src={`${ImagePath}/other-images/logo-login.png`} alt="logo" />
              <Image width={104} height={62} priority className="for-dark" src={`${ImagePath}/other-images/dark-logo-login.png`} alt="logo" />
            </Link>
            <h5>{"WE ARE COMING SOON"}</h5>
            <div className="countdown" id="clock-arrival">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SimpleComingSoonContainer;
