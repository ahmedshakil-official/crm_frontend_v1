import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const LoanDetailsFormTab4 = () => {
  const [formData, setFormData] = useState({
    sale_type: "",
    introduction_type: "",
    lead_source: "",
    introducer_payment_terms: "",
    introducer_fee: "",
    reasons_for_capital_raising: "",
    accepted_or_declined_by_lender: "",
    case_summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="sale_type">Sale Type</Label>
            <Input
              type="select"
              name="sale_type"
              value={formData.sale_type}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="UNKNOWN">Unknown</option>
              <option value="FACE_TO_FACE">Face to Face</option>
              <option value="TELEPHONE">Telephone</option>
              <option value="INTERNET">Internet</option>
              <option value="OTHER">Other</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="introduction_type">Introduction Type</Label>
            <Input
              type="select"
              name="introduction_type"
              value={formData.introduction_type}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="DIRECT">Direct</option>
              <option value="RDI">RDI</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="lead_source">Lead Source</Label>
            <Input
              type="select"
              name="lead_source"
              value={formData.lead_source}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="FACEBOOK">Facebook</option>
              <option value="ESTATE_AGENTS">Estate Agents</option>
              <option value="TV3">TV3</option>
              <option value="FAMILY">Family</option>
              <option value="FRIENDS">Friends</option>
              <option value="REFERRALS">Referrals</option>
              <option value="WEBSITE">Website</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="introducer_payment_terms">
              Introducer Payment Terms
            </Label>
            <Input
              type="select"
              name="introducer_payment_terms"
              value={formData.introducer_payment_terms}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="NOT_APPLICABLE">Not Applicable</option>
              <option value="ON_APPLICATION">On Application</option>
              <option value="ON_OFFER">On Offer</option>
              <option value="ON_COMPLETION">On Completion</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="introducer_fee">Introducer Fee</Label>
            <Input
              type="text"
              name="introducer_fee"
              value={formData.introducer_fee}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="reasons_for_capital_raising">
              Reasons for Capital Raising
            </Label>
            <Input
              type="textarea"
              name="reasons_for_capital_raising"
              value={formData.reasons_for_capital_raising}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="accepted_or_declined_by_lender">
              Has this been accepted or declined with any lender already?
            </Label>
            <div>
              <Input
                type="radio"
                name="accepted_or_declined_by_lender"
                value="Yes"
                checked={formData.accepted_or_declined_by_lender === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
              <Input
                type="radio"
                name="accepted_or_declined_by_lender"
                value="No"
                checked={formData.accepted_or_declined_by_lender === "No"}
                onChange={handleChange}
                className="ms-2"
              />{" "}
              No
            </div>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="case_summary">Case Summary</Label>
            <Input
              type="textarea"
              name="case_summary"
              value={formData.case_summary}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export default LoanDetailsFormTab4;
