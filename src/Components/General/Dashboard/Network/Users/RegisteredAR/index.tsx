import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";

const AdvisersContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Registered AR Status"
        subTitle="Welcome to the Registered AR Status"
        parent="Users"
        child="ARs"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default AdvisersContainer;
