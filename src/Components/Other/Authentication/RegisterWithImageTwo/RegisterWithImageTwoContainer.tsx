"use client";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import { RegisterForm } from "../Common/RegisterForm";

const RegisterWithImageTwoContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl="7" className="login_bs_validation p-0">
          <RatioImage src={`${ImagePath}/login/1.jpg`} alt="looginpage" className="bg-img-cover bg-center" />
        </Col>
        <Col xl="5" className="p-0">
          <div className="login-card login-dark login-bg">
            <RegisterForm logoClass="text-center" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterWithImageTwoContainer;
