import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { CurrentBalance, Live, ThisInvestCycle, TotalInvestHeading } from "@/Constant";
import { IncomeChart } from "@/Data/General/Dashboard/Default/DefaultChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const TotalInvest = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="proorder-xxl-11 box-col-6">
      <Card className="height-equal">
        <DashboardCommonHeader title={TotalInvestHeading} />
        <CardBody className="total-invest">
          <Row>
            <Col xs="6" md="12" className="income-chart">
              <ReactApexChart options={IncomeChart} series={IncomeChart.series} height={400} type={"radialBar"} className="Incomechrt" />
            </Col>
            <Col xs="6" md="12" className="invest-content text-center">
              <SvgIcon className="stroke-icon" iconId="chart-invest" />
              <div className="btn btn-pill btn-primary">
                <span> </span>
                {Live}
              </div>
              <p className="mb-0 des-title">{ThisInvestCycle}</p>
              <h3>7,48,000</h3>
              <p className="description-title">{CurrentBalance}</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalInvest;
