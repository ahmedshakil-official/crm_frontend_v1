import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import "./Solicitor.css";

const Solicitor: React.FC = () => {
  const [hasSecondSolicitor, setHasSecondSolicitor] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("first");

  return (
    <Col md={12}>
      <Form>
        {/* First Solicitor Form */}
        <div className={hasSecondSolicitor ? "mb-4" : ""}>
          {hasSecondSolicitor && (
            <Nav tabs className="mb-3">
              <NavItem>
                <NavLink
                  className={`cursor-pointer ${
                    activeTab === "first"
                      ? "active text-primary"
                      : "text-secondary"
                  }`}
                  onClick={() => setActiveTab("first")}
                >
                  First Solicitor
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`cursor-pointer ${
                    activeTab === "second"
                      ? "active text-primary"
                      : "text-secondary"
                  }`}
                  onClick={() => setActiveTab("second")}
                >
                  Second Solicitor
                </NavLink>
              </NavItem>
            </Nav>
          )}

          <div className={activeTab === "first" ? "" : "d-none"}>
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
                      <Input
                        id="buildingName"
                        name="buildingName"
                        type="text"
                      />
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
                      <Input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                      />
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
              </CardBody>
            </Card>
          </div>

          {/* Second Solicitor Form */}
          {hasSecondSolicitor && activeTab === "second" && (
            <Card>
              <CardBody>{/* Same form fields as above */}</CardBody>
            </Card>
          )}
        </div>
        {/* Second Solicitor Toggle */}
        {activeTab === "first" && (
          <Card className="m-0 p-0">
            <CardBody className="my-0 py-0">
              <Row>
                <Col md={6}>
                  <Label className="mb-2">Second Solicitor</Label>
                  <div className="d-flex flex-column">
                    {["yes", "no"].map((value) => (
                      <FormGroup
                        key={value}
                        check
                        inline
                        className="d-flex align-items-center"
                      >
                        <Label check>
                          <Input
                            type="radio"
                            name="secondSolicitor"
                            checked={
                              value === "yes"
                                ? hasSecondSolicitor
                                : !hasSecondSolicitor
                            }
                            onChange={() =>
                              setHasSecondSolicitor(value === "yes")
                            }
                          />
                          {value.charAt(0).toUpperCase() + value.slice(1)}
                          {value === "yes" && hasSecondSolicitor && (
                            <span className="ms-1 text-muted text-warning">
                              (View on tab)
                              <i className="fa-solid fa-arrow-turn-up text-primary animate-blink"></i>
                            </span>
                          )}
                        </Label>
                      </FormGroup>
                    ))}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex justify-content-end ">
                    <Button color="primary">Save Solicitor</Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        )}
      </Form>
    </Col>
  );
};

export default Solicitor;
