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
import AddSecurityPropertyModal from "./Modals/AddSecurityPropertyModal";


interface SecurityPropertyContentProps {
  applicantsData: ApplicantProps[];
  basicTab: string | null;
}

const SecurityPropertyContent: React.FC<SecurityPropertyContentProps> = ({
  applicantsData,
  basicTab,
}) => {
  const [hasSecurity, setHasSecurity] = useState<boolean>(false);
  const [hasNonStandardTerms, setHasNonStandardTerms] =
    useState<boolean>(false);
  const currentApplicant = applicantsData?.find(
    (app) => app.alias === basicTab
  );
  // Add new state at the top of component
  const [willBeCancelled, setWillBeCancelled] = useState<boolean>(false);
  // Add this state for modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Add toggle function
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  // Add save handler
  const handleSave = (data: any) => {
    console.log("Security property data:", data);
    // Handle saving the data
  };
  return (
    <div>
      {basicTab && applicantsData && applicantsData.length > 0 && (
        <>
          <Form>
            <Card className="mb-3 border-primary">
              <CardBody>
                <div className="px-3">
                  <Label className="mb-3">
                    Do you have any existing "Security" policies in place? (such
                    as income security, life assurance etc.)
                  </Label>
                  <div className="d-flex gap-2 mb-4">
                    {["yes", "no"].map((option) => (
                      <FormGroup key={option} check inline>
                        <Input
                          type="radio"
                          id={`security-${option}`}
                          name={`security-${currentApplicant?.alias}`}
                          checked={
                            option === "yes" ? hasSecurity : !hasSecurity
                          }
                          onChange={() => setHasSecurity(option === "yes")}
                        />
                        <Label check for={`security-${option}`}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </Label>
                      </FormGroup>
                    ))}
                  </div>
                </div>

                {hasSecurity && (
                  <div className="p-3">
                    <Row>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Policy Type</Label>
                          <Input type="select" defaultValue="">
                            <option value="">Select...</option>
                            <option value="LIFE_ASSURANCE_LEVEL">
                              Life Assurance (Level)
                            </option>
                            <option value="LIFE_ASSURANCE_DECREASING">
                              Life Assurance (Decreasing)
                            </option>
                            <option value="CRITICAL_ILLNESS_COVER_LEVEL">
                              Critical Illness Cover (Level)
                            </option>
                            <option value="CRITICAL_ILLNESS_COVER_DECREASING">
                              Critical Illness Cover (Decreasing)
                            </option>
                            <option value="MORTGAGE_PAYMENT_PROTECTION">
                              Mortgage Payment Security
                            </option>
                            <option value="BUILDINGS_AND_CONTENTS">
                              Buildings and Contents
                            </option>
                            <option value="PRIVATE_PENSION">
                              Private Pension
                            </option>
                            <option value="DEATH_IN_SERVICE_BENEFIT">
                              Death in Service Benefit
                            </option>
                            <option value="OTHER">Other</option>
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
                            <option value="MONTHLY">Monthly</option>
                            <option value="ANNUALLY">Annually</option>
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
                            <option value="NA">N/A</option>
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                            <option value="CLIENT_TO_ASCERTAIN">
                              Client to Ascertain
                            </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label>Guaranteed / Reviewable</Label>
                          <Input type="select" defaultValue="">
                            <option value="">Select...</option>
                            <option value="NA">N/A</option>
                            <option value="GUARANTEED">Guaranteed</option>
                            <option value="REVIEWABLE">Reviewable</option>
                            <option value="CLIENT_TO_ASCERTAIN">
                              Client to Ascertain
                            </option>
                            <option value="AGE_COSTED">Age Costed</option>
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
                                <Input
                                  type="radio"
                                  name="waiver"
                                  id={`waiver-${option}`}
                                />
                                <Label check for={`waiver-${option}`}>
                                  {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
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
                                <Input
                                  type="radio"
                                  name="indexation"
                                  id={`indexation-${option}`}
                                />
                                <Label check for={`indexation-${option}`}>
                                  {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
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
                                <Input
                                  type="radio"
                                  name="deathInService"
                                  id={`deathInService-${option}`}
                                />
                                <Label check for={`deathInService-${option}`}>
                                  {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Have non-standard terms been issued?</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input
                                  type="radio"
                                  name="nonStandardTerms"
                                  id={`nonStandardTerms-${option}`}
                                  onChange={(e) =>
                                    setHasNonStandardTerms(option === "yes")
                                  }
                                />
                                <Label check for={`nonStandardTerms-${option}`}>
                                  {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        {hasNonStandardTerms && (
                          <FormGroup>
                            <Label>
                              Copy and paste Non-standard terms from lender
                            </Label>
                            <Input
                              type="textarea"
                              placeholder="Copy and paste Non-standard terms from lender"
                              rows={3}
                            />
                          </FormGroup>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Will this policy be cancelled?</Label>
                          <div className="d-flex gap-4">
                            {["yes", "no"].map((option) => (
                              <FormGroup key={option} check inline>
                                <Input
                                  type="radio"
                                  name="willBeCancelled"
                                  id={`willBeCancelled-${option}`}
                                  onChange={(e) =>
                                    setWillBeCancelled(option === "yes")
                                  }
                                />
                                <Label check for={`willBeCancelled-${option}`}>
                                  {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                                </Label>
                              </FormGroup>
                            ))}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        {willBeCancelled && (
                          <FormGroup>
                            <Label>Reason For Policy Cancellation</Label>
                            <Input type="select" defaultValue="">
                              <option value="">Not Values Yet</option>
                            </Input>
                          </FormGroup>
                        )}
                      </Col>
                    </Row>

                    {willBeCancelled && (
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Policy Cancellation Notes</Label>
                            <Input type="textarea" rows={4} />
                          </FormGroup>
                        </Col>
                      </Row>
                    )}
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
                  <span>Total Security : £0.00</span>
                </div>
              </CardFooter>
            </Card>
            <div className="d-flex justify-content-between">
              {hasSecurity && (
                <Button
                  color="secondary"
                  onClick={toggleModal}  
                >
                  Add new
                </Button>
              )}
              <Button color="primary">
                Save Security
              </Button>
            </div>
            {/* Add modal component */}
            <AddSecurityPropertyModal 
              isOpen={isModalOpen}
              toggle={toggleModal}
              onSave={handleSave}
            />
          </Form>
        </>
      )}
    </div>
  );
};

export default SecurityPropertyContent;
