import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const PerformanceOverview: React.FC = () => {
  return (
    <Row className="py-2">
      <Col sm="6" xl="3">
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                Mortgage cases completed
              </span>
              <span className="badge bg-success-subtle text-success">
                ↑ + 10%
              </span>
            </div>
            <h2 className="mb-0 mt-4">800</h2>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="3">
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">Total loan value</span>
              <span className="badge bg-success-subtle text-success">
                ↑ + 12%
              </span>
            </div>
            <h2 className="mb-0 mt-4">£10,565,328</h2>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="3">
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">Total Revenue</span>
              <span className="badge bg-danger-subtle text-danger">↓ - 3%</span>
            </div>
            <h2 className="mb-0 mt-4">140,756</h2>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" xl="3">
        <Card className="border-0 shadow">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted small fw-bold">
                Average speed of completion
              </span>
              <span className="badge bg-danger-subtle text-danger">
                ↓ - 14%
              </span>
            </div>
            <div className="mt-4">
              <h2 className="mb-0 d-inline-block">24 Days</h2>
              <span className="text-muted ms-2 small">vs previous period</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PerformanceOverview;
