import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";

const AdvisersContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Registered AR List"
        subTitle="Welcome to the Registered AR List"
        parent="Users"
        child="AR List"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default AdvisersContainer;
