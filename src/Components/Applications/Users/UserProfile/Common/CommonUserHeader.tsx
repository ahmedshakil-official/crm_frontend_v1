import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Row } from "reactstrap";

export const CommonUserHeader = () => {
  return (
    <Row>
      <Col sm="8">
        <div className="d-flex">
          <Image width={50} height={50} className="img-thumbnail img-50 rounded-circle me-3" src={`${ImagePath}/user/7.jpg`} alt="Generic placeholder img" />
          <div className="flex-grow-1 align-self-center">
            <h3 className="mt-0 user-name">JOHAN DIO</h3>
          </div>
        </div>
      </Col>
      <Col sm="4" className="align-self-center">
        <div className="float-sm-end">
          <small>10 Hours ago</small>
        </div>
      </Col>
    </Row>
  );
};
