import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Default, DefaultTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import AuditLog from "./AuditLog/AuditLog";
import EarningsTrend from "./EarningsTrend/EarningsTrend";
import JobToday from "./JobToday/JobToday";
import LatestActivity from "./LatestActivity/LatestActivity";
import ManageInvoice from "./ManageInvoice/ManageInvoice";
import MonthlyRevenueGrowth from "./MonthlyRevenueGrowth/MonthlyRevenueGrowth";
import NewsAndUpdate from "./News&Update/News&Update";
import ProfileGreet from "./ProfileGreet/ProfileGreet";
import TopUsers from "./TopUsers/TopUsers";
import TotalInvest from "./TotalInvest/TotalInvest";
import TotalInvestment from "./TotalInvestment/TotalInvestment";
import TransitionHistory from "./TransitionHistory/TransitionHistory";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Default} parent={Dashboard} title={DefaultTitle} />
      <Container fluid className="default-dashboard">
        <Row>
          <ProfileGreet />
          <EarningsTrend />
          <JobToday />
          <TransitionHistory />
          <AuditLog />
          <TotalInvestment />
          <LatestActivity />
          <MonthlyRevenueGrowth />
          <TopUsers />
          <NewsAndUpdate />
          <TotalInvest />
          <ManageInvoice />
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
