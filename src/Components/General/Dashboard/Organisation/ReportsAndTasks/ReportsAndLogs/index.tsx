import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import ReportsAndLogsOverview from "./ReportsAndLogsOverview/ReportsAndLogsOverview";
import ReportsAndLogsTabs from "./ReportsAndLogsTabs/ReportsAndLogsTabs";

const ReportsAndLogsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Reports & Logs"
        subTitle="Monitor activities and generate comprehensive reports"
        parent="Reports & Tasks"
        child="Reports & Logs"
      />
      <Container fluid>
        <ReportsAndLogsOverview />
        <ReportsAndLogsTabs />
      </Container>
    </>
  );
};

export default ReportsAndLogsContainer;
