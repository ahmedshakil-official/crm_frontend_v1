import SVG from "@/CommonComponent/SVG";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="6" className="footer-copyright">
            <p className="mb-0">
              Copyright {currentYear} &copy; CRM. All rights reserved.
            </p>
          </Col>
          <Col md="6">
            <p className="float-end mb-0">
              Hand crafted &amp; made with
              <SVG className="svg-color footer-icon" iconId="heart" />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
