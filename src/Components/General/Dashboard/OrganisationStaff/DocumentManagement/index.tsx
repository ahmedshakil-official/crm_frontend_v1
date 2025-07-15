import { Button, Container, Row } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DocumentManagementFilterBar from "./DocumentManagementFilterBar/DocumentManagementFilterBar";
import DocumentsLists from "./DocumentsLists/DocumentsLists";
import { TbUpload } from "react-icons/tb";

const OrgStaffDocumentManagementContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Document Management"
        title="Upload, manage, and verify client documents"
        activePage="Document Management"
      />
      <Container fluid>
        <div className=" d-flex justify-content-end">
          <Button className="border-0">
            <TbUpload size={16}/>
            <small className=" ms-2">Upload Document</small>
          </Button>
        </div>
        <DocumentManagementFilterBar />
        <DocumentsLists />
      </Container>
    </>
  );
};

export default OrgStaffDocumentManagementContainer;