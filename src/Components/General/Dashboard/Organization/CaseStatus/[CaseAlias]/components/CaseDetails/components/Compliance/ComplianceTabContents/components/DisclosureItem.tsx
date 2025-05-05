import { FC } from "react";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";

interface DisclosureItemProps {
  reference: string; // Changed from 'ref' to 'reference' to avoid conflicts with React's ref
  title: string;
  answer: string | null;
  index: number;
}

export const DisclosureItem: FC<DisclosureItemProps> = ({
  reference,
  title,
  answer,
  index,
}) => {
  return (
    <Row
      className={`border p-4 rounded-3 bg-white shadow-sm ${
        index > 0 ? "mt-3" : ""
      }`}
    >
      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <div className="d-flex gap-3">
          <span className="badge bg-primary px-3 py-2 rounded-2 align-self-start">
            {reference}
          </span>
          <h6 className="fw-bold mb-0 lh-base">{title}</h6>
        </div>
      </Col>

      <Col xs={12} md={3} className="mb-3 mb-md-0">
        <div className="d-flex gap-2 justify-content-md-center">
          <FormGroup check className="rounded-2">
            <Input
              type="select"
              name={`answer-${reference}`}
              id={`answer-${reference}`}
              className="me-2 border-success"
            >
              <option value="YES">Yes</option>
              <option value="NO">No</option>
              <option value="NA">Not Applicable</option>
            </Input>
          </FormGroup>
        </div>
      </Col>

      <Col
        xs={12}
        md={3}
        className="d-flex align-items-center justify-content-md-end"
      >
        <Button
          color="primary"
          id={`documentsButton-${reference}`}
          className="px-3 py-2 rounded-2 text-nowrap w-100 w-md-auto"
          outline
        >
          <i className="fas fa-file-alt me-2"></i>
          Associated Documents
        </Button>
      </Col>

      <Col xs={12} className="mt-3">
        <Input
          type="textarea"
          name={`comment-${reference}`}
          id={`comment-${reference}`}
          placeholder="Add your comments here..."
          className="form-control border"
          style={{
            minHeight: "80px",
            resize: "none",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        />
      </Col>
    </Row>
  );
};
