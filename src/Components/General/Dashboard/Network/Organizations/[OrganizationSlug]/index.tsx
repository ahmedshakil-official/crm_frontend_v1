import { Container, Row } from "reactstrap";
import OrganizationBanner from "./OrganizationProfile/OrganizationBanner";

const OrganizationContainer = () => {
  return (
    <>
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationBanner />
        </Row>
      </Container>
    </>
  );
};

export default OrganizationContainer;
