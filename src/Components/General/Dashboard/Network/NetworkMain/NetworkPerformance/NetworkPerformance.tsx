import React from "react";
import { Card, Col, Row } from "reactstrap";

const NetworkPerformance: React.FC = () => {
  return (
    <Card>
      <Row className="p-3 pb-0 mt-3">
        <Col xl="3" md="6">
          <Card className="bg-light-success bg-opacity-10  border-0 p-3">
            <div className="d-flex flex-column">
              <span className="fw-medium">Active Deals</span>
              <h3 className="mb-2 fw-semibold mt-2">312</h3>
              <span className="text-danger small">26 pending compliance</span>
            </div>
          </Card>
        </Col>

        <Col xl="3" md="6">
          <Card className="bg-light-primary bg-opacity-10  border-0 p-3">
            <div className="d-flex flex-column">
              <span className="fw-medium">YTD Completions</span>
              <h3 className="mb-2 fw-semibold mt-2">14,23</h3>
              <span className="text-success small">+8% vs last year</span>
            </div>
          </Card>
        </Col>

        <Col xl="3" md="6">
          <Card className="bg-light-info bg-opacity-10  border-0 p-3">
            <div className="d-flex flex-column">
              <span className="fw-medium">Total Broker Companies</span>
              <h3 className="mb-2 fw-semibold mt-2">48</h3>
              <span className="text-success small">+ 3 this month</span>
            </div>
          </Card>
        </Col>

        <Col xl="3" md="6">
          <Card className="bg-light-warning bg-opacity-10 border-0 p-3">
            <div className="d-flex flex-column">
              <span className="fw-medium">Individual Brokers</span>
              <h3 className="mb-2 fw-semibold mt-2">243</h3>
              <span className="text-success small">+ 12 this month</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default NetworkPerformance;
