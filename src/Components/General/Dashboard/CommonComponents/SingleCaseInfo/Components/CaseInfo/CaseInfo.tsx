import UpdateCaseModal from "@/Components/General/Dashboard/CommonComponents/Cases/Cases/Modals/UpdateCaseModal";
import {
  CaseInfoPrpos,
  SingleCaseProps,
} from "@/Types/CommonComponents/Cases/CaseTypes";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Spinner,
} from "reactstrap";

const CaseInfo: React.FC<SingleCaseProps> = ({ caseInfo, isLoading }) => {
  const [isUpdateCaseModalOpen, setIsUpdateCaseModalOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState<CaseInfoPrpos | null>(null);

  const toggleUpdateCaseModal = () =>
    setIsUpdateCaseModalOpen(!isUpdateCaseModalOpen);

  const openUpdateCaseModal = (caseInfo: CaseInfoPrpos) => {
    setCurrentCase(caseInfo);
    toggleUpdateCaseModal();
  };

  return (
    <Col sm="12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <h3 className="mb-2">
            Case Info
            <span className="small text-muted opacity-75">
              ({caseInfo?.name})
            </span>
          </h3>
          <Button
            color="primary"
            onClick={() => openUpdateCaseModal(caseInfo!)}
            disabled={!caseInfo} // Disable if caseInfo is null
            className="d-flex justify-content-center align-items-center gap-1"
          >
            <span>Update Info</span>
            <span>
              <i className="fa-regular fa-circle-up"></i>
            </span>
          </Button>
        </CardHeader>

        <Row className="px-3 mt-3">
          {/* 1st card */}
          <Col lg="4" md="12">
            <Card className="shadow">
              <CardBody className="support-ticket-font pt-2 border-3 rounded-3 border-b-primary">
                <CardHeader className="pt-0 pb-1 m-0 text-center">
                  <h4 className="fw-bold">Case User</h4>
                </CardHeader>
                {isLoading ? (
                  <Row className="pt-2">
                    <Col xs="12" className="text-center">
                      <Spinner
                        animation="border"
                        role="status"
                        color="primary"
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row className="pt-2">
                    <Col xs="12">
                      <h6 className="pt-1">
                        <span className="small">Name:</span>{" "}
                        <strong className="small">
                          {caseInfo?.lead_user?.first_name}{" "}
                          {caseInfo?.lead_user?.last_name}
                        </strong>
                      </h6>
                      <h6 className="pt-1">
                        <span className="small">Email:</span>{" "}
                        <strong>
                          <small>{caseInfo?.lead_user?.email}</small>
                        </strong>
                      </h6>
                      <h6 className="pt-1">
                        {caseInfo?.lead_user?.phone ? (
                          <>
                            <span className="small">Phone:</span>{" "}
                            <strong>
                              <a
                                className="text-dark text_decoration_hover small"
                                href={`tel:${caseInfo?.lead_user?.phone}`}
                              >
                                {caseInfo?.lead_user?.phone}
                              </a>
                            </strong>
                          </>
                        ) : (
                          <>
                            <span className="small">Phone:</span>{" "}
                            <strong className="text-muted opacity-50 small">
                              Not Found
                            </strong>
                          </>
                        )}
                      </h6>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
          {/* 2nd card */}
          <Col lg="4" md="12">
            <Card className="shadow">
              <CardBody className="support-ticket-font pt-2 border-3 rounded-3 border-b-warning">
                <CardHeader className="pt-0 pb-1 m-0 text-center">
                  <h4 className="fw-bold">Case Info</h4>
                </CardHeader>
                {isLoading ? (
                  <Row className="pt-2">
                    <Col xs="12" className="text-center">
                      <Spinner
                        animation="border"
                        role="status"
                        color="warning"
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row className="pt-2">
                    <Col xs="12">
                      <h6 className="pt-1">
                        <span className="small">Case Category:</span>{" "}
                        <strong className="small">
                          {caseInfo?.case_category
                            ? caseInfo.case_category
                                .split("_")
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1).toLowerCase()
                                )
                                .join(" ")
                            : "N/A"}
                        </strong>
                      </h6>
                      <h6 className="pt-1">
                        <span className="small">Case Status:</span>{" "}
                        <strong
                          className={`rounded-1 px-1 small ${
                            caseInfo?.is_removed ? "bg-danger" : "bg-success"
                          }`}
                        >
                          {caseInfo?.is_removed ? "Removed" : "Active"}
                        </strong>
                      </h6>
                      <h6 className="pt-1">
                        <span className="small">Case Stage:</span>{" "}
                        <strong className="small">
                          {caseInfo?.case_stage
                            ? caseInfo.case_stage
                                .split("_")
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1).toLowerCase()
                                )
                                .join(" ")
                            : "N/A"}
                        </strong>
                      </h6>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
          {/* 3rd card */}
          <Col lg="4" md="12">
            <Card className="shadow ">
              <CardBody className="support-ticket-font pt-2 border-3 rounded-3 border-b-success">
                <CardHeader className="pt-0 pb-1 m-0 text-center">
                  <h4 className="fw-bold">Assigned Advisor</h4>
                </CardHeader>
                {isLoading ? (
                  <Row className="pt-2">
                    <Col xs="12" className="text-center">
                      <Spinner
                        animation="border"
                        role="status"
                        color="success"
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row className="pt-2">
                    <Col xs="12">
                      <h6 className="pt-1">
                        <span className="small">Name:</span>{" "}
                        <strong className="small">
                          {caseInfo?.created_by?.first_name}{" "}
                          {caseInfo?.created_by?.last_name}
                        </strong>
                      </h6>
                      <h6 className="pt-1">
                        <span className="small">Email:</span>{" "}
                        <strong>
                          <small>{caseInfo?.created_by?.email}</small>
                        </strong>
                      </h6>
                      <h6 className="pt-1">
                        <span className="small">User Type:</span>{" "}
                        <strong className="small">
                          {caseInfo?.created_by?.user_type
                            ? caseInfo.created_by?.user_type
                                .split("_")
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1).toLowerCase()
                                )
                                .join(" ")
                            : "N/A"}
                        </strong>
                      </h6>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="px-3">
          <div>
            <h4>Notes:</h4>
            <p className="text-muted p-1">
              {caseInfo?.notes
                ? caseInfo.notes.charAt(0).toUpperCase() +
                  caseInfo.notes.slice(1).toLowerCase()
                : "Notes not available"}
            </p>
          </div>
        </Row>
      </Card>
      <UpdateCaseModal
        isOpen={isUpdateCaseModalOpen}
        toggle={toggleUpdateCaseModal}
        caseData={currentCase as CaseInfoPrpos}
      />
    </Col>
  );
};

export default CaseInfo;
