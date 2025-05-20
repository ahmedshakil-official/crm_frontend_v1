"use client";
import { useUpdateApplicantDetailsMutation } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/ApplicantsDetails/ApplicantsDetailsApi";
import { ApplicantProps } from "@/Types/Organization/Cases/CaseDetails/ApplicantsDetailsTypes";
import { ApplicantsUsersProps } from "@/Types/Organization/Cases/CaseDetails/ApplicantsUserTypes";
import { countries } from "@/utils/Countries";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
import AddCompanyDetailsFormModal from "./ApplicantDetailsModals/AddApplicantCompanyInfoModal";
import AddDependantFormModal from "./ApplicantDetailsModals/AddApplicantDependantsModal";
import ApplicantDependantsViewModal from "./ApplicantDetailsModals/ApplicantDependantsViewModal";

const ApplicantsDetailsTabContent: React.FC<ApplicantsUsersProps> = ({
  applicantsData,
  basicTab,
}) => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isDependantsModalOpen, setIsDependantsModalOpen] = useState(false);
  const [isDependantsViewModalOpen, setIsDependantsViewModalOpen] =
    useState(false);

  const toggleViewModal = () =>
    setIsDependantsViewModalOpen(!isDependantsViewModalOpen);

  // UseParams with type assertion
  const params = useParams();
  const { casealias } = params;
  const [updateApplicantDetails, { isLoading: isUpdatingApplicant }] =
    useUpdateApplicantDetailsMutation();

  const [formValues, setFormValues] = useState<ApplicantProps>({
    alias: basicTab || "", // Add this line to initialize alias
    is_company_application: false,
    title: "",
    maiden_name: "",
    date_of_birth: "",
    anticipated_retirement_age: 0,
    state_retirement_age: 0,
    is_smoker: false,
    gender: "",
    nationality: "GB",
    is_dual_nationality: false,
    dual_nationality: "",
    marital_status: "",
    ni_number: "",
    country_of_birth: "",
    bank_name: "",
    home_phone: "",
    mobile_phone: "",
    work_phone: "",
    email: "",
    // marketing_preferences: [],
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
    updated_by: "",
  });

  // Find the selected applicant based on the `basicTab` value
  const selectedApplicant = applicantsData?.find(
    (applicant) => applicant.alias === basicTab
  );

  // Initialize form values with selected applicant's data
  useEffect(() => {
    if (selectedApplicant) {
      const { marketing_preferences, ...newValue } = selectedApplicant; // Destructure to exclude marketing_preferences
      setFormValues(newValue);
    }
  }, [selectedApplicant]);

  if (!selectedApplicant) {
    return <div>No applicant data available.</div>;
  }

  const handleInputChange = (
    name: keyof ApplicantProps,
    value: string | number | boolean | string[] | null
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await updateApplicantDetails({
        case_alias: casealias as string,
        applicantDetails_alias: formValues.alias as string,
        applicantDetails: formValues,
      }).unwrap();
      toast.success("Applicant details updated successfully!");
    } catch (error) {
      console.error("Error updating applicant details:", error);
      toast.error("Error updating applicant details!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
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
                      checked={
                        formValues.is_company_application === (option === "yes")
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "is_company_application",
                          e.target.value === "yes"
                        )
                      }
                      className="me-1"
                    />
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </Label>
                </div>
              ))}
              {formValues?.is_company_application && (
                <Button
                  onClick={() => setIsCompanyModalOpen(true)}
                  color="primary"
                >
                  Continue with Company Application
                </Button>
              )}
            </FormGroup>
          </Row>
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
                <Label for="is_smoker">Are you a smoker?</Label>
                {["yes", "no"].map((value) => (
                  <div key={value}>
                    <Label className="me-2">
                      <Input
                        type="radio"
                        name="is_smoker"
                        className="me-1"
                        value={value}
                        checked={formValues.is_smoker === (value === "yes")}
                        onChange={(e) =>
                          handleInputChange(
                            "is_smoker",
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
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="anticipated_retirement_age">
                  Anticipated Retirement Age*
                </Label>
                <Input
                  id="anticipated_retirement_age"
                  type="number"
                  value={formValues.anticipated_retirement_age || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "anticipated_retirement_age",
                      e.target.value
                    )
                  }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="state_retirement_age">State Retirement Age</Label>
                <Input
                  id="state_retirement_age"
                  type="number"
                  value={formValues.state_retirement_age || ""}
                  onChange={(e) =>
                    handleInputChange("state_retirement_age", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          {/* Additional Fields */}
          <Row>
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
                  <option value="">Select a country</option>
                  {/* Map through the list of countries */}
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="is_dual_nationality">
                  Does the applicant have a dual nationality?
                </Label>
                {["yes", "no"].map((value) => (
                  <div key={value}>
                    <Label className="me-2">
                      <Input
                        type="radio"
                        name="is_dual_nationality"
                        className="me-1"
                        value={value}
                        checked={
                          formValues.is_dual_nationality === (value === "yes")
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "is_dual_nationality",
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
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="marital_status">Marital Status</Label>
                <Input
                  id="marital_status"
                  type="select"
                  value={formValues.marital_status}
                  onChange={(e) =>
                    handleInputChange("marital_status", e.target.value)
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
            </Col>
            {formValues.is_dual_nationality && (
              <Col md={6}>
                <FormGroup>
                  <Label for="dual_nationality" className="text-info">
                    Dual Nationality
                  </Label>
                  <Input
                    id="dual_nationality"
                    type="select"
                    className="border-info"
                    value={formValues.dual_nationality}
                    onChange={(e) =>
                      handleInputChange("dual_nationality", e.target.value)
                    }
                  >
                    <option value="">Select a country</option>
                    {/* Map through the list of countries */}
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            )}
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
                <Label for="country_of_birth">Country of Birth</Label>
                <Input
                  id="country_of_birth"
                  type="text"
                  value={formValues.country_of_birth || ""}
                  onChange={(e) =>
                    handleInputChange("country_of_birth", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
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
            <Col md={6}>
              <Label for="how_long_banked">
                How long have you banked with them?
              </Label>
              <FormGroup className="d-flex justify-content-center align-items-center gap-3">
                <Input
                  id="how_long_banked"
                  type="number"
                  placeholder="Years"
                  // value={formValues.how_long_banked || ""}
                  // onChange={(e) =>
                  //   handleInputChange("how_long_banked", e.target.value)
                  // }
                />
                <Input
                  id="how_long_banked"
                  type="number"
                  placeholder="Months"
                  // value={formValues.how_long_banked || ""}
                  // onChange={(e) =>
                  //   handleInputChange("how_long_banked", e.target.value)
                  // }
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
          {/* <Row>
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
          </Row> */}

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
              <Col
                md={6}
                className="d-flex align-items-center justify-content-center gap-3"
              >
                <Button onClick={() => setIsDependantsModalOpen(true)}>
                  Add Dependants
                </Button>
                <Button color="success" onClick={toggleViewModal}>
                  View Dependants
                </Button>
              </Col>
            )}
          </Row>
          <Row>
            <h3 className="text-info my-3">Current Address</h3>
          </Row>
          {/* Current Address */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="postcode">Postcode*</Label>
                <Input
                  id="postcode"
                  type="text"
                  value={formValues.postcode || ""}
                  onChange={(e) =>
                    handleInputChange("postcode", e.target.value)
                  }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="house_number_or_name">House Name or Number*</Label>
                <Input
                  id="house_number_or_name"
                  type="text"
                  value={formValues.house_number_or_name || ""}
                  onChange={(e) =>
                    handleInputChange("house_number_or_name", e.target.value)
                  }
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="address_line1">Address Line 1*</Label>
                <Input
                  id="address_line1"
                  type="text"
                  value={formValues.address_line1 || ""}
                  onChange={(e) =>
                    handleInputChange("address_line1", e.target.value)
                  }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City*</Label>
                <Input
                  id="city"
                  type="text"
                  value={formValues.city || ""}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
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
                <Label for="country">Country*</Label>
                <Input
                  id="country"
                  type="text"
                  value={formValues.country || ""}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="effective_from">Effective From*</Label>
                <Input
                  id="effective_from"
                  type="date"
                  value={formValues.effective_from || ""}
                  onChange={(e) =>
                    handleInputChange("effective_from", e.target.value)
                  }
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <Label for="time_at_address">Time at this Address</Label>
              <FormGroup className="d-flex justify-content-center align-items-center gap-3">
                <Input
                  id="time_at_address_years"
                  type="number"
                  placeholder="Years"
                  value={formValues.time_at_address_years || ""}
                  onChange={(e) =>
                    handleInputChange("time_at_address_years", e.target.value)
                  }
                />
                <Input
                  id="time_at_address"
                  type="number"
                  placeholder="Months"
                  value={formValues.time_at_address_months || ""}
                  onChange={(e) =>
                    handleInputChange("time_at_address_months", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="residential_status">Residential Status*</Label>
                <Input
                  id="residential_status"
                  type="select"
                  value={formValues.residential_status || ""}
                  onChange={(e) => {
                    handleInputChange("residential_status", e.target.value);
                  }}
                  required
                >
                  <option value="">Select...</option>
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
            {formValues.residential_status === "OWNER" && (
              <>
                <Col md={6}>
                  <FormGroup>
                    <Label for="current_mortgage_balance">
                      Current Mortgage Balance
                    </Label>
                    <Input
                      id="current_mortgage_balance"
                      type="number"
                      value={formValues.current_mortgage_balance || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "current_mortgage_balance",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="property_value">Property Value</Label>
                    <Input
                      id="property_value"
                      type="number"
                      value={formValues.property_value || ""}
                      onChange={(e) =>
                        handleInputChange("property_value", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="owner_monthly_payment">
                      Owner Monthly Payment
                    </Label>
                    <Input
                      id="owner_monthly_payment"
                      type="number"
                      value={formValues.owner_monthly_payment || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "owner_monthly_payment",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lender">Lender</Label>
                    <Input
                      id="lender"
                      type="text"
                      value={formValues.lender || ""}
                      onChange={(e) =>
                        handleInputChange("lender", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="current_interest_rate">
                      Current Interest Rate
                    </Label>
                    <Input
                      id="current_interest_rate"
                      type="number"
                      value={formValues.current_interest_rate || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "current_interest_rate",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="mortgage_start_date">Mortgage Start Date</Label>
                    <Input
                      id="mortgage_start_date"
                      type="date"
                      value={formValues.mortgage_start_date || ""}
                      onChange={(e) =>
                        handleInputChange("mortgage_start_date", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="remaining_term">Remaining Term</Label>
                    <Input
                      id="remaining_term"
                      type="number"
                      value={formValues.remaining_term || ""}
                      onChange={(e) =>
                        handleInputChange("remaining_term", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="mortgage_type">Mortgage Type</Label>
                    <Input
                      id="mortgage_type"
                      type="select"
                      value={formValues.mortgage_type || ""}
                      onChange={(e) =>
                        handleInputChange("mortgage_type", e.target.value)
                      }
                    >
                      <option value="">Select...</option>
                      <option value="SECURED_LOAN">
                        Secured Loan (Applicant Commitments)
                      </option>
                      <option value="SECOND_HOME">
                        Second Home (Applicant Commitments)
                      </option>
                      <option value="HOLIDAY_HOME">
                        Holiday Home (Applicant Commitments)
                      </option>
                      <option value="BUY_TO_LET">
                        Buy to Let (Applicant Mortgage Details)
                      </option>
                      <option value="HOLIDAY_LET">
                        Holiday Let (Applicant Mortgage Details)
                      </option>
                      <option value="COMMERCIAL_INVESTMENT">
                        Commercial Investment (Applicant Mortgage Details)
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="repayment_type">Repayment Type</Label>
                    <Input
                      id="repayment_type"
                      type="select"
                      value={formValues.repayment_type || ""}
                      onChange={(e) =>
                        handleInputChange("repayment_type", e.target.value)
                      }
                    >
                      <option value="">Select...</option>
                      <option value="CAPITAL_INTEREST">
                        Capital and Interest
                      </option>
                      <option value="INTEREST_ONLY">Interest Only</option>
                      <option value="PART_AND_PART">Part And Part</option>
                      <option value="SERVICED">Serviced</option>
                      <option value="ROLLED_UP">Rolled Up</option>
                      <option value="RETAINED">Retained</option>
                      <option value="OTHER">Other</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="current_interest_type">
                      Current Interest Type
                    </Label>
                    <Input
                      id="current_interest_type"
                      type="select"
                      value={formValues.current_interest_type || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "current_interest_type",
                          e.target.value
                        )
                      }
                    >
                      <option value="">Select...</option>
                      <option value="FIXED">Fixed</option>
                      <option value="VARIABLE">Variable</option>
                      <option value="TRACKER">Tracker</option>
                      <option value="DISCOUNT">Discount</option>
                      <option value="CAPPED">Capped</option>
                      <option value="SVR">SVR</option>
                      <option value="OFFSET">Offset</option>
                      <option value="LIFETIME">Lifetime</option>
                      <option value="OTHER">Other</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="early_repayment_charge_applies">
                      Does an early repayment charge apply?
                    </Label>
                    {["yes", "no"].map((value) => (
                      <div key={value}>
                        <Label className="me-2">
                          <Input
                            type="radio"
                            name="early_repayment_charge_applies"
                            className="me-1"
                            value={value}
                            checked={
                              formValues.early_repayment_charge_applies ===
                              (value === "yes")
                            }
                            onChange={(e) =>
                              handleInputChange(
                                "early_repayment_charge_applies",
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
                {formValues.early_repayment_charge_applies === true && (
                  <>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="erc_expiry_date">ERC Expiry Date</Label>
                        <Input
                          id="early_repayment_charge"
                          type="number"
                          value={formValues.erc_expiry_date || ""}
                          onChange={(e) =>
                            handleInputChange("erc_expiry_date", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="mortgage_not_to_complete_until_erc_ended">
                          Mortgage not to complete until ERC ended
                        </Label>
                        <Input
                          id="mortgage_not_to_complete_until_erc_ended"
                          type="select"
                          value={
                            formValues.mortgage_not_to_complete_until_erc_ended ||
                            ""
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "mortgage_not_to_complete_until_erc_ended",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select...</option>
                          <option value="NA">N/A</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="erc_amount">ERC Amount</Label>
                        <Input
                          id="erc_amount"
                          type="number"
                          value={formValues.erc_amount || ""}
                          onChange={(e) =>
                            handleInputChange("erc_amount", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="erc_being_paid">
                          Is The ERC Being Paid?
                        </Label>
                        {["yes", "no"].map((value) => (
                          <div key={value}>
                            <Label className="me-2 text-success">
                              <Input
                                type="radio"
                                name="erc_being_paid"
                                className="border-success me-1"
                                value={value}
                                checked={
                                  formValues.erc_being_paid ===
                                  (value === "yes")
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    "erc_being_paid",
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
                  </>
                )}
                <Col md={6}>
                  <FormGroup>
                    <Label for="being_redeemed">Being Redeemed?</Label>
                    {["yes", "no"].map((value) => (
                      <div key={value}>
                        <Label className="me-2">
                          <Input
                            type="radio"
                            name="being_redeemed"
                            className="me-1"
                            value={value}
                            checked={
                              formValues.being_redeemed === (value === "yes")
                            }
                            onChange={(e) =>
                              handleInputChange(
                                "being_redeemed",
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
                <Col md={6}>
                  <FormGroup>
                    <Label for="is_mortgage_portable">
                      Is The Mortgage Portable?
                    </Label>
                    {["yes", "no"].map((value) => (
                      <div key={value}>
                        <Label className="me-2">
                          <Input
                            type="radio"
                            name="is_mortgage_portable"
                            className="me-1"
                            value={value}
                            checked={
                              formValues.is_mortgage_portable ===
                              (value === "yes")
                            }
                            onChange={(e) =>
                              handleInputChange(
                                "is_mortgage_portable",
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
                {formValues.is_mortgage_portable === true && (
                  <>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="is_mortgage_being_ported">
                          Is The Mortgage Being Ported?
                        </Label>
                        {["yes", "no"].map((value) => (
                          <div key={value}>
                            <Label className="me-2 text-success">
                              <Input
                                type="radio"
                                name="is_mortgage_being_ported"
                                className="border-success me-1"
                                value={value}
                                checked={
                                  formValues.is_mortgage_being_ported ===
                                  (value === "yes")
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    "is_mortgage_being_ported",
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
                  </>
                )}
                <Col md={6}>
                  <FormGroup>
                    <Label for="mortgage_account_number">
                      Mortgage Account Number
                    </Label>
                    <Input
                      id="mortgage_account_number"
                      type="text"
                      value={formValues.mortgage_account_number || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "mortgage_account_number",
                          e.target.value
                        )
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="mortgage_charter_scheme">
                      Are you in a Mortgage Charter Scheme?
                    </Label>
                    {["yes", "no"].map((value) => (
                      <div key={value}>
                        <Label className="me-2">
                          <Input
                            type="radio"
                            name="mortgage_charter_scheme"
                            className="me-1"
                            value={value}
                            checked={
                              formValues.mortgage_charter_scheme ===
                              (value === "yes")
                            }
                            onChange={(e) =>
                              handleInputChange(
                                "mortgage_charter_scheme",
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
                <Col md={6}>
                  <FormGroup>
                    <Label for="property_type">Property Type</Label>
                    <Input
                      id="property_type"
                      type="select"
                      value={formValues.property_type || ""}
                      onChange={(e) =>
                        handleInputChange("property_type", e.target.value)
                      }
                    >
                      <option value="">Select...</option>
                      <option value="HOUSE">House</option>
                      <option value="FLAT">Flat</option>
                      <option value="MAISONETTE">Maisonette</option>
                      <option value="BUNGALOW">Bungalow</option>
                      <option value="WAREHOUSE">Warehouse</option>
                      <option value="LAND">Land</option>
                      <option value="COMMERCIAL">Commercial</option>
                      <option value="SEMI_COMMERCIAL">Semi-Commercial</option>
                      <option value="MULTI_UNIT_BLOCK">
                        Multi-Unit Block (MUB)
                      </option>
                      <option value="HMO">HMO</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="bedrooms">Bedrooms</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      value={formValues.bedrooms || ""}
                      onChange={(e) =>
                        handleInputChange("bedrooms", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="tenure">Tenure</Label>
                    <Input
                      id="tenure"
                      type="select"
                      value={formValues.tenure || ""}
                      onChange={(e) =>
                        handleInputChange("tenure", e.target.value)
                      }
                    >
                      <option value="">Select...</option>
                      <option value="FREEHOLD">Freehold</option>
                      <option value="LEASEHOLD">Leasehold</option>
                      <option value="COMMONHOLD">Commonhold</option>
                      <option value="FEUDAL">Feudal</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="year_built">Year Built</Label>
                    <Input
                      id="mortgage_not_to_complete_until_erc_ended"
                      type="number"
                      value={formValues.year_built || ""}
                      onChange={(e) =>
                        handleInputChange("year_built", e.target.value)
                      }
                    />
                  </FormGroup>
                </Col>
              </>
            )}
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
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              color="primary"
              disabled={
                isLoading ||
                (session?.user?.user_type === "LEAD" &&
                  selectedApplicant?.updated_by !== null)
              }
            >
              {isUpdatingApplicant ? "Updating..." : "Update Applicant"}
            </Button>
          </div>
        </Form>
      </Row>

      {/* Company Applicant Modal */}
      <AddCompanyDetailsFormModal
        isOpen={isCompanyModalOpen}
        toggle={() => setIsCompanyModalOpen(false)}
        case_alias={casealias as string}
        applicantDetails_alias={formValues.alias as string}
      />

      {/* Dependants of Applicant Modal */}
      <AddDependantFormModal
        isOpen={isDependantsModalOpen}
        toggle={() => setIsDependantsModalOpen(false)}
        case_alias={casealias as string}
        applicantDetails_alias={formValues.alias as string}
      />
      {/* Modal Component */}
      <ApplicantDependantsViewModal
        isOpen={isDependantsViewModalOpen}
        toggle={toggleViewModal}
        applicantAlias={formValues.alias as string}
      />
    </Container>
  );
};

export default ApplicantsDetailsTabContent;
