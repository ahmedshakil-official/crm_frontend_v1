import { Container } from "reactstrap";
import Introducers from "../../../CommonComponents/Directors/Introducers/Introducers";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const IntroducersContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Introducers"
        title="Hello there!"
        parent="Directors"
        activePage="Introducers"
      />
      <Container fluid>
        <Introducers />
      </Container>
    </>
  );
};

export default IntroducersContainer;
