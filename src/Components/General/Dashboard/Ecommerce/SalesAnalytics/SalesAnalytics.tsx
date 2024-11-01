import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { SalesAnalyticsHeading } from "@/Constant";
import { ChartSchoolPerformance } from "@/Data/General/Dashboard/Ecommerce/EcommerceChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SalesAnalytics = () => {
  return (
    <Col xxl="5" xl="7" lg="12" className="box-col-7">
      <Card className="analytics-card">
        <DashboardCommonHeader title={SalesAnalyticsHeading} dropDownFalse={true} tablist={true} />
        <CardBody className="sale-chart-box">
          <ul className="d-flex">
            <li className="statistic-icon">
              <div>
                <div>
                  <div className="statistic-content"><span className="primary-dot"> </span>Pending</div>
                </div>
                <div className="statistic-num ms-auto text-end font-danger d-flex align-items-center">
                  <h5>$4,875</h5>
                  <div><span>28%</span><i className="fa fa-chevron-up ms-1" /></div>
                </div>
              </div>
            </li>
            <li className="statistic-icon">
              <div>
                <div>
                  <div className="statistic-content"><span className="secondary-dot"> </span>Complete</div>
                </div>
                <div className="statistic-num ms-auto text-end font-primary d-flex align-items-center">
                  <h5>$1,320</h5>
                  <div><span>36.28%</span><i className="fa fa-chevron-down ms-1" /></div>
                </div>
              </div>
            </li>
          </ul>
          <ReactApexChart options={ChartSchoolPerformance} series={ChartSchoolPerformance.series} height={270} type={"line"} />
          <div id="chart-school-performance" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesAnalytics;
