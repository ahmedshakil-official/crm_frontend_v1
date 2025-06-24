import { ViewClientModalProps } from "@/Types/CommonComponents/Directors/ClientTypes";
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

const ViewClientModal: React.FC<ViewClientModalProps> = ({
  isOpen,
  toggle,
  selectedClient,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <h3 className="text-primary">Client Details</h3>
      </ModalHeader>
      <ModalBody>
        {/* 1st row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Name:</span>
            <small>
              {selectedClient?.user?.first_name}{" "}
              {selectedClient?.user?.last_name}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Email:</span>
            {selectedClient?.user?.email ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedClient?.user?.email}`}
              >
                {selectedClient.user?.email}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Official Email:</span>
            {selectedClient?.official_email ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedClient?.official_email}`}
              >
                {selectedClient.official_email}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
        </Row>
        {/* 2nd row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Phone:</span>

            {selectedClient?.user?.phone ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedClient?.user?.phone}`}
              >
                {selectedClient.user?.phone}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Official Phone:</span>
            {selectedClient?.official_phone ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedClient?.official_phone}`}
              >
                {selectedClient.official_phone}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Date of Birth:</span>
            <small>
              {selectedClient?.dob || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 3rd row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Gender:</span>
            <small>
              {selectedClient?.gender ? (
                selectedClient.gender.charAt(0).toUpperCase() +
                selectedClient.gender.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>User Type:</span>
            <small>
              {selectedClient?.user?.user_type ? (
                selectedClient.user.user_type.charAt(0).toUpperCase() +
                selectedClient.user.user_type.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>User Role:</span>
            <small>
              {selectedClient?.role ? (
                selectedClient.role.charAt(0).toUpperCase() +
                selectedClient.role.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 4th row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Joining Date:</span>
            <small>
              {selectedClient?.joining_date || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Registration Number:</span>
            <small>
              {selectedClient?.registration_number || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Designation:</span>
            <small>
              {selectedClient?.designation || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 5th row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Degree:</span>
            <small>
              {selectedClient?.degree || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>NID:</span>
            <small>
              {selectedClient?.user?.nid || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Created At:</span>
            <small>
              {(selectedClient?.created_at &&
                formatDateToDMYAndTime(selectedClient?.created_at)) || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
        </Row>
        {/* 6th row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Created By:</span>
            <small>
              {`${selectedClient?.created_by?.first_name} ${selectedClient?.created_by?.last_name}` || (
                <span className="text-muted">Not available</span>
              )}
            </small>
            <small
              className="text-muted"
              style={{ marginTop: "-6px", fontSize: "10px" }}
            >
              (
              {selectedClient?.created_by?.user_type
                ? selectedClient.created_by.user_type
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
            <span>Permanent Address:</span>
            <small>
              {selectedClient?.permanent_address || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span>Present Address:</span>
            <small>
              {selectedClient?.present_address || (
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

export default ViewClientModal;
