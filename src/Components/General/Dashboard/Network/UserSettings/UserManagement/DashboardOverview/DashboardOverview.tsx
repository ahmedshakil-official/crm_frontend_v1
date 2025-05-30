import { Card, CardBody, Col, Row } from "reactstrap";
import { HiUsers } from "react-icons/hi";
import { BsPersonCheck } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";

const DashboardOverview: React.FC = () => {
  return (
    <Row className="g-4">
      <Col sm="6" xl="3">
        <Card className="shadow-sm">
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h6 className="text-muted mb-0">Total Users</h6>
              {/* <HiUsers className="text-muted fs-4" /> */}
              <i className="fa-solid fa-user-group"></i>
            </div>
            <h2 className="mb-2">2,847</h2>
            <div className="d-flex align-items-center">
              <span className="text-success me-2">+12%</span>
              <span className="text-muted small">Active users across all AR firms</span>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="3">
        <Card className="shadow-sm">
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h6 className="text-muted mb-0">Active Advisers</h6>
              <i className="fa-solid fa-user-check"></i>
            </div>
            <h2 className="mb-2">1,243</h2>
            <div className="d-flex align-items-center">
              <span className="text-success me-2">+8%</span>
              <span className="text-muted small">Currently active mortgage advisers</span>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="3">
        <Card className="shadow-sm">
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h6 className="text-muted mb-0">Pending Approvals</h6>
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h2 className="mb-2">23</h2>
            <div className="d-flex align-items-center">
              <span className="text-danger me-2">-15%</span>
              <span className="text-muted small">User registrations awaiting approval</span>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="3">
        <Card className="shadow-sm">
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h6 className="text-muted mb-0">System Health</h6>
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <h2 className="mb-2">99.8%</h2>
            <div className="d-flex align-items-center">
              <span className="text-success me-2">+0.2%</span>
              <span className="text-muted small">Overall system uptime</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardOverview;
