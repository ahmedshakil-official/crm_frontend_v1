import { CommonDashboardProps } from "@/Types/CommonComponents/CommonDashboard/CommonDashboardType";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const PerformanceOverview: React.FC<CommonDashboardProps> = ({
  isLoading,
  CommonDashboardData,
}) => {
  return (
    <>
      {isLoading ? (
        // Skeleton Loaders
        [...Array(5)].map((_, index) => (
          <Col xl key={index} className="mb-2">
            <Card className="border-0 p-2 rounded-2 shadow-sm bg-white">
              <CardBody className="p-2">
                <div className="d-flex justify-content-between">
                  <div style={{ width: "70%" }}>
                    <div
                      className="skeleton-loading mb-2"
                      style={{
                        width: "80%",
                        height: "16px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />
                    <div
                      className="skeleton-loading"
                      style={{
                        width: "50%",
                        height: "24px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />
                  </div>
                  <div
                    className="skeleton-loading rounded-3"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#e0e0e0",
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        ))
      ) : (
        // Render actual performance cards
        <Row className="py-2">
          <Col lg>
            <Card className="border-0 shadow">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="text-muted small fw-bold">
                    New Mortgage Enquiry
                  </span>
                </div>
                <h2 className="mb-0 mt-3">
                  {CommonDashboardData?.summary_cards?.new_mortgage_enquiry ??
                    0}
                  {/* Optional: add trend indicator dynamically later */}
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
                    Mortgage Cases Submitted
                  </span>
                </div>
                <h2 className="mb-0 mt-3">
                  {CommonDashboardData?.summary_cards
                    ?.mortgage_cases_submitted ?? 0}
                  <small className="text-success" style={{ fontSize: "10px" }}>
                    ↑+8%
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
                    Mortgage Cases Offered
                  </span>
                </div>
                <h2 className="mb-0 mt-3">
                  {/* Assuming this field is missing; use 0 or calculate */}
                  {CommonDashboardData?.summary_cards?.mortgage_cases_offered ??
                    0}
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
                    Mortgage Cases Completed
                  </span>
                </div>
                <h2 className="mb-0 mt-3">
                  {CommonDashboardData?.summary_cards
                    ?.mortgage_cases_completed ?? 0}
                  <small className="text-success" style={{ fontSize: "10px" }}>
                    ↑+14%
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
                    Insurance Cases Submitted
                  </span>
                </div>
                <h2 className="mb-0 mt-3">
                  {CommonDashboardData?.summary_cards
                    ?.insurance_cases_submitted ?? 0}
                  <small className="text-success" style={{ fontSize: "10px" }}>
                    ↑+1%
                  </small>
                </h2>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default PerformanceOverview;
