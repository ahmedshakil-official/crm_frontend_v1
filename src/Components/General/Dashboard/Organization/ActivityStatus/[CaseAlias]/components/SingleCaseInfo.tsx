import { SingleCaseInfoProps } from "@/Types/LayoutTypes";
import { Card, CardBody, CardHeader, Col, Progress, Row } from "reactstrap";

const SingleCaseInfo: React.FC<SingleCaseInfoProps> = ({ caseInfo }) => {
  return (
    <Col xl="6" md="6">
      <Card>
        <CardHeader>
          <h3>Case Info</h3>
        </CardHeader>
        <Row className="px-3 mt-3">
          {/* 1st card */}
          <Col md="6" className="mb-4">
            <Card className="ecommerce-widget">
              <CardBody className="support-ticket-font pt-2">
                <CardHeader className="p-0 m-0 text-center">
                  <h4 className="fw-bold">Case User</h4>
                </CardHeader>
                <Row className="pt-2">
                  <Col xs="12">
                    <span className="pt-1">
                      <strong>Name:</strong> {caseInfo?.lead_user?.first_name}{" "}
                      {caseInfo?.lead_user?.last_name}
                    </span>
                    <span className="pt-1">
                      <strong>Email:</strong> {caseInfo?.lead_user?.email}
                    </span>
                    <span className="pt-1">
                      <strong>Phone:</strong> +{caseInfo?.lead_user?.phone}
                    </span>
                  </Col>
                </Row>
                <div className="progress-showcase">
                  <Progress
                    value={100}
                    className="sm-progress-bar"
                    color="primary"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* 2nd card */}
          <Col md="6" className="mb-4">
            <Card className="ecommerce-widget">
              <CardBody className="support-ticket-font pt-2">
                <CardHeader className="p-0 m-0 text-center">
                  <h4 className="fw-bold">Case Info</h4>
                </CardHeader>
                <Row className="pt-2">
                  <Col xs="12">
                    <span className="pt-1">
                      <strong>Case Id:</strong>{" "}
                      {caseInfo?.alias
                        ? caseInfo.alias.substring(0, 8)
                        : "No alias available"}
                    </span>
                    <span className="pt-1">
                      <strong>Case Category:</strong> {caseInfo?.case_category}
                    </span>
                    <span className="pt-1">
                      <strong>Applicent Type:</strong>{" "}
                      <span className="bg-success px-1 rounded-5">
                        {caseInfo?.applicant_type}
                      </span>
                    </span>
                  </Col>
                </Row>
                <div className="progress-showcase">
                  <Progress
                    value={100}
                    className="sm-progress-bar"
                    color="warning"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* 3rd card */}
          <Col md="6" className="mb-4">
            <Card className="ecommerce-widget">
              <CardBody className="support-ticket-font pt-2">
                <CardHeader className="p-0 m-0 text-center">
                  <h4 className="fw-bold">Current Status</h4>
                </CardHeader>
                <Row className="pt-2">
                  <Col xs="12">
                    <span className="pt-1">
                      <strong>Case Status:</strong> {caseInfo?.case_status}
                    </span>
                    <span className="pt-1">
                      <strong>Active Status:</strong>{" "}
                      <span className="bg-success px-2 rounded-5">
                        {caseInfo?.is_removed === false ? "Active" : "Removed"}
                      </span>
                    </span>
                    <span className="pt-1">
                      <strong>Case Stage:</strong>{" "}
                      <span className="bg-info px-2 rounded-5">
                        {caseInfo?.case_stage}
                      </span>
                    </span>
                  </Col>
                </Row>
                <div className="progress-showcase">
                  <Progress
                    value={100}
                    className="sm-progress-bar"
                    color="info"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* 4th card */}
          <Col md="6" className="mb-4">
            <Card className="ecommerce-widget">
              <CardBody className="support-ticket-font pt-2">
                <CardHeader className="p-0 m-0 text-center">
                  <h4 className="fw-bold">Assigned Advisor</h4>
                </CardHeader>
                <Row className="pt-2">
                  <Col xs="12">
                    <span className="pt-1">
                      <strong>Name:</strong> {caseInfo?.created_by?.first_name}{" "}
                      {caseInfo?.created_by?.last_name}
                    </span>
                    <span className="pt-1">
                      <strong>Email:</strong> {caseInfo?.created_by?.email}
                    </span>
                    <span className="pt-1">
                      <strong>User Type:</strong>
                      {caseInfo?.created_by?.user_type}
                    </span>
                  </Col>
                </Row>
                <div className="progress-showcase">
                  <Progress
                    value={100}
                    className="sm-progress-bar"
                    color="success"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="px-3">
          <div>
            <h4>Notes:</h4>
            <p>{caseInfo?.notes ? caseInfo.notes : "Notes not available"}</p>
          </div>
        </Row>
      </Card>
    </Col>
  );
};

export default SingleCaseInfo;
