import UpdateCaseModal from "@/Components/General/Dashboard/CommonComponents/Cases/Cases/Modals/UpdateCaseModal";
import { CaseInfoPrpos } from "@/Types/CommonComponents/Cases/CaseTypes";
import { SingleCaseProps } from "@/Types/Organization/Cases/CaseTypes";
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
          <h3 className="mb-2">Case Info</h3>
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
            <Card className="ecommerce-widget rounded-4">
              <CardBody className="support-ticket-font pt-2 border-3 rounded-4 border-b-primary">
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
                        <strong>Name:</strong> {caseInfo?.lead_user?.first_name}{" "}
                        {caseInfo?.lead_user?.last_name}
                      </h6>
                      <h6 className="pt-1">
                        <strong>Email:</strong>{" "}
                        <a
                          className="text-dark text_decoration_hover"
                          href={`mailto:${caseInfo?.lead_user?.email}`}
                        >
                          {caseInfo?.lead_user?.email}
                        </a>
                      </h6>
                      <h6 className="pt-1">
                        {caseInfo?.lead_user?.phone ? (
                          <>
                            <strong>Phone:</strong>{" "}
                            <a
                              className="text-dark text_decoration_hover"
                              href={`tel:${caseInfo?.lead_user?.phone}`}
                            >
                              {caseInfo?.lead_user?.phone}
                            </a>
                          </>
                        ) : (
                          <>
                            <strong>Phone:</strong>{" "}
                            <span className="text-muted opacity-50">
                              Not Found
                            </span>
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
            <Card className="ecommerce-widget rounded-4">
              <CardBody className="support-ticket-font pt-2 border-3 rounded-4 border-b-warning">
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
                        <strong>Case Category:</strong>{" "}
                        <span>
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
                        </span>
                      </h6>
                      <h6 className="pt-1">
                        <strong>Active Status:</strong>{" "}
                        <span
                          className={`${
                            caseInfo?.is_removed
                              ? "text-danger"
                              : "text-success"
                          }`}
                        >
                          {caseInfo?.is_removed ? "Removed" : "Active"}
                        </span>
                      </h6>
                      <h6 className="pt-1">
                        <strong>Case Stage:</strong>{" "}
                        <span>
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
                        </span>
                      </h6>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
          {/* 3rd card */}
          <Col lg="4" md="12">
            <Card className="ecommerce-widget rounded-4">
              <CardBody className="support-ticket-font pt-2 border-3 rounded-4 border-b-success">
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
                        <strong>Name:</strong>{" "}
                        {caseInfo?.created_by?.first_name}{" "}
                        {caseInfo?.created_by?.last_name}
                      </h6>
                      <h6 className="pt-1">
                        <strong>Email:</strong>{" "}
                        <a
                          className="text-dark text_decoration_hover"
                          href={`mailto:${caseInfo?.created_by?.email}`}
                        >
                          {caseInfo?.created_by?.email}
                        </a>
                      </h6>
                      <h6 className="pt-1">
                        <strong>User Type:</strong>{" "}
                        <span>
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
                        </span>
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
            <h4 className="pb-2">Notes:</h4>
            <div className="px-3">
              <p className="border border-primary p-2 rounded-1">
                {caseInfo?.notes
                  ? caseInfo.notes.charAt(0).toUpperCase() +
                    caseInfo.notes.slice(1).toLowerCase()
                  : "Notes not available"}
              </p>
            </div>
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
