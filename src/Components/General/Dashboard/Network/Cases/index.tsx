import { Container, Row } from "reactstrap";
import Cases from "../../CommonComponents/Cases/Cases/Cases";
import NetworkBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const NetworkCaseContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Cases Status"
        title="Here you can see all the cases of the network"
        parent="Network"
        activePage="Cases"
      />
      <Container fluid>
        <Row>
          <Cases />
        </Row>
      </Container>
    </>
  );
};

export default NetworkCaseContainer;
