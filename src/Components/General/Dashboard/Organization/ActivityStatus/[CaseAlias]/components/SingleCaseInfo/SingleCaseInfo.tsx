import { IsingleCaseInfo } from "@/Types/LayoutTypes";
import { Card, CardBody, CardHeader, Col, Progress, Row } from "reactstrap";

const SingleCaseInfo: React.FC<IsingleCaseInfo> = ({ caseInfo }) => {
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
                      <strong>Case Id:</strong> {caseInfo?.alias}
                    </span>
                    <span className="pt-1">
                      <strong>Case Category:</strong> {caseInfo?.case_category}
                    </span>
                    <span className="pt-1">
                      <strong>Applicent Type:</strong>{" "}
                      <span className="bg-success px-1 rounded-5">{caseInfo?.applicant_type}</span>
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
                      <strong>Case Status:</strong> Someone
                    </span>
                    <span className="pt-1">
                      <strong>Active Status:</strong>{" "}
                      <span className="bg-success px-2 rounded-5">Active</span>
                    </span>
                    <span className="pt-1">
                      <strong>Case Stage:</strong>{" "}
                      <span className="bg-info px-2 rounded-5">RCC</span>
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
                      <strong>Name:</strong> {caseInfo?.lead_user.first_name}
                    </span>
                    <span className="pt-1">
                      <strong>Email:</strong> dfdjfhjs@gmai.com
                    </span>
                    <span className="pt-1">
                      <strong>User Type:</strong> +8801521545
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              eligendi reiciendis nobis ab sunt aperiam iusto fugiat! Omnis,
              provident sit.
            </p>
          </div>
        </Row>
      </Card>
    </Col>
  );
};

export default SingleCaseInfo;
