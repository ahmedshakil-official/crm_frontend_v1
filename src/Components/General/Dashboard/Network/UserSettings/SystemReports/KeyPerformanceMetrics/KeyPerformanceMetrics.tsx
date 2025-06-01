import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const KeyPerformanceMetrics: React.FC = () => {
  return (
    <Row>
      <Col>
        <Card className="shadow-sm mb-4">
          <CardBody className="px-4 py-4">
            <div className="d-flex align-items-center mb-4">
              <i
                className="fas fa-chart-line me-2"
                style={{ color: "#34A853" }}
              ></i>
              <h5
                className="mb-0"
                style={{ color: "#2C3E50", fontWeight: "500" }}
              >
                Key Performance Metrics
              </h5>
            </div>
            <Row>
              <Col md={3} className="mb-4 mb-md-0">
                <div className="d-flex flex-column">
                  <h2
                    style={{
                      color: "#1a73e8",
                      fontSize: "2.5rem",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    1,847
                  </h2>
                  <div
                    className="d-flex align-items-center"
                    style={{ marginBottom: "8px" }}
                  >
                    <span
                      style={{
                        color: "#34A853",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      <i className="fas fa-arrow-up me-1"></i>
                      +12% vs last month
                    </span>
                  </div>
                  <span style={{ color: "#5F6368", fontSize: "0.9rem" }}>
                    Total Cases This Month
                  </span>
                </div>
              </Col>

              <Col md={3} className="mb-4 mb-md-0">
                <div className="d-flex flex-column">
                  <h2
                    style={{
                      color: "#34A853",
                      fontSize: "2.5rem",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    98.7%
                  </h2>
                  <div
                    className="d-flex align-items-center"
                    style={{ marginBottom: "8px" }}
                  >
                    <span
                      style={{
                        color: "#34A853",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      <i className="fas fa-arrow-up me-1"></i>
                      +0.3% vs last month
                    </span>
                  </div>
                  <span style={{ color: "#5F6368", fontSize: "0.9rem" }}>
                    System Uptime
                  </span>
                </div>
              </Col>

              <Col md={3} className="mb-4 mb-md-0">
                <div className="d-flex flex-column">
                  <h2
                    style={{
                      color: "#9334E8",
                      fontSize: "2.5rem",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    156
                  </h2>
                  <div
                    className="d-flex align-items-center"
                    style={{ marginBottom: "8px" }}
                  >
                    <span
                      style={{
                        color: "#34A853",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      All operational
                    </span>
                  </div>
                  <span style={{ color: "#5F6368", fontSize: "0.9rem" }}>
                    API Integrations Active
                  </span>
                </div>
              </Col>

              <Col md={3} className="mb-4 mb-md-0">
                <div className="d-flex flex-column">
                  <h2
                    style={{
                      color: "#EA4335",
                      fontSize: "2.5rem",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    4.2s
                  </h2>
                  <div
                    className="d-flex align-items-center"
                    style={{ marginBottom: "8px" }}
                  >
                    <span
                      style={{
                        color: "#34A853",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      <i className="fas fa-arrow-down me-1"></i>
                      -0.8s vs last month
                    </span>
                  </div>
                  <span style={{ color: "#5F6368", fontSize: "0.9rem" }}>
                    Avg Response Time
                  </span>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default KeyPerformanceMetrics;
