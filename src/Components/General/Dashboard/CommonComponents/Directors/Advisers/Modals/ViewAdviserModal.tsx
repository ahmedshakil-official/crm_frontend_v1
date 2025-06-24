import { ViewAdviserModalProps } from "@/Types/CommonComponents/Directors/AdviserTypes";
import { formatDateToDMYAndTime } from "@/utils/dateAndTimeFormatter";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const ViewAdviserModal: React.FC<ViewAdviserModalProps> = ({
  isOpen,
  toggle,
  selectedAdviser,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
    <ModalHeader toggle={toggle}>
      <h3 className="text-primary">Adviser Information</h3>
    </ModalHeader>
    <ModalBody>
      {/* 1st row  */}
      <Row className="d-flex justify-content-between align-items-center mb-3">
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Name:</span>
          <small>
            {selectedAdviser?.user?.first_name} {selectedAdviser?.user?.last_name}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Email:</span>
          {selectedAdviser?.user?.email ? (
            <a
              className="text-dark text_decoration_hover small"
              href={`tel:${selectedAdviser?.user?.email}`}
            >
              {selectedAdviser.user?.email}
            </a>
          ) : (
            <span className="text-muted small">Not available</span>
          )}
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Official Email:</span>
          {selectedAdviser?.official_email ? (
            <a
              className="text-dark text_decoration_hover small"
              href={`tel:${selectedAdviser?.official_email}`}
            >
              {selectedAdviser.official_email}
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

          {selectedAdviser?.user?.phone ? (
            <a
              className="text-dark text_decoration_hover small"
              href={`tel:${selectedAdviser?.user?.phone}`}
            >
              {selectedAdviser.user?.phone}
            </a>
          ) : (
            <span className="text-muted small">Not available</span>
          )}
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Official Phone:</span>
          {selectedAdviser?.official_phone ? (
            <a
              className="text-dark text_decoration_hover small"
              href={`tel:${selectedAdviser?.official_phone}`}
            >
              {selectedAdviser.official_phone}
            </a>
          ) : (
            <span className="text-muted small">Not available</span>
          )}
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Date of Birth:</span>
          <small>
            {selectedAdviser?.dob || (
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
            {selectedAdviser?.gender ? (
              selectedAdviser.gender.charAt(0).toUpperCase() +
              selectedAdviser.gender.slice(1).toLowerCase()
            ) : (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>User Type:</span>
          <small>
            {selectedAdviser?.user?.user_type ? (
              selectedAdviser.user.user_type.charAt(0).toUpperCase() +
              selectedAdviser.user.user_type.slice(1).toLowerCase()
            ) : (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>User Role:</span>
          <small>
            {selectedAdviser?.role ? (
              selectedAdviser.role.charAt(0).toUpperCase() +
              selectedAdviser.role.slice(1).toLowerCase()
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
            {selectedAdviser?.joining_date || (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Registration Number:</span>
          <small>
            {selectedAdviser?.registration_number || (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Designation:</span>
          <small>
            {selectedAdviser?.designation || (
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
            {selectedAdviser?.degree || (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>NID:</span>
          <small>
            {selectedAdviser?.user?.nid || (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Created At:</span>
          <small>
            {(selectedAdviser?.created_at &&
              formatDateToDMYAndTime(selectedAdviser?.created_at)) || (
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
            {`${selectedAdviser?.created_by?.first_name} ${selectedAdviser?.created_by?.last_name}` || (
              <span className="text-muted">Not available</span>
            )}
          </small>
          <small
            className="text-muted"
            style={{ marginTop: "-6px", fontSize: "10px" }}
          >
            (
            {selectedAdviser?.created_by?.user_type
              ? selectedAdviser.created_by.user_type
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
            {selectedAdviser?.permanent_address || (
              <span className="text-muted">Not available</span>
            )}
          </small>
        </Col>
        <Col md="4" sm="12" className="d-flex flex-column">
          <span>Present Address:</span>
          <small>
            {selectedAdviser?.present_address || (
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

export default ViewAdviserModal;
