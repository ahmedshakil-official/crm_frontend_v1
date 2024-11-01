import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Ecommerce, EcommerceTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import SalesAnalytics from "./SalesAnalytics/SalesAnalytics";
import UserStatus from "./UserStatus/UserStatus";
import SalesChart from "./SalesChart/SalesChart";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import OurSaleValue from "./OurSaleValue/OurSaleValue";
import BestSeller from "./BestSeller/BestSeller";
import TotalGoal from "./TotalGoal/TotalGoal";
import SwiperSlide from "./SwiperSlide/SwiperSlide";
import ActivityTimeline from "./ActivityTimeline/ActivityTimeline";
import OurTarget from "./OurTarget/OurTarget";
import RecentOrders from "../RecentOrders/RecentOrders";

const EcommerceContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ecommerce} parent={Dashboard} title={EcommerceTitle} />
      <Container fluid className="dashboard-2">
        <Row>
          <SalesAnalytics />
          <UserStatus />
          <SalesChart />
          <TopSellingProducts />
          <OurSaleValue />
          <BestSeller />
          <TotalGoal />
          <SwiperSlide />
          <ActivityTimeline />
          <OurTarget />
          <RecentOrders/>
        </Row>
      </Container>
    </>
  );
};

export default EcommerceContainer;
