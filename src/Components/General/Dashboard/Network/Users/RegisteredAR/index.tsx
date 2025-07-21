import { Container } from "reactstrap";
import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const AdvisersContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network AR"
        title="Hello there!"
        parent="Network"
        activePage="AR"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default AdvisersContainer;
