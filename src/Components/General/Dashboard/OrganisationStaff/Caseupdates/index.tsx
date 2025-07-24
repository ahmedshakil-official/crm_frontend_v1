import Link from "next/link";
import { TbEye } from "react-icons/tb";
import { Button, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonComponents/Breadcrumbs/Breadcrumbs";
import CaseTimeline from "./CaseTimeline/CaseTimeline";
import CaseUpdatesFilterBar from "./CaseUpdatesFilterBar/CaseUpdatesFilterBar";

const CaseupdatesContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Case Updates"
        subTitle="Timeline view of all client case actions and status updates"
        child="Case Updates"
      />
      <Container fluid>
        <div className=" d-flex justify-content-end">
          <Link href="/dashboard/orgstaff/caseupdates/cases" passHref>
            <Button className="border-0">
              <TbEye size={18} className="me-1" />
              View All Cases
            </Button>
          </Link>
        </div>
        <Row>
          <CaseUpdatesFilterBar />
        </Row>
        <Row>
          <CaseTimeline />
        </Row>
      </Container>
    </>
  );
};

export default CaseupdatesContainer;
