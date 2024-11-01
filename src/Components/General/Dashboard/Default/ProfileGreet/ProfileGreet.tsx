import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { Href, ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ProfileGreet = () => {
  return (
    <Col xl="4" sm="6" className="proorder-xxl-1 box-col-6">
      <Card className="welcome-banner">
        <CardHeader className="p-0 card-no-border">
          <div className="welcome-card">
            <img className="w-100 img-fluid" src="../assets/images/dashboard-1/welcome-bg.png" alt="ProfileGreet" />
            <img className="position-absolute img-1 img-fluid" src="../assets/images/dashboard-1/img-1.png" alt="ProfileGreet" />
            <img className="position-absolute img-2 img-fluid" src="../assets/images/dashboard-1/img-2.png" alt="ProfileGreet" />
            <img className="position-absolute img-3 img-fluid" src="../assets/images/dashboard-1/img-3.png" alt="ProfileGreet" />
            <img className="position-absolute img-4 img-fluid" src="../assets/images/dashboard-1/img-4.png" alt="ProfileGreet" />
            <img className="position-absolute img-5 img-fluid" src="../assets/images/dashboard-1/img-5.png" alt="ProfileGreet" />
          </div>
        </CardHeader> 
        <CardBody>
          <div className="d-flex align-center">
            <h1>Hello, Amirreza <Image width={20} height={20}  src={`${ImagePath}/dashboard-1/hand.png`} alt="ProfileGreet" /></h1>
          </div>
          <p>Welcome back! Let’s start from where you left.</p>
          <div className="d-flex align-center justify-content-between">
            <Link className="btn btn-pill btn-primary" href={Href}>Whats New!</Link>
            <span><SvgIcon className="stroke-icon" iconId="watch" />11:14 AM</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileGreet;
