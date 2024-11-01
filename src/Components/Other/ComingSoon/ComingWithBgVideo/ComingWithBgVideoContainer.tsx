"use client"
import { ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { Container } from "reactstrap";
import { CountdownData } from "../Common/CountdownData";

const ComingWithBgVideoContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container className="p-0" fluid>
        <div className="comingsoon auth-bg-video">
          <video className="bgvideo-comingsoon" id="bgvid" poster={`${ImagePath}/other-images/coming-soon-bg.jpg`} playsInline autoPlay muted loop>
            <source src={"/assets/video/auth-bg.mp4"} type="video/mp4" />
          </video>
          <div className="comingsoon-inner text-center">
            <Link href={`/dashboard/default`}>
              <Image width={104} height={62} priority className="for-light" src={`${ImagePath}/other-images/logo-login.png`} alt="logo" />
              <Image width={104} height={62} priority className="for-dark" src={`${ImagePath}/other-images/dark-logo-login.png`} alt="logo" />
            </Link>
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
export default ComingWithBgVideoContainer;
