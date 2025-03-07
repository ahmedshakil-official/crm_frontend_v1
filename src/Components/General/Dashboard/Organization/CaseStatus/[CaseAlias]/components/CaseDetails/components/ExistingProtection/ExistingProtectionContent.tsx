import { ApplicantProps } from "@/Types/Organization/CaseDetails/ApplicantsDetailsTypes";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

interface ExistingProtectionContentProps {
  applicantsData: ApplicantProps[];
  basicTab: string | null;
}

const ExistingProtectionContent: React.FC<ExistingProtectionContentProps> = ({
  applicantsData,
  basicTab,
}) => {
  const [hasProtection, setHasProtection] = useState<boolean>(false);
  const currentApplicant = applicantsData?.find(
    (app) => app.alias === basicTab
  );

  return (
    <div>
      {basicTab && applicantsData && applicantsData.length > 0 && (
        <>
          <Form>
            <Card className="mb-3 border-primary">
              <CardBody>
                <div className="px-3">
                  <Label className="mb-3">
                    Do you have any existing "Protection" policies in place?
                    (such as income protection, life assurance etc.)
                  </Label>
                  <div className="d-flex gap-2 mb-4">
                    {["yes", "no"].map((option) => (
                      <FormGroup key={option} check inline>
                        <Input
                          type="radio"
                          id={`protection-${option}`}
                          name={`protection-${currentApplicant?.alias}`}
                          checked={
                            option === "yes" ? hasProtection : !hasProtection
                          }
                          onChange={() => setHasProtection(option === "yes")}
                        />
                        <Label check for={`protection-${option}`}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </Label>
                      </FormGroup>
                    ))}
                  </div>
                </div>

                {hasProtection && (
                  <div className="p-3">
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Policy Type</Label>
                          <Input type="select" defaultValue="">
                            <option value="">Select...</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Policy Provider</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Insurer's Reference</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Sum Assured</Label>
                          <Input
                            type="number"
                            placeholder="£"
                            defaultValue="0"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Premium</Label>
                          <Input type="number" placeholder="£" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Premium Payment Type</Label>
                          <Input type="select" defaultValue="">
                            <option value="">Select...</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Person(s) Assured</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>In Trust?</Label>
                          <Input type="select" defaultValue="">
                            <option value="">Select...</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Guaranteed / Reviewable</Label>
                          <Input type="select" defaultValue="">
                            <option value="">Select...</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Remaining Policy Term</Label>
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Cancelled / Lapsed Date</Label>
                          <Input type="date" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Date Policy Started</Label>
                          <Input type="date" />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Waiver Of Premium</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input type="radio" name="waiver" />
                                <Label check>
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Indexation</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input type="radio" name="indexation" />
                                <Label check>
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Death In Service Provision</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input type="radio" name="deathInService" />
                                <Label check>
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <Label>Have non-standard terms been issued?</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input type="radio" name="nonStandardTerms" />
                                <Label check>
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <Label>Will this policy be cancelled?</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input type="radio" name="willBeCancelled" />
                                <Label check>
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup>
                          <Label>Why did you take out this policy?</Label>
                          <Input type="textarea" rows={4} />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                )}
              </CardBody>
              <CardFooter className="bg-primary">
                <div className="d-flex justify-content-end">
                  <span>Total Protection : £0.00</span>
                </div>
              </CardFooter>
            </Card>
            <div className="d-flex justify-content-between">
              <Button color="secondary">Add new</Button>
              <Button color="primary">Save</Button>
            </div>
          </Form>
        </>
      )}
    </div>
  );
};

export default ExistingProtectionContent;
