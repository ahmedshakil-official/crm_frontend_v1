import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Earnings, Monthly } from "@/Constant";
import { OptionsVisitor } from "@/Data/General/Dashboard/Default/DefaultChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const EarningsTrend = () => {
  return (
    <Col xxl="3" xl="4" sm="6" className="proorder-xxl-2 box-col-6">
      <Card className="earning-card">
        <DashboardCommonHeader title={Earnings} dropdownTitle={Monthly}/>
        <CardBody className="pb-0">
          <div className="d-flex align-center gap-3">
            <h2>$4,875</h2>
            <span className="text-primary">
              36.28%
              <SvgIcon className="stroke-icon stroke-primary" iconId="arrow-down"/>
            </span>
          </div>
          <ReactApexChart options={OptionsVisitor} series={OptionsVisitor.series} height={225} type={"bar"} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default EarningsTrend;
