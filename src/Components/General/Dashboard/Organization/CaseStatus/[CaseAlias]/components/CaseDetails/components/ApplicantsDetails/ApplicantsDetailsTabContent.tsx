"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Applicant } from "./ApplicantsDetailsTab";

export interface ApplicantsUsersProps {
  applicantsData?: Applicant[];
  basicTab: string | null;
}

const ApplicantsDetailsTabContent: React.FC<ApplicantsUsersProps> = ({
  applicantsData,
  basicTab,
}) => {
  const [companyApplicant, setCompanyApplicant] = useState("no");
  const [formValues, setFormValues] = useState<Applicant>({
    alias: "",
    is_company_application: false,
    applicant: {
      first_name: "",
      last_name: "",
    },
    title: "",
    maiden_name: "",
    date_of_birth: "",
    anticipated_retirement_age: 0,
    state_retirement_age: 0,
    is_smoker: false,
    gender: "",
    nationality: "GB",
    dual_nationality: false,
    marital_status: "",
    ni_number: "",
    country_of_birth: "",
    bank_name: "",
    home_phone: "",
    mobile_phone: "",
    work_phone: "",
    email: "",
    marketing_preferences: [],
    has_dependants: false,
    number_of_dependants: 0,
    date_of_arrival_uk: "",
    indefinite_right_to_reside: true,
    visa_details: "",
    visa_expiry_date: "",
    postcode: "",
    house_number_or_name: "",
    address_line1: "",
    city: "",
    county: "",
    country: "",
    effective_from: "",
    time_at_address_years: 0,
    time_at_address_months: 0,
    residential_status: "",
    current_mortgage_balance: "",
    property_value: "",
    owner_monthly_payment: "",
    lender: "",
    mortgage_start_date: "",
    mortgage_type: "",
    current_interest_rate: "",
    remaining_term: 0,
    repayment_type: "",
    current_interest_type: "",
    early_repayment_charge_applies: false,
    erc_expiry_date: "",
    erc_amount: "",
    erc_being_paid: false,
    mortgage_account_number: "",
    being_redeemed: false,
    is_mortgage_portable: false,
    is_mortgage_being_ported: false,
    mortgage_not_to_complete_until_erc_ended: "",
    mortgage_charter_scheme: false,
    property_type: "",
    bedrooms: 0,
    tenure: "",
    year_built: 0,
    notes: "",
    updated_at: "",
    updated_by: 0,
  });

  // Find the selected applicant based on the `basicTab` value
  const selectedApplicant = applicantsData?.find(
    (applicant) => applicant.alias === basicTab
  );

  // Initialize form values with selected applicant's data
  useEffect(() => {
    if (selectedApplicant) {
      setFormValues(selectedApplicant);
    }
  }, [selectedApplicant]);

  if (!selectedApplicant) {
    return <div>No applicant data available.</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyApplicant(e.target.value);
  };

  const handleInputChange = (
    name: keyof Applicant,
    value: string | number | boolean | string[]
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log("Show: ", formValues);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
    // Add logic to save or process the form data here
  };

  return (
    <Container>
      <Row className="mb-3 border-primary rounded-2 p-3">
        <h3 className="text-info fs-4 mb-2">Company Applicant</h3>
        {/* Company Applicant Section */}
        <FormGroup>
          <Label>Is this application being made in a company name?</Label>
          {["yes", "no"].map((option) => (
            <div key={option}>
              <Label>
                <Input
                  type="radio"
                  name="is_company_application"
                  value={option}
                  checked={companyApplicant === option}
                  onChange={handleChange}
                  className="me-1"
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Label>
            </div>
          ))}
          {companyApplicant === "yes" && (
            <Button color="primary">Continue with Company Application</Button>
          )}
        </FormGroup>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <h3 className="text-primary fs-4 mb-2"> Applicant</h3>
          {/* Personal Details Section */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="title">Title*</Label>
                <Input
                  id="title"
                  type="select"
                  value={formValues.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="MR">Mr</option>
                  <option value="MRS">Mrs</option>
                  <option value="MS">Ms</option>
                  <option value="MISS">Miss</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="maiden_name">Maiden / Previous Last Name</Label>
                <Input
                  id="maiden_name"
                  type="text"
                  value={formValues.maiden_name || ""}
                  onChange={(e) =>
                    handleInputChange("maiden_name", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Additional Fields */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="date_of_birth">Date of Birth*</Label>
                <Input
                  id="date_of_birth"
                  type="date"
                  value={formValues.date_of_birth || ""}
                  onChange={(e) =>
                    handleInputChange("date_of_birth", e.target.value)
                  }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  type="select"
                  value={formValues.nationality}
                  onChange={(e) =>
                    handleInputChange("nationality", e.target.value)
                  }
                >
                  <option value="GB">United Kingdom</option>
                  <option value="BD">Bangladesh</option>
                  <option value="PK">Pakistan</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          {/* Conditional Fields */}
          {formValues.nationality !== "GB" && (
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="date_of_arrival_uk" className="text-secondary">
                    Date of Arrival in UK
                  </Label>
                  <Input
                    id="date_of_arrival_uk"
                    className="border-secondary"
                    type="date"
                    value={formValues.date_of_arrival_uk || ""}
                    onChange={(e) =>
                      handleInputChange("date_of_arrival_uk", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="indefinite_right_to_reside"
                    className="text-secondary"
                  >
                    Indefinite Right To Reside?
                  </Label>
                  {["yes", "no"].map((option) => (
                    <div key={option}>
                      <Label className="me-2 text-secondary">
                        <Input
                          type="radio"
                          name="indefinite_right_to_reside"
                          className="bg-secondary border-secondary me-1"
                          value={option}
                          checked={
                            formValues.indefinite_right_to_reside ===
                            (option === "no")
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "indefinite_right_to_reside",
                              e.target.value === "no"
                            )
                          }
                        />
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </Label>
                    </div>
                  ))}
                </FormGroup>
              </Col>
            </Row>
          )}

          {/* Visa Details - Hidden if Indefinite Right to Reside is "yes" */}
          {formValues.nationality !== "GB" &&
            !formValues.indefinite_right_to_reside && (
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="visa_details" className="text-info">
                      Visa Details
                    </Label>
                    <Input
                      id="visa_details"
                      type="text"
                      className="border-info"
                      value={formValues.visa_details || ""}
                      onChange={(e) =>
                        handleInputChange("visa_details", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="visa_expiry_date" className="text-info">
                      Visa Expiry Date
                    </Label>
                    <Input
                      id="visa_expiry_date"
                      className="border-info"
                      type="date"
                      value={formValues.visa_expiry_date || ""}
                      onChange={(e) =>
                        handleInputChange("visa_expiry_date", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
            )}

          {/* Identification and Contact Information */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="ni_number">NI Number</Label>
                <Input
                  id="ni_number"
                  type="text"
                  value={formValues.ni_number || ""}
                  onChange={(e) =>
                    handleInputChange("ni_number", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="bank_name">Who do you bank with?</Label>
                <Input
                  id="bank_name"
                  type="text"
                  value={formValues.bank_name || ""}
                  onChange={(e) =>
                    handleInputChange("bank_name", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="home_phone">Home Telephone</Label>
                <Input
                  id="home_phone"
                  type="text"
                  value={formValues.home_phone || ""}
                  onChange={(e) =>
                    handleInputChange("home_phone", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="mobile_phone">Mobile Number*</Label>
                <Input
                  id="mobile_phone"
                  type="text"
                  value={formValues.mobile_phone || ""}
                  onChange={(e) =>
                    handleInputChange("mobile_phone", e.target.value)
                  }
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="work_phone">Work Number</Label>
                <Input
                  id="work_phone"
                  type="text"
                  value={formValues.work_phone || ""}
                  onChange={(e) =>
                    handleInputChange("work_phone", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formValues.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Marketing Preferences */}
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="marketing_preferences">
                  Marketing Preferences:
                </Label>
                {["EMAIL", "TELEPHONE", "SMS", "POST", "NO_COMMUNICATION"].map(
                  (type) => (
                    <Label key={type} className="me-2">
                      <Input
                        type="checkbox"
                        checked={formValues.marketing_preferences.includes(
                          type
                        )}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const currentValue =
                            formValues.marketing_preferences || [];
                          const updatedValue = isChecked
                            ? [...currentValue, type]
                            : currentValue.filter((item) => item !== type);
                          handleInputChange(
                            "marketing_preferences",
                            updatedValue
                          );
                        }}
                      />
                      {type.charAt(0).toUpperCase() +
                        type.slice(1).toLowerCase().replace("_", " ")}
                    </Label>
                  )
                )}
              </FormGroup>
            </Col>
          </Row>

          {/* Dependents */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="has_dependants">Do you have any dependants?</Label>
                {["yes", "no"].map((value) => (
                  <div key={value}>
                    <Label className="me-2">
                      <Input
                        type="radio"
                        name="has_dependants"
                        className="me-1"
                        value={value}
                        checked={
                          formValues.has_dependants === (value === "yes")
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "has_dependants",
                            e.target.value === "yes"
                          )
                        }
                      />
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Label>
                  </div>
                ))}
              </FormGroup>
            </Col>
            {formValues.has_dependants && (
              <Col md={6}>
                <Button onClick={() => alert("Add Dependants")}>
                  Add Dependants
                </Button>
              </Col>
            )}
          </Row>

          {/* Current Address */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  type="text"
                  value={formValues.postcode || ""}
                  onChange={(e) =>
                    handleInputChange("postcode", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="house_number_or_name">House Name or Number</Label>
                <Input
                  id="house_number_or_name"
                  type="text"
                  value={formValues.house_number_or_name || ""}
                  onChange={(e) =>
                    handleInputChange("house_number_or_name", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="address_line1">Address Line 1</Label>
                <Input
                  id="address_line1"
                  type="text"
                  value={formValues.address_line1 || ""}
                  onChange={(e) =>
                    handleInputChange("address_line1", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  value={formValues.city || ""}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="county">County</Label>
                <Input
                  id="county"
                  type="text"
                  value={formValues.county || ""}
                  onChange={(e) => handleInputChange("county", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  value={formValues.country || ""}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="effective_from">Effective From</Label>
                <Input
                  id="effective_from"
                  type="date"
                  value={formValues.effective_from || ""}
                  onChange={(e) =>
                    handleInputChange("effective_from", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="time_at_address_years">
                  Time at this Address - Years
                </Label>
                <Input
                  id="time_at_address_years"
                  type="number"
                  value={formValues.time_at_address_years || ""}
                  onChange={(e) =>
                    handleInputChange("time_at_address_years", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="time_at_address_months">
                  Time at this Address - Months
                </Label>
                <Input
                  id="time_at_address_months"
                  type="number"
                  value={formValues.time_at_address_months || ""}
                  onChange={(e) =>
                    handleInputChange("time_at_address_months", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="residential_status">Residential Status*</Label>
                <Input
                  id="residential_status"
                  type="select"
                  value={formValues.residential_status || ""}
                  onChange={(e) =>
                    handleInputChange("residential_status", e.target.value)
                  }
                  required
                >
                  <option value="">Select an option</option>
                  <option value="OWNER">Owner</option>
                  <option value="RENTING_PRIVATE">Renting - Private</option>
                  <option value="RENTING_LOCAL_AUTHORITY">
                    Renting - Local Authority
                  </option>
                  <option value="TIED_ACCOMMODATION">Tied Accommodation</option>
                  <option value="LIVING_WITH_PARENTS">
                    Living with Parents
                  </option>
                  <option value="LIVING_WITH_FRIENDS_FAMILY">
                    Living with Friends/Family
                  </option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="notes">Notes</Label>
                <Input
                  id="notes"
                  type="textarea"
                  value={formValues.notes || ""}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Submit Button */}
          <Button type="submit" color="success">
            Update
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default ApplicantsDetailsTabContent;
