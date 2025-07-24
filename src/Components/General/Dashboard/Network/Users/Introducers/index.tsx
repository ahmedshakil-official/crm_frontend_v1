import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import Introducers from "../../../CommonComponents/Directors/Introducers/Introducers";

const IntroducersContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Introducer List"
        subTitle="Welcome to the Introducer List"
        parent="Users"
        child="Introducers"
      />
      <Container fluid>
        <Introducers />
      </Container>
    </>
  );
};

export default IntroducersContainer;
