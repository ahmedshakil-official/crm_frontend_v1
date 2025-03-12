import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Solicitor: React.FC = () => {
  return (
    <Col md={12}>
      <Form>
        <Card>
          <CardBody>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="solicitorName">Solicitor Name</Label>
                  <Input
                    id="solicitorName"
                    name="solicitorName"
                    type="select"
                    placeholder="Search for a solicitor"
                  >
                    <option value="">Search for a solicitor</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="sraNumber">SRA Number</Label>
                  <Input id="sraNumber" name="sraNumber" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="postcode">Postcode</Label>
                  <Input id="postcode" name="postcode" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="buildingName">Building Name or Number</Label>
                  <Input id="buildingName" name="buildingName" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="street">Street</Label>
                  <Input id="street" name="street" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input id="city" name="city" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="county">County</Label>
                  <Input id="county" name="county" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input id="country" name="country" type="text" />
                </FormGroup>
              </Col>
            </Row>
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
                  <Label for="dxNumber">DX Number</Label>
                  <Input id="dxNumber" name="dxNumber" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="contactName">Contact Name</Label>
                  <Input id="contactName" name="contactName" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="emailAddress">Email Address</Label>
                  <Input id="emailAddress" name="emailAddress" type="email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="numberOfPartners">
                    Number of Partners in firm
                  </Label>
                  <Input
                    id="numberOfPartners"
                    name="numberOfPartners"
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex justify-content-between">
                <Button>Add New Solicitor</Button>
                <Button color="primary">Save Solicitor</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Form>
    </Col>
  );
};

export default Solicitor;
