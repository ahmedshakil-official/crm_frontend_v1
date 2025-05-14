import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import MyApplications from "./Components/MyApplications";
import WelcomeMessage from "./Components/WelcomeMessage";

const ClientContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <Row>
          <WelcomeMessage />
        </Row>
        <Row>
          <MyApplications />
        </Row>
      </Container>
    </>
  );
};

export default ClientContainer;
