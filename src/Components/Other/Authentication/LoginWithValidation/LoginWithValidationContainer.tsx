"use client";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginWithValidationContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" className="login_bs_validation">
          <RatioImage src={`${ImagePath}/login/1.jpg`} alt="looginpage" className="bg-img-cover bg-center" />
        </Col>
        <Col xl="5" className="p-0">
          <div className="login-card login-dark login-bg">
            <LoginForm logoClass="text-center" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginWithValidationContainer;
