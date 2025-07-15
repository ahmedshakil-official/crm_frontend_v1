import { Container } from "reactstrap";
import ActiveCases from "../../../CommonComponents/Cases/ActiveCases/ActiveCases";

const OrganisationActiveCasesContainer: React.FC = () => {
  return (
    <>
     <Container fluid>
        <ActiveCases/>
     </Container>
    </>
  );
};

export default OrganisationActiveCasesContainer;