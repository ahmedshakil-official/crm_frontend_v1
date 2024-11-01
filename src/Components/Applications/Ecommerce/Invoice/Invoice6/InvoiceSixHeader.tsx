import { ImagePath, Invoice } from "@/Constant";
import Image from "next/image";
import { Col, Media, Row } from "reactstrap";

const InvoiceSixHeader = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Media className="d-flex">
            <div className="media-left">
                <Image width={80} height={48} className="media-object img-80 for-light" src={`${ImagePath}/other-images/logo-login.png`} alt="logo-light" />
                <Image width={80} height={48} className="media-object img-80 for-dark" src={`${ImagePath}/other-images/dark-logo-login.png`} alt="logo-dark" />
            </div>
            <Media body className="text-right m-l-20 text-start ">
              <p>hello@crm.in
                <br />
                <span>000-000-0000</span>
              </p>
            </Media>
          </Media>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <h3>
              {Invoice} #<span className="counter">1069</span>
            </h3>
            <p>
              Issued: May<span> 27, 2024</span>
              <br /> Payment Due: June <span>27, 2024</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSixHeader;
