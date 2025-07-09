import {
    TbAlertTriangle,
  TbAwardFilled,
  TbCheckbox,
  TbClock,
  TbFileText,
  TbUsers,
} from "react-icons/tb";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const DashboardOverview: React.FC = () => {
  return (
    <Row>
      {/* Documents Pending  */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted">
                  Documents Pending
                </CardTitle>
                <h4 className="mb-1 text-dark">10</h4>
                <p className="text-success small mb-0">
                  <span>4 high priority</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-primary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbFileText className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Verifications Today */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Verifications Today
                </CardTitle>
                <h4 className="mb-1 text-dark">167</h4>
                <p className="text-success small mb-0">
                  +9 <span>from yesterday</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-secondary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbCheckbox className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/*Active Advisers */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Active Advisers
                </CardTitle>
                <h4 className="mb-1 text-dark">5</h4>
                <p className="text-success small mb-0">
                  <span>All Online</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-success rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbUsers className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Urgent Alerts */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Urgent Alerts
                </CardTitle>
                <h4 className="mb-1 text-dark">8</h4>
                <p className="text-success small mb-0">
                  2 <span> new today</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-primary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbAlertTriangle className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Avg Response Time */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Avg Response Time
                </CardTitle>
                <h4 className="mb-1 text-dark">2.4h</h4>
                <p className="text-success small mb-0">
                  -15% <span> vs last week</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-secondary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbClock className="fs-6" />
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
