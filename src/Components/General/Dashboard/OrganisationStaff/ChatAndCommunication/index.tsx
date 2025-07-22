import { Container } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ChatBoard from "./ChatBoard/ChatBoard";

const OrgStaffChatAndCommunicationContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Chat & Communication"
        title="Welcome back to your Chat & Communication dashboard"
        activePage="Chat & Communication"
      />
      <Container fluid>
        <ChatBoard />
      </Container>
    </>
  );
};

export default OrgStaffChatAndCommunicationContainer;
