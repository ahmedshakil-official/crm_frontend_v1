"use client";
import { Error2 } from "@/Data/Pages/PagesSvgIcons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Col, Container } from "reactstrap";

const FallbackLogout: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/auth/login");
  };

  return (
    <div>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <div className="error-wrapper">
          <Container>
            <div className="svg-wrraper">
              <Error2 />
            </div>
            <Col md="8" className="offset-md-2">
              <h3 className="mb-0 text-danger">Access Restricted!</h3>
              <p className="sub-content mt-0 mb-2">
                You don't have permission to view this page
              </p>
              <Button color="primary" onClick={handleLogout}>
                {"LOGOUT"}
              </Button>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FallbackLogout;
