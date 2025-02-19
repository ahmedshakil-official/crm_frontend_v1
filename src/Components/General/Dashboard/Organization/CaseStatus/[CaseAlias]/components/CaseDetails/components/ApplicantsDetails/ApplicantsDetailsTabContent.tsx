"use client";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

interface FormValuesProps {
  title: string;
  firstName: string;
  maiden_name: string;
  lastName: string;
  dateOfBirth: Date | null;
  anticipatedRetirementAge: number | null;
  stateRetirementAge: string;
  smoker: string;
  gender: string;
  nationality: string;
  dualNationality: string;
  Dual_Nationality: string;
  Date_Of_Arrival: Date | null;
  indefiniteRight: string;
  Visa_Details: string;
  Visa_Expiry_Date: Date | null;
  maritalStatus: string;
  niNumber: string;
  countryOfBirth: string;
  Who_do_you_bank_with: string;
  banked_with_them: number | null;
  homeTelephone: string;
  mobileNumber: string;
  workNumber: string;
  emailAddress: string;
  marketingPreferences: string[]; // Explicitly typed as string[]
  dependants: string;
  postcode: string;
  houseNameOrNumber: string;
  addressLine1: string;
  city: string;
  county: string;
  country: string;
  effectiveFrom: Date | null;
  timeAtAddressYears: string;
  timeAtAddressMonths: string;
  residentialStatus: string;
  moveIntoNewProperty: string;
  notes: string;
}
const ApplicantsDetailsTabContent: React.FC = () => {
  const [companyApplicant, setCompanyApplicant] = useState("no");

  const handleChange = (e: any) => {
    setCompanyApplicant(e.target.value);
  };

  // State to manage form values
  const [formValues, setFormValues] = useState<FormValuesProps>({
    title: "",
    firstName: "",
    maiden_name: "",
    lastName: "",
    dateOfBirth: null,
    anticipatedRetirementAge: null,
    stateRetirementAge: "",
    smoker: "no",
    gender: "",
    nationality: "BRITISH",
    dualNationality: "no",
    Dual_Nationality: "",
    Date_Of_Arrival: null,
    indefiniteRight: "no",
    Visa_Details: "",
    Visa_Expiry_Date: null,
    maritalStatus: "",
    niNumber: "",
    countryOfBirth: "",
    Who_do_you_bank_with: "",
    banked_with_them: null,
    homeTelephone: "",
    mobileNumber: "",
    workNumber: "",
    emailAddress: "",
    marketingPreferences: [],
    dependants: "no",
    postcode: "",
    houseNameOrNumber: "",
    addressLine1: "",
    city: "",
    county: "",
    country: "",
    effectiveFrom: null,
    timeAtAddressYears: "",
    timeAtAddressMonths: "",
    residentialStatus: "",
    moveIntoNewProperty: "no",
    notes: "",
  });

  // Handle input changes
  const handleInputChange = (name: any, value: unknown) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <TabContent>
      <TabPane>
        <Container>
          <Row className="mb-3 border-primary rounded-1 p-2">
            <h2 className="text-info">Company Applicant</h2>
            <FormGroup>
              <Label>Is this application being made in a company name?</Label>
              <div>
                {["yes", "no"].map((option) => (
                  <div key={option}>
                    <Label check>
                      <Input
                        type="radio"
                        name="companyApplicant"
                        value={option}
                        className="me-2"
                        checked={companyApplicant === option}
                        onChange={handleChange}
                      />
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </div>
                ))}
              </div>

              {companyApplicant === "yes" && (
                <Button color="primary" className="mt-3">
                  Continue with Company Application
                </Button>
              )}
            </FormGroup>
          </Row>
          <Row>
            <h2 className="text-primary py-3">Applicant</h2>
          </Row>
          <Form>
            <Row>
              {/* 1st column  */}
              <Col md={6}>
                {/* Title Name */}
                <FormGroup>
                  <Label for="title">Title*</Label>
                  <Input
                    id="title"
                    name="title"
                    type="select"
                    value={formValues.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="MR">Mr</option>
                    <option value="MRS">Mrs</option>
                    <option value="MS">Ms</option>
                  </Input>
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* First Name */}
                <FormGroup>
                  <Label for="maiden_name">Maiden / Previous Last Name</Label>
                  <Input
                    id="maiden_name"
                    name="maiden_name"
                    type="text"
                    value={formValues.maiden_name}
                    onChange={(e) =>
                      handleInputChange("maiden_name", e.target.value)
                    }
                  />
                </FormGroup>

                {/* Date of Birth  */}
                <FormGroup>
                  <Label for="dateOfBirth">Date of Birth*</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formValues.dateOfBirth || ""}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    required
                  />
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* Anticipated Retirement Age */}
                <FormGroup>
                  <Label for="anticipatedRetirementAge">
                    Anticipated Retirement Age*
                  </Label>
                  <Input
                    id="anticipatedRetirementAge"
                    name="anticipatedRetirementAge"
                    type="number"
                    value={formValues.anticipatedRetirementAge || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "anticipatedRetirementAge",
                        e.target.value
                      )
                    }
                    required
                  />
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* Smoker */}
                <FormGroup>
                  <Label>Are you a smoker?</Label>
                  <div>
                    {["yes", "no"].map((option) => (
                      <div key={option}>
                        <Label check>
                          <Input
                            type="radio"
                            name="smoker"
                            value={option}
                            checked={formValues.smoker === option}
                            onChange={(e) =>
                              handleInputChange("smoker", e.target.value)
                            }
                            className="me-2"
                          />

                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </FormGroup>
                {/* Nationality */}
                <FormGroup>
                  <Label for="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    name="nationality"
                    type="select"
                    value={formValues.nationality || "BRITISH"}
                    onChange={(e) =>
                      handleInputChange("nationality", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="AFGHAN">Afghan</option>
                    <option value="ALANNINGAR">Alanningar</option>
                    <option value="ALBANIAN">Albanian</option>
                    <option value="ALGERIAN">Algerian</option>
                    <option value="AMERICAN">American</option>
                    <option value="ANDORRAN">Andorran</option>
                    <option value="ANGOLAN">Angolan</option>
                    <option value="BRITISH">British</option>
                  </Input>
                </FormGroup>

                {/* Conditional Fields */}
                {formValues.nationality !== "BRITISH" && (
                  <>
                    <FormGroup>
                      <Label for="Date_Of_Arrival" className="text-info">
                        Date of Arrival in UK
                      </Label>
                      <Input
                        id="Date_Of_Arrival"
                        name="Date_Of_Arrival"
                        type="date"
                        value={formValues.Date_Of_Arrival}
                        className="border-info"
                        onChange={(e) =>
                          handleInputChange("Date_Of_Arrival", e.target.value)
                        }
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label className="text-info">
                        Indefinite Right To Reside?
                      </Label>
                      <div>
                        {["yes", "no"].map((option) => (
                          <div key={option}>
                            <Label check>
                              <Input
                                type="radio"
                                name="indefiniteRight"
                                value={option}
                                checked={formValues.indefiniteRight === option}
                                className="me-2"
                                onChange={(e) =>
                                  handleInputChange(
                                    "indefiniteRight",
                                    e.target.value
                                  )
                                }
                              />
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </FormGroup>

                    {/* Visa Details - Hidden if Indefinite Right to Reside is "yes" */}
                    {formValues.indefiniteRight !== "yes" && (
                      <>
                        <FormGroup>
                          <Label className="text-secondary" for="Visa_Details">
                            Visa Details
                          </Label>
                          <Input
                            id="Visa_Details"
                            name="Visa_Details"
                            type="text"
                            value={formValues.Visa_Details}
                            className="border-secondary"
                            onChange={(e) =>
                              handleInputChange("Visa_Details", e.target.value)
                            }
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label
                            className="text-secondary"
                            for="Visa_Expiry_Date"
                          >
                            Visa Expiry Date
                          </Label>
                          <Input
                            id="Visa_Expiry_Date"
                            name="Visa_Expiry_Date"
                            type="date"
                            value={formValues.Visa_Expiry_Date}
                            className="border-secondary"
                            onChange={(e) =>
                              handleInputChange(
                                "Visa_Expiry_Date",
                                e.target.value
                              )
                            }
                          />
                        </FormGroup>
                      </>
                    )}
                  </>
                )}
                {/* NI Number */}
                <FormGroup>
                  <Label for="niNumber">NI Number</Label>
                  <Input
                    id="niNumber"
                    name="niNumber"
                    type="text"
                    value={formValues.niNumber}
                    onChange={(e) =>
                      handleInputChange("niNumber", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Who do you bank with? */}
                <FormGroup>
                  <Label for="Who_do_you_bank_with">
                    Who do you bank with?
                  </Label>
                  <Input
                    id="Who_do_you_bank_with"
                    name="Who_do_you_bank_with"
                    type="text"
                    value={formValues.Who_do_you_bank_with}
                    onChange={(e) =>
                      handleInputChange("Who_do_you_bank_with", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Home Telephone */}
                <FormGroup>
                  <Label for="homeTelephone">Home Telephone</Label>
                  <Input
                    id="homeTelephone"
                    name="homeTelephone"
                    type="text"
                    value={formValues.homeTelephone}
                    onChange={(e) =>
                      handleInputChange("homeTelephone", e.target.value)
                    }
                  />
                </FormGroup>

                {/* Mobile Number */}
                <FormGroup>
                  <Label for="mobileNumber">Mobile Number*</Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    value={formValues.mobileNumber}
                    onChange={(e) =>
                      handleInputChange("mobileNumber", e.target.value)
                    }
                    required
                  />
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* Marketing Preferences */}
                <FormGroup>
                  <Label className="fw-bold">Marketing Preferences: </Label>
                  {[
                    "EMAIL",
                    "TELEPHONE",
                    "SMS",
                    "POST",
                    "NO_COMMUNICATION",
                  ].map((type) => (
                    <Label key={type} check className="px-1">
                      <Input
                        type="checkbox"
                        name="marketingPreferences"
                        className="me-1"
                        value={type}
                        checked={(
                          formValues.marketingPreferences || []
                        ).includes(type)}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const currentValue =
                            formValues.marketingPreferences || [];
                          const updatedValue = isChecked
                            ? [...currentValue, type]
                            : currentValue.filter((item) => item !== type);
                          handleInputChange(
                            "marketingPreferences",
                            updatedValue
                          );
                        }}
                      />
                      {type.charAt(0).toUpperCase() +
                        type.slice(1).toLowerCase().replace("_", " ")}
                    </Label>
                  ))}
                </FormGroup>
              </Col>
              {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* 2nd column  */}
              <Col md={6}>
                {/* First Name */}
                <FormGroup>
                  <Label for="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formValues.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    required
                  />
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* Last Name */}
                <FormGroup>
                  <Label for="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formValues.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    required
                  />
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* gender  */}
                <FormGroup>
                  <Label>What is your gender?</Label>
                  {["Male", "Female"].map((option) => (
                    <div key={option}>
                      <Label check>
                        <Input
                          type="radio"
                          name="gender"
                          value={option}
                          checked={formValues.gender === option}
                          onChange={(e) =>
                            handleInputChange("gender", e.target.value)
                          }
                          className="me-2"
                        />
                        {option}
                      </Label>
                    </div>
                  ))}
                </FormGroup>
                {/* Anticipated Retirement Age */}
                <FormGroup>
                  <Label for="stateRetirementAge">State Retirement Age</Label>
                  <Input
                    id="stateRetirementAge"
                    name="stateRetirementAge"
                    type="number"
                    value={formValues.stateRetirementAge || ""}
                    onChange={(e) =>
                      handleInputChange("stateRetirementAge", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Marital Status */}
                <FormGroup>
                  <Label for="maritalStatus">Marital Status</Label>
                  <Input
                    id="maritalStatus"
                    name="maritalStatus"
                    type="select"
                    value={formValues.maritalStatus}
                    onChange={(e) =>
                      handleInputChange("maritalStatus", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="SINGLE">Single</option>
                    <option value="MARRIED">Married</option>
                    <option value="DIVORCED">Divorced</option>
                    <option value="SEPARATED">Separated</option>
                    <option value="WIDOW">Widow</option>
                    <option value="WIDOWER">Widower</option>
                    <option value="CO_HABITING">Co-Habiting</option>
                    <option value="CIVIL_PARTNER">Civil Partner</option>
                    <option value="RELIGIOUSLY_MARRIED">
                      Religiously Married
                    </option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Does the applicant have a dual nationality?</Label>
                  {["yes", "no"].map((option) => (
                    <div key={option}>
                      <Label check>
                        <Input
                          type="radio"
                          name="dualNationality"
                          value={option}
                          checked={formValues.dualNationality === option}
                          onChange={(e) =>
                            handleInputChange("dualNationality", e.target.value)
                          }
                          className="me-2"
                        />
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </Label>
                    </div>
                  ))}

                  {/* Show the nationality select only if 'Yes' is selected */}
                  {formValues.dualNationality === "yes" && (
                    <FormGroup>
                      <Label for="Dual_Nationality" className="mt-2 text-info">
                        Dual Nationality
                      </Label>
                      <Input
                        id="Dual_Nationality"
                        name="Dual_Nationality"
                        type="select"
                        className="border-info"
                        value={formValues.Dual_Nationality}
                        onChange={(e) =>
                          handleInputChange("Dual_Nationality", e.target.value)
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="AFGHAN">Afghan</option>
                        <option value="ALANNINGAR">Alanningar</option>
                        <option value="ALBANIAN">Albanian</option>
                        {/* Add all other options here */}
                      </Input>
                    </FormGroup>
                  )}
                </FormGroup>
                {/* Country of Birth */}
                <FormGroup>
                  <Label for="countryOfBirth">Country of Birth</Label>
                  <Input
                    id="countryOfBirth"
                    name="countryOfBirth"
                    type="text"
                    value={formValues.countryOfBirth}
                    onChange={(e) =>
                      handleInputChange("countryOfBirth", e.target.value)
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="banked_with_them?">
                    How long have you banked with them?
                  </Label>
                  <Input
                    id="banked_with_them"
                    name="banked_with_them"
                    type="date"
                    value={formValues.banked_with_them || ""}
                    onChange={(e) =>
                      handleInputChange("banked_with_them", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Work Number */}
                <FormGroup>
                  <Label for="workNumber">Work Number</Label>
                  <Input
                    id="workNumber"
                    name="workNumber"
                    type="text"
                    value={formValues.workNumber}
                    onChange={(e) =>
                      handleInputChange("workNumber", e.target.value)
                    }
                  />
                </FormGroup>

                {/* Email Address */}
                <FormGroup>
                  <Label for="emailAddress">Email Address</Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    value={formValues.emailAddress}
                    onChange={(e) =>
                      handleInputChange("emailAddress", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Dependents */}
                <FormGroup>
                  <Label>Do you have any dependants?</Label>
                  {["yes", "no"].map((value) => (
                    <div key={value}>
                      <Label check>
                        <Input
                          type="radio"
                          name="dependants"
                          className="me-2"
                          value={value}
                          checked={formValues.dependants === value}
                          onChange={(e) =>
                            handleInputChange("dependants", e.target.value)
                          }
                        />
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </Label>
                    </div>
                  ))}
                </FormGroup>

                {/* Conditionally Render Button */}
                {formValues.dependants === "yes" && (
                  <Button
                    color="primary"
                    onClick={() => alert("Button clicked!")}
                  >
                    Add Dependants
                  </Button>
                )}
              </Col>
            </Row>
            {/* ////////////////////////////////////////New row inside form////////////////////// */}
            <Row>
              <h3 className="text-info my-2">Current Address</h3>
              <Col md={6}>
                {/* Postcode */}
                <FormGroup>
                  <Label for="postcode">Postcode</Label>
                  <Input
                    id="postcode"
                    name="postcode"
                    type="text"
                    value={formValues.postcode}
                    onChange={(e) =>
                      handleInputChange("postcode", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Address Line 1 */}
                <FormGroup>
                  <Label for="addressLine1">Address Line 1</Label>
                  <Input
                    id="addressLine1"
                    name="addressLine1"
                    type="text"
                    value={formValues.addressLine1}
                    onChange={(e) =>
                      handleInputChange("addressLine1", e.target.value)
                    }
                  />
                </FormGroup>
                {/* County */}
                <FormGroup>
                  <Label for="county">County</Label>
                  <Input
                    id="county"
                    name="county"
                    type="text"
                    value={formValues.county}
                    onChange={(e) =>
                      handleInputChange("county", e.target.value)
                    }
                  />
                </FormGroup>

                {/* Country */}
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    value={formValues.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Residential Status */}
                <FormGroup>
                  <Label for="residentialStatus">Residential Status*</Label>
                  <Input
                    id="residentialStatus"
                    name="residentialStatus"
                    type="select"
                    value={formValues.residentialStatus}
                    onChange={(e) =>
                      handleInputChange("residentialStatus", e.target.value)
                    }
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="OWNER">Owner</option>
                    <option value="RENTING_PRIVATE">Renting - private</option>
                    <option value="RENTING_LOCAL_AUTHORITY">
                      Renting - Local Authority
                    </option>
                    <option value="TIED_ACCOMMODATION">
                      Tied Accommodation
                    </option>
                    <option value="LIVING_WITH_PARENTS">
                      Living with Parents
                    </option>
                    <option value="LIVING_WITH_FRIENDS_FAMILY">
                      Living with Friends/Family
                    </option>
                  </Input>
                  <FormFeedback>This field is required</FormFeedback>
                </FormGroup>
                {/* Move Into New Property */}
                <FormGroup>
                  <Label>
                    Do you intend to move into the new property immediately
                    after completion?
                  </Label>
                  {["yes", "no"].map((value) => (
                    <div key={value}>
                      <Label check>
                        <Input
                          type="radio"
                          name="moveIntoNewProperty"
                          className="me-2"
                          value={value}
                          checked={formValues.moveIntoNewProperty === value}
                          onChange={(e) =>
                            handleInputChange(
                              "moveIntoNewProperty",
                              e.target.value
                            )
                          }
                        />

                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </Label>
                    </div>
                  ))}
                </FormGroup>
              </Col>
              <Col md={6}>
                {/* House Name or Number */}
                <FormGroup>
                  <Label for="houseNameOrNumber">House Name or Number</Label>
                  <Input
                    id="houseNameOrNumber"
                    name="houseNameOrNumber"
                    type="text"
                    value={formValues.houseNameOrNumber}
                    onChange={(e) =>
                      handleInputChange("houseNameOrNumber", e.target.value)
                    }
                  />
                </FormGroup>
                {/* City */}
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formValues.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </FormGroup>

                {/* Effective From */}
                <FormGroup>
                  <Label for="effectiveFrom">Effective From</Label>
                  <Input
                    id="effectiveFrom"
                    name="effectiveFrom"
                    type="date"
                    value={formValues.effectiveFrom || ""}
                    onChange={(e) =>
                      handleInputChange("effectiveFrom", e.target.value)
                    }
                  />
                </FormGroup>

                {/* Time at Address - Years */}
                <FormGroup>
                  <Label for="timeAtAddressYears">
                    Time at this Address - Years
                  </Label>
                  <Input
                    id="timeAtAddressYears"
                    name="timeAtAddressYears"
                    type="number"
                    value={formValues.timeAtAddressYears || ""}
                    onChange={(e) =>
                      handleInputChange("timeAtAddressYears", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Time at Address - Months */}
                <FormGroup>
                  <Label for="timeAtAddressMonths">
                    Time at this Address - Months
                  </Label>
                  <Input
                    id="timeAtAddressMonths"
                    name="timeAtAddressMonths"
                    type="number"
                    value={formValues.timeAtAddressMonths || ""}
                    onChange={(e) =>
                      handleInputChange("timeAtAddressMonths", e.target.value)
                    }
                  />
                </FormGroup>
                {/* Notes */}
                <FormGroup>
                  <Label for="notes">Notes</Label>
                  <Input
                    id="notes"
                    name="notes"
                    type="textarea"
                    value={formValues.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </FormGroup>

                {/* Submit Button */}
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </TabPane>
    </TabContent>
  );
};

export default ApplicantsDetailsTabContent;
