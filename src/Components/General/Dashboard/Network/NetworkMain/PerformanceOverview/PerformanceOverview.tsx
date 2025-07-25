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
            </div>
            <h2 className="mb-0 mt-4">
              800
              <small className="text-success" style={{ fontSize: "10px" }}>
                ↑+10%
              </small>
            </h2>
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
            </div>
            <h2 className="mb-0 mt-4">
              500
              <small className="text-success" style={{ fontSize: "10px" }}>
                ↑+12%
              </small>
            </h2>
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
            </div>
            <h2 className="mb-0 mt-4">
              140
              <small className="text-danger" style={{ fontSize: "10px" }}>
                ↓-3%
              </small>
            </h2>
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
            </div>
            <div className="mt-4">
              <h2 className="mb-0 d-inline-block">
                240
                <small className="text-success" style={{ fontSize: "10px" }}>
                  ↑+14%
                </small>
              </h2>
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
            </div>
            <div className="mt-4">
              <h2 className="mb-0 d-inline-block">
                240
                <small className="text-success" style={{ fontSize: "10px" }}>
                  ↑+1%
                </small>
              </h2>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PerformanceOverview;
