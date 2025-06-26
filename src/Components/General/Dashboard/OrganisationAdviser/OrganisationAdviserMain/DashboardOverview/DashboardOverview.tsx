import {
  TbAwardFilled,
  TbCircleCheckFilled,
  TbClock,
  TbFileText,
  TbUsers,
} from "react-icons/tb";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const DashboardOverview: React.FC = () => {
  return (
    <Row>
      {/* New Clients This Month  */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted">
                  New Clients This Month
                </CardTitle>
                <h4 className="mb-1 text-dark">10</h4>
                <p className="text-success small mb-0">
                  +2 <span style={{ fontSize: "8px" }}>from last month</span>
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

      {/* Case Completed */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Case Completed
                </CardTitle>
                <h4 className="mb-1 text-dark">167</h4>
                <p className="text-success small mb-0">
                  +9% <span style={{ fontSize: "8px" }}>vs target</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-secondary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbCircleCheckFilled className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/*Pending Documents */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Pending Documents
                </CardTitle>
                <h4 className="mb-1 text-dark">5</h4>
                <p className="text-success small mb-0">
                  2 <span style={{ fontSize: "8px" }}>urgent</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-success rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbFileText className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Upcoming Tasks */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Upcoming Tasks
                </CardTitle>
                <h4 className="mb-1 text-dark">8</h4>
                <p className="text-success small mb-0">
                  2 <span style={{ fontSize: "8px" }}>today</span>
                </p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-success rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbClock className="fs-6" />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Target Acheivements */}
      <Col xl className="mb-2">
        <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
          <CardBody className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <CardTitle className="small text-muted text-truncate">
                  Target Acheivements
                </CardTitle>
                <h4 className="mb-1 text-dark">117%</h4>
                <p className="text-success small mb-0">Above target</p>
              </div>
              <div>
                <span
                  className="d-flex justify-content-center align-items-center bg-secondary rounded-3"
                  style={{ width: "30px", height: "30px" }}
                >
                  <TbAwardFilled className="fs-6" />
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
