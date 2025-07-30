import { useGetNetNewMortgageEnquiryQuery } from "@/Redux/Reducers/Network/NetworkMain/NetPerformanceOverviewApi";
import LoadingSpinner from "@/app/loading";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const PerformanceOverview: React.FC = () => {
  // RTK Hooks
  const { data: NMEData, isLoading: isMELoading } =
    useGetNetNewMortgageEnquiryQuery(undefined);

  return (
    <Row className="py-2">
      <Col lg>
        <Card className="border-0 shadow">
          {isMELoading ? (
            <CardBody className="d-flex justify-content-center align-items-center my-2 py-4">
              <LoadingSpinner />
            </CardBody>
          ) : (
            <CardBody>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="text-muted small fw-bold">
                  New Mortgage Enquiry
                </span>
              </div>
              {NMEData && NMEData.length > 0 ? (
                NMEData.map((item: any) => (
                  <h2 key={item.id} className="mb-0 mt-3">
                    {item.value ?? 0}
                    <small
                      className="text-success"
                      style={{ fontSize: "10px" }}
                    >
                      ↑{item.percentage ?? "0%"}
                    </small>
                  </h2>
                ))
              ) : (
                <h2 className="mb-0 mt-3">
                  0
                  <small
                    className="text-dark opacity-50"
                    style={{ fontSize: "10px" }}
                  >
                    ↑0%
                  </small>
                </h2>
              )}
            </CardBody>
          )}
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
            <h2 className="mb-0 mt-3">
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
            <div className="mt-3">
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
            <div className="mt-3">
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
