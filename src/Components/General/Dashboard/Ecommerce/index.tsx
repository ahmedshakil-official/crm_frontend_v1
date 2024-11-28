import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Ecommerce, EcommerceTitle } from "@/Constant";
import { useSession } from "next-auth/react"; // Import the useSession hook
import { Container, Row } from "reactstrap";
import RecentOrders from "../RecentOrders/RecentOrders";
import ActivityTimeline from "./ActivityTimeline/ActivityTimeline";
import BestSeller from "./BestSeller/BestSeller";
import OurSaleValue from "./OurSaleValue/OurSaleValue";
import OurTarget from "./OurTarget/OurTarget";
import SalesAnalytics from "./SalesAnalytics/SalesAnalytics";
import SalesChart from "./SalesChart/SalesChart";
import SwiperSlide from "./SwiperSlide/SwiperSlide";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import TotalGoal from "./TotalGoal/TotalGoal";
import UserStatus from "./UserStatus/UserStatus";

const EcommerceContainer = () => {
  const { data: session } = useSession(); // Retrieve session data using useSession hook

  // Log the access token (or any other session data)
  // if (session?.user?.accessToken) {
  //   console.log("Access Token:", session.user.accessToken);
  // } else {
  //   console.log("No access token found in session.");
  // }
  // console.log(session)

  return (
    <>
      <Breadcrumbs
        mainTitle={Ecommerce}
        parent={Dashboard}
        title={EcommerceTitle}
      />
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
          <RecentOrders />
        </Row>
      </Container>
    </>
  );
};

export default EcommerceContainer;
