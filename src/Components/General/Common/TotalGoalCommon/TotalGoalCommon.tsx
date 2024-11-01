import { AsFrom, DownloadDetails, Duration, GoalArchive, TotalGoal } from "@/Constant";
import { SalesStatsOption } from "@/Data/General/Dashboard/Ecommerce/EcommerceChartData";
import ReactApexChart from "react-apexcharts";
import { Button, Col, Progress, Row } from "reactstrap";

const TotalGoalCommon = () => {
  return (
    <Row>
      <Col sm="6" xl="6" lg="6" className="radial-chart">
        <ReactApexChart options={SalesStatsOption} series={SalesStatsOption.series} height={350} type="radialBar" />
        <div className="content-label">
          <p className="mb-0 font-primary">{AsFrom}</p>
          <h4>{"25 March"}</h4>
        </div>
      </Col>
      <Col sm="6" xl="6" lg="6" className="radial-text">
        <div className="radial-content">
          <div className="text-center">
            <h4>{TotalGoal}</h4>
            <h3>{"$92,000.30"}</h3>
            <hr />
            <h5 className="progress-widget">
              {GoalArchive} : <span>{"$81,000.000"}</span>
            </h5>
            <Progress animated value={65} className="sm-progress-bar" />
            <h5 className="progress-widget">
              {Duration}: <span>{"9 Month"}</span>
            </h5>
            <Progress animated value={65} className="sm-progress-bar" />
            <Button tag={"a"} className="btn-pill" color="primary" href="/dashboard/default" download>
              {DownloadDetails}
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TotalGoalCommon;
