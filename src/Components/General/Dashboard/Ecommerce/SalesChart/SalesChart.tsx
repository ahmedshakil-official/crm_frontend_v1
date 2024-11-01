import { CommonDropdown } from "@/Components/General/Common/DashboardCommonHeader/CommonDropdown";
import { OrderBar, OrderOverview } from "@/Data/General/Dashboard/Ecommerce/EcommerceChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const SalesChart = () => {
  return (
    <Col xxl="3" xl="4" md="5" sm="6" className="box-col-4">
      <Card className="sale-card overflow-hidden">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <div>
              <h3>$1500.89K</h3>
              <span>Sales last 5 Months</span>
            </div>
            <CommonDropdown />
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <div className="current-sale-container order-container">
            <ReactApexChart options={OrderOverview} series={OrderOverview.series} height={345} type={"area"} className="overview-wrapper" />
            <div className="back-bar-container">
              <ReactApexChart options={OrderBar} series={OrderBar.series} height={250} type={"bar"} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesChart;
