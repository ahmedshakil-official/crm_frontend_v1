import { TbUpload } from "react-icons/tb";
import { Button, Container } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DocumentManagementFilterBar from "./DocumentManagementFilterBar/DocumentManagementFilterBar";
import DocumentsLists from "./DocumentsLists/DocumentsLists";

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
            <TbUpload size={18} className="me-1" />
            Upload Document
          </Button>
        </div>
        <DocumentManagementFilterBar />
        <DocumentsLists />
      </Container>
    </>
  );
};

export default OrgStaffDocumentManagementContainer;
