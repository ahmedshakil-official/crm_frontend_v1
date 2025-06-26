import { ViewLeadModalProps } from "@/Types/CommonComponents/Directors/LeadTypes";
import { formatDateToDMYAndTime } from "@/utils/dateAndTimeFormatter";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const ViewLeadModal: React.FC<ViewLeadModalProps> = ({
  isOpen,
  toggle,
  selectedLead,
}) => {
  if (!selectedLead) return null;
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <h3 className="text-primary">Lead Information</h3>
      </ModalHeader>
      <ModalBody>
        {/* 1st row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Name:</span>
            <small>
              {selectedLead?.user?.first_name} {selectedLead?.user?.last_name}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Email:</span>
            {selectedLead?.user?.email ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedLead?.user?.email}`}
              >
                {selectedLead.user?.email}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Official Email:</span>
            {selectedLead?.official_email ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedLead?.official_email}`}
              >
                {selectedLead.official_email}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
        </Row>
        {/* 2nd row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Phone:</span>

            {selectedLead?.user?.phone ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedLead?.user?.phone}`}
              >
                {selectedLead.user?.phone}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Official Phone:</span>
            {selectedLead?.official_phone ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedLead?.official_phone}`}
              >
                {selectedLead.official_phone}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Date of Birth:</span>
            <small>
              {selectedLead?.dob || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 3rd row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Gender:</span>
            <small>
              {selectedLead?.gender ? (
                selectedLead.gender.charAt(0).toUpperCase() +
                selectedLead.gender.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">User Type:</span>
            <small>
              {selectedLead?.user?.user_type ? (
                selectedLead.user.user_type.charAt(0).toUpperCase() +
                selectedLead.user.user_type.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">User Role:</span>
            <small>
              {selectedLead?.role ? (
                selectedLead.role.charAt(0).toUpperCase() +
                selectedLead.role.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 4th row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Joining Date:</span>
            <small>
              {selectedLead?.joining_date || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Registration Number:</span>
            <small>
              {selectedLead?.registration_number || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Designation:</span>
            <small>
              {selectedLead?.designation || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 5th row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Degree:</span>
            <small>
              {selectedLead?.degree || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">NID:</span>
            <small>
              {selectedLead?.user?.nid || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Created At:</span>
            <small>
              {(selectedLead?.created_at &&
                formatDateToDMYAndTime(selectedLead?.created_at)) || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 6th row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Created By:</span>
            <small>
              {`${selectedLead?.created_by?.first_name} ${selectedLead?.created_by?.last_name}` || (
                <span className="text-muted">Not available</span>
              )}
            </small>
            <small
              className="text-muted"
              style={{ marginTop: "-6px", fontSize: "10px" }}
            >
              (
              {selectedLead?.created_by?.user_type
                ? selectedLead.created_by.user_type
                    .split("_")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")
                : "Not available"}
              )
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Permanent Address:</span>
            <small>
              {selectedLead?.permanent_address || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Present Address:</span>
            <small>
              {selectedLead?.present_address || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-end">
        <Button color="danger" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewLeadModal;
