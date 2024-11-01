import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { TotalInvestmentHeading } from "@/Constant";
import { Investment } from "@/Data/General/Dashboard/Default/DefaultChartData";
import { TotalInvestmentData } from "@/Data/General/Dashboard/Default/DefaultData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const TotalInvestment = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="proorder-xxl-3 box-col-6">
      <Card>
        <DashboardCommonHeader title={TotalInvestmentHeading} />
        <CardBody className="investment-card">
          <ReactApexChart options={Investment} series={Investment.series} height={380} type={"radialBar"} />
          <ul className="d-flex align-center justify-content-center">
            {TotalInvestmentData.map((data, index) => (
              <li className="text-center" key={index}>
                <p className="mb-0">{data.title}</p>
                <h6>{data.price}</h6>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalInvestment;
