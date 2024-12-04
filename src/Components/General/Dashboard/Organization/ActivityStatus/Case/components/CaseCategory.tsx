import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
const ReadMoreCardText = ({ children }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardText>
      <p>{isExpanded ? children : children.substring(0, 150) + "..."}</p>
      <a
        href="#"
        onClick={handleToggle}
        className="text-black bg-white rounded-2 px-2"
      >
        <i className={`fa-solid ${isExpanded ? "fa-eye-slash" : "fa-eye"}`}></i>
      </a>
    </CardText>
  );
};

const CaseCategory = () => {
  return (
    <>
      <Card className="mt-3 w-100">
        <CardHeader>
          <h2 className="text-center">Case Category</h2>
        </CardHeader>
        <CardBody>
          <Row className="g-3">
            <Col className="text-center" xl="4" lg="4" md="6" sm="12">
              <Card color="success" className="h-100">
                <CardBody>
                  <CardTitle>
                    <h4>Mortgage</h4>
                  </CardTitle>
                  <ReadMoreCardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia vero rem repellendus officia provident cum nam hic
                    eos reprehenderit eius! Deserunt a vero expedita eaque quis
                    tempore voluptatem possimus unde.
                  </ReadMoreCardText>
                </CardBody>
              </Card>
            </Col>
            <Col className="text-center" xl="4" lg="4" md="6" sm="12">
              <Card color="primary" className="h-100">
                <CardBody>
                  <CardTitle>
                    <h4>Protection</h4>
                  </CardTitle>
                  <ReadMoreCardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia vero rem repellendus officia provident cum nam hic
                    eos reprehenderit eius! Deserunt a vero expedita eaque quis
                    tempore voluptatem possimus unde.
                  </ReadMoreCardText>
                </CardBody>
              </Card>
            </Col>
            <Col className="text-center" xl="4" lg="4" md="6" sm="12">
              <Card color="warning" className="h-100">
                <CardBody>
                  <CardTitle>
                    <h4>General Insurance</h4>
                  </CardTitle>
                  <ReadMoreCardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia vero rem repellendus officia provident cum nam hic
                    eos reprehenderit eius! Deserunt a vero expedita eaque quis
                    tempore voluptatem possimus unde.
                  </ReadMoreCardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default CaseCategory;
