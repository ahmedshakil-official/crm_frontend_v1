"use client";
import { CommonErrorPageProps } from "@/Types/PagesType";
import { useSession } from "next-auth/react";
import React from "react";
import { Col, Container } from "reactstrap";

const CommonErrorPage: React.FC<CommonErrorPageProps> = ({
  errorIcon,
  title,
}) => {
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
        return "/dashboard/organisation";
      default:
        return "/auth/login";
    }
  };

  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <div className="svg-wrraper">{errorIcon}</div>
          <Col md="8" className="offset-md-2">
            <h3>{title}</h3>
            <p className="sub-content">
              {
                "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."
              }
            </p>
            <a href={getRedirectPath()} className="btn btn-primary">
              {"BACK TO HOME PAGE"}
            </a>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default CommonErrorPage;
