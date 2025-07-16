import { Container } from "reactstrap";
import ActiveCases from "../../../CommonComponents/Cases/ActiveCases/ActiveCases";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const NetworkActiveCasesContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Active Cases"
        title="View all active cases in the network"
        activePage="Active Cases"
      />
      <Container fluid>
        <ActiveCases />
      </Container>
    </>
  );
};

export default NetworkActiveCasesContainer;
