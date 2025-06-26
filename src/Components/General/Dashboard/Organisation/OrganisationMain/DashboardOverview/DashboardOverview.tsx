import {
  TbBriefcase2Filled,
  TbCoinPound,
  TbHeartCheck,
  TbShieldCheckFilled,
  TbTrendingUp,
  TbUsers,
} from "react-icons/tb";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const DashboardOverview: React.FC = () => {
  return (
    <Row>
      {/* Total Advisers */}
      <Col xl={2} lg={4} sm={6} xs={12} className="mb-3">
        <Card className="border-0 rounded-3 shadow-sm bg-white">
          <CardBody className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Total Advisers
                </CardTitle>
                <h4 className="mb-1 text-dark">12</h4>
                <p className="text-success small mb-0">
                  +2 <span style={{ fontSize: "8px" }}>this month</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-primary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbUsers className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Active Clients */}
      <Col xl={2} lg={4} sm={6} xs={12} className="mb-3">
        <Card className="border-0 rounded-3 shadow-sm bg-white">
          <CardBody className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Active Clients
                </CardTitle>
                <h4 className="mb-1 text-dark">167</h4>
                <p className="text-success small mb-0">
                  +9 <span style={{ fontSize: "8px" }}>this month</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-secondary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbBriefcase2Filled className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Cases In Progress */}
      <Col xl={2} lg={4} sm={6} xs={12} className="mb-3">
        <Card className="border-0 rounded-3 shadow-sm bg-white">
          <CardBody className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Cases In Progress
                </CardTitle>
                <h4 className="mb-1 text-dark">28</h4>
                <p className="text-success small mb-0">
                  -3 <span style={{ fontSize: "8px" }}>from last month</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-warning rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbTrendingUp className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Revenue This Month */}
      <Col xl={2} lg={4} sm={6} xs={12} className="mb-3">
        <Card className="border-0 rounded-3 shadow-sm bg-white">
          <CardBody className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Revenue This Month
                </CardTitle>
                <h4 className="mb-1 text-dark">£67,000</h4>
                <p className="text-success small mb-0">
                  +21.8% <span style={{ fontSize: "8px" }}>vs last month</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-success rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbCoinPound className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Compliance Status */}
      <Col xl={2} lg={4} sm={6} xs={12} className="mb-3">
        <Card className="border-0 rounded-3 shadow-sm bg-white">
          <CardBody className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Compliance Status
                </CardTitle>
                <h4 className="mb-1 text-dark">85%</h4>
                <p className="text-success small mb-0">Above target</p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-secondary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbShieldCheckFilled className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* New Card: Employee Satisfaction */}
      <Col xl={2} lg={4} sm={6} xs={12} className="mb-3">
        <Card className="border-0 rounded-3 shadow-sm bg-white">
          <CardBody className="p-3">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Employee Satisfaction
                </CardTitle>
                <h4 className="mb-1 text-dark">78%</h4>
                <p className="text-success small mb-0">
                  +5% <span style={{ fontSize: "8px" }}>this quarter</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-success rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbHeartCheck className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardOverview;
