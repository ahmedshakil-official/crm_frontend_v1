import { Container } from "reactstrap";
import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const AdvisersContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Advisers"
        title="Hello there!"
        parent="Directors"
        activePage="Advisers"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default AdvisersContainer;
