// AdditionalInfo.tsx
import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input, InputGroup } from "reactstrap";

const AdditionalInfo: React.FC = () => {
  const [isListedBuilding, setIsListedBuilding] = useState<boolean>(false);
  const [ownFreehold, setOwnFreehold] = useState<boolean>(false);
  const [hasHMOLicense, setHasHMOLicense] = useState<boolean>(false);
  const [isOwnerOccupied, setIsOwnerOccupied] = useState<boolean>(false);
  const [isPropertyRentedOut, setIsPropertyRentedOut] =
    useState<boolean>(false);
  const [isStandardConstruction, setIsStandardConstruction] =
    useState<boolean>(false);
  const [hasCladding, setHasCladding] = useState<boolean>(false);
  const [isFloodRisk, setIsFloodRisk] = useState<boolean>(false);
  const [hasFlooded, setHasFlooded] = useState<boolean>(false);
  const [hasSubsidence, setHasSubsidence] = useState<boolean>(false);
  const [isInTrust, setIsInTrust] = useState<boolean>(false);
  const [isNearCommercial, setIsNearCommercial] = useState<boolean>(false);
  const [hasSolarPanels, setHasSolarPanels] = useState<boolean>(false);
  const [ownsSolarPanels, setOwnsSolarPanels] = useState<boolean>(false);
  const [hasAnnexe, setHasAnnexe] = useState<boolean>(false);
  const [tenure, setTenure] = useState<string>("Freehold");

  return (
    <div className="property-additional-info p-4">
      <Row className=" d-flex justify-content-center">
        <Col sm={12} lg={8}>
          <div className="bg-white rounded-lg p-4">
            {/* Section: Basic Property Information */}
            <div className="mb-4">
              <h5 className="text-primary mb-3">Basic Property Information</h5>
              <Row>
                {/* Listed Building */}
                <Col sm={12}>
                  <FormGroup className="mb-4 border-bottom pb-3">
                    <Row className="align-items-center">
                      <Col sm={7}>
                        <Label
                          className="mb-0 fw-medium"
                          for="IsThePropertyAListedBuilding"
                        >
                          Is the property a listed building?
                        </Label>
                      </Col>
                      <Col sm={5} className="radioBtnInputs d-flex gap-3">
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="Properties[0].IsThePropertyAListedBuilding"
                            value="true"
                            onChange={() => setIsListedBuilding(true)}
                            className="form-check-input"
                          />
                          <Label className="form-check-label">Yes</Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="Properties[0].IsThePropertyAListedBuilding"
                            value="false"
                            defaultChecked
                            onChange={() => setIsListedBuilding(false)}
                            className="form-check-input "
                          />
                          <Label className="form-check-label">No</Label>
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

                {isListedBuilding && (
                  <div id="ListedBuildingExtraFields0">
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <Label for="ListedBuildingStatus">
                            Listed status of the building
                          </Label>
                          <Input
                            type="select"
                            name="Properties[0].ListedBuildingStatus"
                            id="Properties[0].ListedBuildingStatus"
                          >
                            <option value="">Select...</option>
                            <option value="0">Grade I</option>
                            <option value="1">Grade II*</option>
                            <option value="2">Grade II</option>
                            <option value="3">Grade A</option>
                            <option value="4">Grade B</option>
                            <option value="5">Grade C</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <FormGroup>
                          <Label for="ListedBuildingNotes">
                            Listed Building Notes (e.g. delisting application
                            pending, etc)
                          </Label>
                          <Input
                            type="textarea"
                            name="Properties[0].ListedBuildingNotes"
                            id="Properties[0].ListedBuildingNotes"
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                )}

                {/* Own Freehold */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="OwnFreehold">
                        Do you or will you own part or all of the freehold?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].OwnFreehold"
                        value="true"
                        onChange={() => setOwnFreehold(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].OwnFreehold"
                        value="false"
                        defaultChecked
                        onChange={() => setOwnFreehold(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {/* HMO License */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="HMOlicense">
                        Does the property have an HMO license?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].HMOlicense"
                        value="true"
                        onChange={() => setHasHMOLicense(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].HMOlicense"
                        value="false"
                        defaultChecked
                        onChange={() => setHasHMOLicense(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {/* Owner Occupied */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="OwnerOccupied">
                        Will the property be owner occupied?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].OwnerOccupied"
                        value="true"
                        onChange={() => setIsOwnerOccupied(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].OwnerOccupied"
                        value="false"
                        defaultChecked
                        onChange={() => setIsOwnerOccupied(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {!isOwnerOccupied && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="OwnerOccupied_FurtherDetails">
                        Please provide further details
                      </Label>
                      <Input
                        type="textarea"
                        id="Properties[0].OwnerOccupied_FurtherDetails"
                        name="Properties[0].OwnerOccupied_FurtherDetails"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Property Rented Out */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="IsPropertyRentedOut">
                        Is the property rented out/to be rented out?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsPropertyRentedOut"
                        value="true"
                        onChange={() => setIsPropertyRentedOut(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsPropertyRentedOut"
                        value="false"
                        defaultChecked
                        onChange={() => setIsPropertyRentedOut(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {isPropertyRentedOut && (
                  <div className="showFor_IsPropertyRentedOut">
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <Label for="BTLExpectedRent">
                            Monthly Gross Rental
                          </Label>
                          <InputGroup>
                            <span className="input-group-text">£</span>
                            <Input
                              type="number"
                              id="Properties[0].BTLExpectedRent"
                              name="Properties[0].BTLExpectedRent"
                              defaultValue="0"
                              step="0.01"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <Label for="BTLExpectedNetRent">
                            Monthly Net Rental
                          </Label>
                          <InputGroup>
                            <span className="input-group-text">£</span>
                            <Input
                              type="number"
                              id="Properties[0].BTLExpectedNetRent"
                              name="Properties[0].BTLExpectedNetRent"
                              defaultValue=""
                              step="0.01"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <Label for="TenantType">Tenant Type</Label>
                          <Input
                            type="select"
                            id="Properties[0].TenantType"
                            name="Properties[0].TenantType"
                          >
                            <option value="">Select...</option>
                            <option>Professional</option>
                            <option>Student</option>
                            <option>Housing Benefit</option>
                            <option>Holiday Let</option>
                            <option>AirBnB</option>
                            <option>Corporate Let</option>
                            <option>Local Council Let</option>
                            <option>Other</option>
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <Label for="NumberOfASTs">Number of ASTs</Label>
                          <Input
                            type="number"
                            id="Properties[0].NumberOfASTs"
                            name="Properties[0].NumberOfASTs"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                )}

                {/* Standard Construction */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="IsStandardConstruction">
                        Is the property standard construction?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsStandardConstruction"
                        value="true"
                        onChange={() => setIsStandardConstruction(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsStandardConstruction"
                        value="false"
                        defaultChecked
                        onChange={() => setIsStandardConstruction(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {!isStandardConstruction && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="TypeOfConstruction">
                        Type of Construction
                      </Label>
                      <Input
                        type="text"
                        id="Properties[0].TypeOfConstruction"
                        name="Properties[0].TypeOfConstruction"
                        defaultValue=""
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Cladding */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="FlatCladdingOrBalconiesContainCombustibles">
                        Does the property's building have cladding and/or
                        vertically stacked balconies containing combustible
                        materials?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].FlatCladdingOrBalconiesContainCombustibles"
                        value="true"
                        onChange={() => setHasCladding(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].FlatCladdingOrBalconiesContainCombustibles"
                        value="false"
                        defaultChecked
                        onChange={() => setHasCladding(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {/* Flood Risk */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="FloodRiskArea">
                        Is the property in a flood risk area?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].FloodRiskArea"
                        value="true"
                        onChange={() => setIsFloodRisk(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].FloodRiskArea"
                        value="false"
                        onChange={() => setIsFloodRisk(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {isFloodRisk && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="FloodRiskAreaDetails">Details</Label>
                      <Input
                        type="textarea"
                        id="Properties[0].FloodRiskAreaDetails"
                        name="Properties[0].FloodRiskAreaDetails"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Flood Past Five Years */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="FloodPastFiveYears">
                        Has the property flooded in the last 5 years?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].FloodPastFiveYears"
                        value="true"
                        onChange={() => setHasFlooded(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].FloodPastFiveYears"
                        value="false"
                        onChange={() => setHasFlooded(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {hasFlooded && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="FloodPastFiveYearsDetails">Details</Label>
                      <Input
                        type="textarea"
                        id="Properties[0].FloodPastFiveYearsDetails"
                        name="Properties[0].FloodPastFiveYearsDetails"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Subsidence */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="SubsidenceLandslip">
                        Has there been any evidence of subsidence or landslip?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].SubsidenceLandslip"
                        value="true"
                        onChange={() => setHasSubsidence(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].SubsidenceLandslip"
                        value="false"
                        onChange={() => setHasSubsidence(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {hasSubsidence && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="SubsidenceLandslipDetails">Details</Label>
                      <Input
                        type="textarea"
                        id="Properties[0].SubsidenceLandslipDetails"
                        name="Properties[0].SubsidenceLandslipDetails"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Property in Trust */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="IsPropertyInATrust">
                        Is the property in a trust?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsPropertyInATrust"
                        value="true"
                        onChange={() => setIsInTrust(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsPropertyInATrust"
                        value="false"
                        onChange={() => setIsInTrust(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {isInTrust && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="IsPropertyInATrustReason">
                        Reason the property is in a trust
                      </Label>
                      <Input
                        type="textarea"
                        id="Properties[0].IsPropertyInATrustReason"
                        name="Properties[0].IsPropertyInATrustReason"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Near Commercial */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="Commercial">
                        Is the property above or near commercial premises?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].Commercial"
                        value="true"
                        onChange={() => setIsNearCommercial(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].Commercial"
                        value="false"
                        defaultChecked
                        onChange={() => setIsNearCommercial(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {isNearCommercial && (
                  <Col sm={6}>
                    <FormGroup>
                      <Label for="CommercialType">
                        Commercial Property Type
                      </Label>
                      <Input
                        type="text"
                        id="Properties[0].CommercialType"
                        name="Properties[0].CommercialType"
                        defaultValue=""
                        maxLength={255}
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Solar Panels */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="DoThePropertyHaveSolarPanels">
                        Does the property have solar panels?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].DoThePropertyHaveSolarPanels"
                        value="true"
                        onChange={() => setHasSolarPanels(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].DoThePropertyHaveSolarPanels"
                        value="false"
                        defaultChecked
                        onChange={() => setHasSolarPanels(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>

                {hasSolarPanels && (
                  <Col sm={12}>
                    <FormGroup>
                      <Col sm={7}>
                        <Label for="DoYouOwnTheSolarPanels">
                          Do you own the solar panels?
                        </Label>
                      </Col>
                      <Col sm={5} className="radioBtnInputs">
                        <Input
                          type="radio"
                          name="Properties[0].DoYouOwnTheSolarPanels"
                          value="true"
                          onChange={() => setOwnsSolarPanels(true)}
                        />{" "}
                        Yes
                        <Input
                          type="radio"
                          name="Properties[0].DoYouOwnTheSolarPanels"
                          value="false"
                          defaultChecked
                          onChange={() => setOwnsSolarPanels(false)}
                        />{" "}
                        No
                      </Col>
                    </FormGroup>
                  </Col>
                )}

                {/* Annexe */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="IsAnnexe">
                        Is there an Annexe within the property?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs">
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsAnnexe"
                        value="true"
                        onChange={() => setHasAnnexe(true)}
                      />{" "}
                      Yes
                      <Input
                        type="radio"
                        className="form-check-input "
                        name="Properties[0].IsAnnexe"
                        value="false"
                        defaultChecked
                        onChange={() => setHasAnnexe(false)}
                      />{" "}
                      No
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      {/* Add this to your CSS or style file */}
      <style>
        {`
          .property-additional-info .form-group {
            margin-bottom: 1.5rem;
          }
          .property-additional-info .form-check {
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            transition: background-color 0.2s;
          }
          .property-additional-info .form-check:hover {
            background-color: #f8f9fa;
          }
          .property-additional-info .text-primary {
            color: #0d6efd;
          }
          .property-additional-info .border-bottom {
            border-color: #e9ecef !important;
          }
          .property-additional-info .form-check-input {
            margin-right: 0.5rem;
            margin-left:0.5rem;
          }
          .property-additional-info .input-group {
            border-radius: 0.25rem;
            overflow: hidden;
          }
          .property-additional-info textarea {
            min-height: 100px;
          }
        `}
      </style>
    </div>
  );
};

export default AdditionalInfo;
