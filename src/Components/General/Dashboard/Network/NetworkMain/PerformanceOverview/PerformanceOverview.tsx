import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const PerformanceOverview: React.FC = () => {
  return (
    <Row className="py-2">
      <Col lg>
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                New Mortgage Enquiry
              </span>
              <span className="badge bg-success-subtle text-success">
                ↑ +10%
              </span>
            </div>
            <h2 className="mb-0 mt-4">800</h2>
          </CardBody>
        </Card>
      </Col>

      <Col lg>
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                Mortgage Cases Submitted
              </span>
              <span className="badge bg-success-subtle text-success">
                ↑ +12%
              </span>
            </div>
            <h2 className="mb-0 mt-4">500</h2>
          </CardBody>
        </Card>
      </Col>

      <Col lg>
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                Mortgage cases offered
              </span>
              <span className="badge bg-danger-subtle text-danger">↓ -3%</span>
            </div>
            <h2 className="mb-0 mt-4">140</h2>
          </CardBody>
        </Card>
      </Col>

      <Col lg>
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                Mortgage cases Completed
              </span>
              <span className="badge bg-danger-subtle text-danger">↓ +14%</span>
            </div>
            <div className="mt-4">
              <h2 className="mb-0 d-inline-block">240</h2>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg>
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                Insurance Cases Submitted
              </span>
              <span className="badge bg-success-subtle text-success">↑ +1%</span>
            </div>
            <div className="mt-4">
              <h2 className="mb-0 d-inline-block">240</h2>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PerformanceOverview;
