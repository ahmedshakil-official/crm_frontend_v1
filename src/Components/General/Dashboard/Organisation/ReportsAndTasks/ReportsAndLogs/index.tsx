import { Container } from "reactstrap";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import ReportsAndLogsOverview from "./ReportsAndLogsOverview/ReportsAndLogsOverview";
import ReportsAndLogsTabs from "./ReportsAndLogsTabs/ReportsAndLogsTabs";

const ReportsAndLogsContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Reports & Logs"
        title="Monitor activities and generate comprehensive reports"
        parent="Reports & Tasks"
        activePage="Reports & Logs"
      />
      <Container fluid>
        <ReportsAndLogsOverview />
        <ReportsAndLogsTabs />
      </Container>
    </>
  );
};

export default ReportsAndLogsContainer;
