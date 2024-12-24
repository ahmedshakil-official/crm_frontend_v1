import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import { Container, Row } from "reactstrap";
import AllCaseBreadcrumbs from "./components/AllCaseBreadcrumbs";
import CaseHistory from "./components/CaseHistory";
import CasesTable from "./components/CasesTable";
import ProfileGreet from "./components/ProfileGreet";
import SuccessFulCase from "./components/SuccessFulCase";
import { useState } from "react";

const AllCaseContainer: React.FC = ({

}) => {
  const [isFetchedLead, setIsFetchedLead] = useState(false);
  return (
    <>
      <AllCaseBreadcrumbs
        mainTitle={Organization}
        parent={Dashboard}
        title={OrganizationTitle}
      />
      <Container fluid className="default-dashboard">
        <Row>
          <ProfileGreet />
          <SuccessFulCase />
          <CaseHistory />
        </Row>
        <Row>
          <CasesTable
            setIsFetchedLead={setIsFetchedLead}
            isFetchedLead={isFetchedLead}
          />
        </Row>
      </Container>
    </>
  );
};

export default AllCaseContainer;
