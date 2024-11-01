import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { GeneralTitle, Widgets } from "@/Constant";
import { Container, Row } from "reactstrap";
import OurSaleValue from "./OurSaleValue/OurSaleValue";
import TotalInvestment from "./TotalInvestment/TotalInvestment";
import SwiperSlide from "./SwiperSlide/SwiperSlide";
import WidgetContent from "./WidgetContent";
import TotalGoal from "./TotalGoal/TotalGoal";
import WidgetCharts from "./WidgetCharts";
import Schedule from "./Schedule/Schedule";
import UpcomingClasses from "./UpcomingClasses/UpcomingClasses";
import MonthlyRevenueGrowth from "./MonthlyRevenueGrowth/MonthlyRevenueGrowth";

const GeneralWidgets = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GeneralTitle} parent={Widgets} />
      <Container className="general-widget" fluid>
        <Row>
          <OurSaleValue />
          <TotalInvestment />
          <SwiperSlide />
          <WidgetContent />
          <TotalGoal />
          <WidgetCharts />
          <Schedule />
          <UpcomingClasses />
          <MonthlyRevenueGrowth />
        </Row>
      </Container>
    </>
  );
};
export default GeneralWidgets;
