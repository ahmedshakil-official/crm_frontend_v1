import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";

const CompanyForm = () => {
  interface FormData {
    company_name: string;
    company_registration_number: string;
    date_of_incorporation: string;
    company_type: string;
    trade_business_type: string;
    sic_code: string;
    is_spv: boolean;
    postcode: string;
    house_number_or_name: string;
    address_line1: string;
    city: string;
    county: string;
    country: string;
  }

  const [formData, setFormData] = useState<FormData>({
    company_name: "",
    company_registration_number: "",
    date_of_incorporation: "",
    company_type: "PRIVATE_LIMITED",
    trade_business_type: "",
    sic_code: "",
    is_spv: false,
    postcode: "",
    house_number_or_name: "",
    address_line1: "",
    city: "",
    county: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded">
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Company Name</Label>
            <Input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Company Registration Number</Label>
            <Input
              type="text"
              name="company_registration_number"
              value={formData.company_registration_number}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Date of Incorporation</Label>
            <Input
              type="date"
              name="date_of_incorporation"
              value={formData.date_of_incorporation}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Company Type</Label>
            <Input
              type="select"
              name="company_type"
              value={formData.company_type}
              onChange={handleChange}
            >
              <option value="PRIVATE_LIMITED">Private Limited Company</option>
              <option value="PUBLIC_LIMITED">Public Limited Company</option>
              <option value="SOLE_TRADER">Sole Trader</option>
              <option value="PARTNERSHIP">Partnership</option>
              <option value="LIMITED_LIABILITY_PARTNERSHIP">
                Limited Liability Partnership
              </option>
              <option value="OTHER">Other</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Trade Business Type</Label>
            <Input
              type="text"
              name="trade_business_type"
              value={formData.trade_business_type}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="small">SIC Code</Label>
            <Input
              type="text"
              name="sic_code"
              value={formData.sic_code}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Label check className="small">
          <Input
            type="checkbox"
            name="is_spv"
            checked={formData.is_spv}
            onChange={handleChange}
          />
          Is SPV
        </Label>
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Postcode</Label>
            <Input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="small">House Number or Name</Label>
            <Input
              type="text"
              name="house_number_or_name"
              value={formData.house_number_or_name}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Address Line 1</Label>
            <Input
              type="text"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="small">City</Label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label className="small">County</Label>
            <Input
              type="text"
              name="county"
              value={formData.county}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="small">Country</Label>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-4">
        <Button color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default CompanyForm;
