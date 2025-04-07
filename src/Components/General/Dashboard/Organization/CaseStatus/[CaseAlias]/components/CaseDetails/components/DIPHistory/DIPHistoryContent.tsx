import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const DIPHistoryContent: React.FC = () => {
  const [hasDecision, setHasDecision] = useState<boolean>(false);

  return (
    <div className="p-3">
      <>
        <div className="border rounded p-3 mb-3">
          <Form>
            <Row>
              <Col>
                <FormGroup className="mb-4">
                  <Label className="mb-2">
                    Has this application had a Decision in Principle?
                  </Label>
                  <div>
                    {["yes", "no"].map((option) => (
                      <FormGroup key={option.toLowerCase()} check inline>
                        <Input
                          type="radio"
                          id={`radio-${option}`}
                          name="hasDecision"
                          checked={
                            option === "yes" ? hasDecision : !hasDecision
                          }
                          onChange={() => setHasDecision(option === "yes")}
                        />
                        <Label check for={`radio-${option}`}>
                          {option.charAt(0).toUpperCase() +
                            option.slice(1).toLowerCase()}
                        </Label>
                      </FormGroup>
                    ))}
                  </div>
                </FormGroup>
              </Col>
            </Row>
            {hasDecision && (
              <>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Lender</Label>
                      <Input type="select">
                        <option value="">Select...</option>
                        <option value="Amicus PLC">Amicus PLC</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>DIP Date</Label>
                      <Input type="date" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>DIP Decision</Label>
                      <Input type="select">
                        <option value="">Select...</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Declined">Declined</option>
                        <option value="Referred">Referred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>DIP Reference Number</Label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <Label>Notes</Label>
                      <Input type="textarea" rows={3} />
                    </FormGroup>
                  </Col>
                </Row>
              </>
            )}
            <Row>
              <Col className="mt-4 d-flex justify-content-between align-items-center">
                <Button color="secondary" className="me-2">
                  Add New Lender History
                </Button>
                <Button color="primary">Save History</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    </div>
  );
};

export default DIPHistoryContent;
