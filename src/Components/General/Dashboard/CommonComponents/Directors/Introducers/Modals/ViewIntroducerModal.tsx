import { ViewIntroducerModalProps } from "@/Types/CommonComponents/Directors/IntroducerTypes";
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

const ViewIntroducerModal: React.FC<ViewIntroducerModalProps> = ({
  isOpen,
  toggle,
  selectedIntroducer,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <h3 className="text-primary">Introducer Information</h3>
      </ModalHeader>
      <ModalBody>
        {/* 1st row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Name:</span>
            <small>
              {selectedIntroducer?.user?.first_name}{" "}
              {selectedIntroducer?.user?.last_name}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Email:</span>
            {selectedIntroducer?.user?.email ? (
              <small>{selectedIntroducer.user?.email}</small>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Official Email:</span>
            {selectedIntroducer?.official_email ? (
              <small>{selectedIntroducer.official_email}</small>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
        </Row>
        {/* 2nd row  */}
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Phone:</span>

            {selectedIntroducer?.user?.phone ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedIntroducer?.user?.phone}`}
              >
                {selectedIntroducer.user?.phone}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Official Phone:</span>
            {selectedIntroducer?.official_phone ? (
              <a
                className="text-dark text_decoration_hover small"
                href={`tel:${selectedIntroducer?.official_phone}`}
              >
                {selectedIntroducer.official_phone}
              </a>
            ) : (
              <span className="text-muted small">Not available</span>
            )}
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Date of Birth:</span>
            <small>
              {selectedIntroducer?.dob || (
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
              {selectedIntroducer?.gender ? (
                selectedIntroducer.gender.charAt(0).toUpperCase() +
                selectedIntroducer.gender.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">User Type:</span>
            <small>
              {selectedIntroducer?.user?.user_type ? (
                selectedIntroducer.user.user_type.charAt(0).toUpperCase() +
                selectedIntroducer.user.user_type.slice(1).toLowerCase()
              ) : (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">User Role:</span>
            <small>
              {selectedIntroducer?.role ? (
                selectedIntroducer.role.charAt(0).toUpperCase() +
                selectedIntroducer.role.slice(1).toLowerCase()
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
              {selectedIntroducer?.joining_date || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Registration Number:</span>
            <small>
              {selectedIntroducer?.registration_number || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Designation:</span>
            <small>
              {selectedIntroducer?.designation || (
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
              {selectedIntroducer?.degree || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">NID:</span>
            <small>
              {selectedIntroducer?.user?.nid || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Created At:</span>
            <small>
              {(selectedIntroducer?.created_at &&
                formatDateToDMYAndTime(selectedIntroducer?.created_at)) || (
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
              {`${selectedIntroducer?.created_by?.first_name} ${selectedIntroducer?.created_by?.last_name}` || (
                <span className="text-muted">Not available</span>
              )}
            </small>
            <small
              className="text-muted"
              style={{ marginTop: "-6px", fontSize: "10px" }}
            >
              (
              {selectedIntroducer?.created_by?.user_type
                ? selectedIntroducer.created_by.user_type
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
              {selectedIntroducer?.permanent_address || (
                <span className="text-muted">Not available</span>
              )}
            </small>
          </Col>
          <Col md="4" sm="12" className="d-flex flex-column">
            <span className="text-muted">Present Address:</span>
            <small>
              {selectedIntroducer?.present_address || (
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

export default ViewIntroducerModal;
