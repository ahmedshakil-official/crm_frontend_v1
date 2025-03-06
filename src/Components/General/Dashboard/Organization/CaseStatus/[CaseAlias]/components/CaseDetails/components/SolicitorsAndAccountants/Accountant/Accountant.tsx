import { Col, Form, FormGroup, Label, Input, Button, Card, CardBody, Row } from "reactstrap";

const Accountant: React.FC = () => {
  return (
    <Col md={12}>
      <Form>
        <Card>
          <CardBody>
            <FormGroup>
              <Label for="accountantName">Accountant Name</Label>
              <Input
                id="accountantName"
                name="accountantName"
                type="select"
                placeholder="Search for an accountant"
              >
                <option value="">Search for an accountant</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" type="text" />
            </FormGroup>

            <Row>
              <Col md={8}>
                <FormGroup>
                  <Label for="postcode">Postcode</Label>
                  <Input id="postcode" name="postcode" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <Button color="primary" className="mt-4" size="sm">
                  Lookup
                </Button>
              </Col>
            </Row>

            <FormGroup>
              <Label for="buildingName">Building Name or Number</Label>
              <Input id="buildingName" name="buildingName" type="text" />
            </FormGroup>

            <FormGroup>
              <Label for="street">Street</Label>
              <Input id="street" name="street" type="text" />
            </FormGroup>

            <FormGroup>
              <Label for="city">City</Label>
              <Input id="city" name="city" type="text" />
            </FormGroup>

            <FormGroup>
              <Label for="county">County</Label>
              <Input id="county" name="county" type="text" />
            </FormGroup>

            <FormGroup>
              <Label for="country">Country</Label>
              <Input id="country" name="country" type="text" />
            </FormGroup>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" name="phoneNumber" type="tel" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="faxNumber">Fax Number</Label>
                  <Input id="faxNumber" name="faxNumber" type="tel" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="qualifications">Qualifications</Label>
                  <Input id="qualifications" name="qualifications" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="emailAddress">Email Address</Label>
                  <Input id="emailAddress" name="emailAddress" type="email" />
                </FormGroup>
              </Col>
            </Row>

            <div className="d-flex justify-content-end">
              <Button color="secondary">Clear Accountant</Button>
            </div>
          </CardBody>
        </Card>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button color="secondary">Back</Button>
          <Button color="primary">Save / Next</Button>
        </div>
      </Form>
    </Col>
  );
};

export default Accountant;