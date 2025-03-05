import { Container, Row } from "reactstrap";
import Accountant from "./Accountant/Accountant";
import Solicitor from "./Solicitor/Solicitor";

interface SolicitorsAndAccountantsContentProps {
  activeTab: string;
}

const SolicitorsAndAccountantsContent: React.FC<
  SolicitorsAndAccountantsContentProps
> = ({ activeTab }) => {
  return (
    // Your content here
    <>
      <Container>
        <Row>
          <Solicitor />
          <Accountant />
        </Row>
      </Container>
    </>
  );
};

export default SolicitorsAndAccountantsContent;
