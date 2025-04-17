import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';

// ComplianceForm component (inlined for simplicity, can be imported if separate)
interface FormData {
  dateChecked: Date | null;
  dateRechecked: Date | null;
  checkedById: string;
  remedialActionsRequired: boolean;
  remedialActionsComplete: boolean;
  rating: "green" | "amber" | "red" | null;
  ratingComments: string;
}

interface Checker {
  id: string;
  name: string;
}

const checkers: Checker[] = [
  { id: "0", name: "No value selected" },
  { id: "172407", name: "Beneco Compliance" },
  { id: "166399", name: "Hemal Patel" },
  { id: "167199", name: "Kanis Fatema Sima" },
  { id: "167221", name: "Larry Test" },
  { id: "166381", name: "Md Shahariar Sadat" },
  { id: "8472", name: "Mostafizur Rahman" },
  { id: "8456", name: "OMS Supervisor" },
  { id: "168029", name: "Ruhul Alam" },
  { id: "182235", name: "Salman Sarwar" },
  { id: "41012", name: "Scott Test" },
  { id: "167196", name: "Shaguffta Rahman" },
  { id: "166382", name: "Vrutti Shah" },
];

const ratingCriteria = {
  green:
    "(Grade 7) File demonstrates Suitability of Advice, KYC and TCF. Thorough factfind/record keeping, and/or suitability letter.",
  amber:
    "(Grade 5-6) Weaknesses identified in fact find/record keeping, and/or suitability letter but advice seems acceptable on the face of it. Additional information will help avoid a complaint and meet KYC requirements.",
  red: "(Grades 1-4) Serious weaknesses in fact find/record keeping and/or suitability letter. Significant doubts or difficult to prove whether customer has received suitable advice or been treated fairly.",
};

export const ComplianceRatingCard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dateChecked: null,
    dateRechecked: null,
    checkedById: "0",
    remedialActionsRequired: false,
    remedialActionsComplete: false,
    rating: null,
    ratingComments: "",
  });

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const CustomInput = React.forwardRef(({ value, onClick, id }: any, ref: any) => (
    <div className="position-relative">
      <input
        id={id}
        value={value}
        className="form-control form-control-sm pe-4"
        onClick={onClick}
        readOnly
        ref={ref}
      />
      <FaCalendarAlt 
        className="position-absolute text-muted cursor-pointer" 
        style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}
        onClick={onClick}
      />
    </div>
  ));

  return (
    <Container fluid className="p-4 bg-white shadow rounded">
      <Row className="align-items-end g-3">
        <Col xs={12} lg={2}>
          <FormGroup>
            <Label for="dateChecked" className="fw-medium text-muted small mb-1">
              Date File Checked
            </Label>
            <DatePicker
              id="dateChecked"
              selected={formData.dateChecked}
              onChange={(date: Date) => handleChange("dateChecked", date)}
              dateFormat="dd/MM/yyyy"
              customInput={<CustomInput />}
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={2}>
          <FormGroup>
            <Label for="dateRechecked" className="fw-medium text-muted small mb-1">
              Date File Rechecked
            </Label>
            <DatePicker
              id="dateRechecked"
              selected={formData.dateRechecked}
              onChange={(date: Date) => handleChange("dateRechecked", date)}
              dateFormat="dd/MM/yyyy"
              customInput={<CustomInput />}
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={3}>
          <FormGroup>
            <Label for="checkedById" className="fw-medium text-muted small mb-1">
              File Checked By
            </Label>
            <Input
              type="select"
              bsSize="sm"
              id="checkedById"
              value={formData.checkedById}
              onChange={(e) => handleChange("checkedById", e.target.value)}
            >
              {checkers.map((checker) => (
                <option key={checker.id} value={checker.id}>
                  {checker.name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xs={12} lg={2}>
          <FormGroup className="mb-0">
            <Label className="fw-medium text-muted small mb-1">
              Remedial Actions Required
            </Label>
            <div className="d-flex gap-4">
              <FormGroup check className="mb-0">
                <Input
                  type="radio"
                  name="remedialActionsRequired"
                  checked={formData.remedialActionsRequired}
                  onChange={() => handleChange("remedialActionsRequired", true)}
                  className="mt-0"
                />
                <Label check className="small">Yes</Label>
              </FormGroup>
              <FormGroup check className="mb-0">
                <Input
                  type="radio"
                  name="remedialActionsRequired"
                  checked={!formData.remedialActionsRequired}
                  onChange={() => handleChange("remedialActionsRequired", false)}
                  className="mt-0"
                />
                <Label check className="small">No</Label>
              </FormGroup>
            </div>
          </FormGroup>
        </Col>
        <Col xs={12} lg={2}>
          <FormGroup className="mb-0">
            <Label className="fw-medium text-muted small mb-1">
              Remedial Actions Complete
            </Label>
            <div className="d-flex gap-4">
              <FormGroup check className="mb-0">
                <Input
                  type="radio"
                  name="remedialActionsComplete"
                  checked={formData.remedialActionsComplete}
                  onChange={() => handleChange("remedialActionsComplete", true)}
                  className="mt-0"
                />
                <Label check className="small">Yes</Label>
              </FormGroup>
              <FormGroup check className="mb-0">
                <Input
                  type="radio"
                  name="remedialActionsComplete"
                  checked={!formData.remedialActionsComplete}
                  onChange={() => handleChange("remedialActionsComplete", false)}
                  className="mt-0"
                />
                <Label check className="small">No</Label>
              </FormGroup>
            </div>
          </FormGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <h3 className="fw-semibold pb-2 mb-4">
            Rating
          </h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8}>
          {["green", "amber", "red"].map((rating) => (
            <div key={rating} className="d-flex align-items-start mb-4">
              <div
                className={`d-flex align-items-center justify-content-center text-white fw-bold fs-4 me-3 rounded ${
                  rating === "green"
                    ? "bg-success"
                    : rating === "amber"
                    ? "bg-warning"
                    : "bg-danger"
                }`}
                style={{ width: "55px", height: "55px", minWidth: "55px" }}
              >
                {rating === "green" ? "G" : rating === "amber" ? "A" : "R"}
              </div>
              <div className="d-flex align-items-start gap-3">
                <FormGroup check className="mt-2 mb-0">
                  <Input
                    type="radio"
                    name="rating"
                    checked={formData.rating === rating}
                    onChange={() => handleChange("rating", rating)}
                  />
                </FormGroup>
                <p className="mb-0 mt-1" style={{ fontSize: "0.9rem" }}>
                  {ratingCriteria[rating as keyof typeof ratingCriteria]}
                </p>
              </div>
            </div>
          ))}
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label className="fw-semibold pb-2 mb-3 d-block">
              Comments & Any Remedial Action
            </Label>
            <Input
              type="textarea"
              id="ratingComments"
              value={formData.ratingComments}
              onChange={(e) => handleChange("ratingComments", e.target.value)}
              className="form-control"
              style={{ minHeight: "190px" }}
              placeholder="Enter comments here..."
            />
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};