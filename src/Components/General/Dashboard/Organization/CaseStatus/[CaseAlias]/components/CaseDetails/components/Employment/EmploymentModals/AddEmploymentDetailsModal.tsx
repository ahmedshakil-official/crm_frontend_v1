import { useParams } from "next/navigation";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
import { EmploymentDetailsProps } from "@/Types/Organization/CaseDetails/EmploymentTypes";
import { useAddEmploymentDetailsMutation } from "@/Redux/Reducers/CaseDetails/EmploymentDetails/EmploymentDetailsApi";
import { toast } from "react-toastify";

interface AddEmploymentDetailsModalProps {
  isOpen: boolean;
  toggle: () => void;
  employmentData: EmploymentDetailsProps | null;
}

const AddEmploymentDetailsModal: React.FC<AddEmploymentDetailsModalProps> = ({
  isOpen,
  toggle,
  employmentData,
}) => {
  const params = useParams();
  const { casealias } = params;

  const [addEmploymentDetails, { isLoading }] =
    useAddEmploymentDetailsMutation();

  const [formValues, setFormValues] = useState<EmploymentDetailsProps | null>(
    null
  );

  const handleInputChange = (
    name: string,
    value: string | number | boolean | string[] | null
  ) => {
    if (name === "employment_commenced" || name === "employment_ended") {
      setFormValues((prevValues) => ({
        ...prevValues!,
        [name]: value === "" ? null : value,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues!,
        [name]: value,
      }));
    }
  };


  const handleSubmit = async () => {
    const res = await addEmploymentDetails({
      case_alias: casealias,
      employer_id: employmentData?.user?.id,
      employmentDetails: formValues,
    });
    toggle(); // Close the modal
    toast.success("Employment details added successfully!");
  };

  // Helper function to determine the color based on employment status
  const getStatusColor = (status: any) => {
    switch (status) {
      case "EMPLOYED":
        return "info";
      case "SELF_EMPLOYED":
        return "warning";
      case "RETIRED":
        return "primary";
      case "OTHER":
        return "secondary";
      case "CONTRACTOR":
        return "dark";
      default:
        return "info";
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="xl">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add Employment Details</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className=" p-5">
        <Row>
          <FormGroup>
            <Label for="employmentStatus" className="fs-5">
              Employment Status
            </Label>
            <Input
              type="select"
              id="employmentStatus"
              value={formValues?.employment_status || ""}
              onChange={(e) =>
                handleInputChange("employment_status", e.target.value)
              }
              className={
                formValues?.employment_status === "EMPLOYED"
                  ? "text-info border-info"
                  : formValues?.employment_status === "SELF_EMPLOYED"
                  ? "text-warning border-warning"
                  : formValues?.employment_status === "RETIRED"
                  ? "text-primary border-primary"
                  : formValues?.employment_status === "OTHER"
                  ? "text-secondary border-secondary"
                  : formValues?.employment_status === "UNEMPLOYED"
                  ? "text-danger border-danger"
                  : formValues?.employment_status === "HOUSEPERSON"
                  ? "text-secondary border-secondary"
                  : formValues?.employment_status === "CONTRACTOR"
                  ? "text-dark border-dark"
                  : "text-dark border-dark" // Default fallback
              }
            >
              <option value="">Select...</option>
              <option className="text-info" value="EMPLOYED">
                Employed
              </option>
              <option className="text-warning" value="SELF_EMPLOYED">
                Self Employed
              </option>
              <option className="text-primary" value="RETIRED">
                Retired
              </option>
              <option className="text-secondary" value="OTHER">
                Other
              </option>
              <option className="text-danger" value="UNEMPLOYED">
                Unemployed
              </option>
              <option className="text-secondary" value="HOUSEPERSON">
                Houseperson
              </option>
              <option className="text-dark" value="CONTRACTOR">
                Contractor
              </option>
            </Input>
          </FormGroup>
        </Row>
        <Row>
          {formValues?.employment_status === "EMPLOYED" && (
            <Col md={6}>
              <FormGroup>
                <Label for="employmentType" className="text-info">
                  Employment Type
                </Label>
                <Input
                  type="select"
                  id="employmentType"
                  className="border-info"
                  value={formValues?.employment_type || ""}
                  onChange={(e) =>
                    handleInputChange("employment_type", e.target.value)
                  }
                >
                  <option value="">Select...</option>
                  <option value="PERMANENT">Permanent</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="TEMPORARY">Temporary</option>
                </Input>
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "SELF_EMPLOYED" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="occupation"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Occupation*
                </Label>
                <Input
                  type="text"
                  id="occupation"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.occupation || ""}
                  onChange={(e) =>
                    handleInputChange("occupation", e.target.value)
                  }
                  required
                />
               
              </FormGroup>
            </Col>
          )}
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "SELF_EMPLOYED") && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="industry"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Industry
                </Label>
                <Input
                  type="text"
                  id="industry"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.industry || ""}
                  onChange={(e) =>
                    handleInputChange("industry", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="employerName"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Employer Name*
                </Label>
                <Input
                  type="text"
                  id="employerName"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.employer_name || ""}
                  onChange={(e) =>
                    handleInputChange("employer_name", e.target.value)
                  }
                  required
                />
               
              </FormGroup>
            </Col>
          )}
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="employerTelephone"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Employer's Telephone
                </Label>
                <Input
                  type="text"
                  id="employerTelephone"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.employer_telephone || ""}
                  onChange={(e) =>
                    handleInputChange("employer_telephone", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "EMPLOYED" && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="employers_name_for_reference"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Employer's Name for Reference
                </Label>
                <Input
                  type="text"
                  id="employers_name_for_reference"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.employers_name_for_reference || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "employers_name_for_reference",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </Col>
          )}
          {formValues?.employment_status === "EMPLOYED" && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="employerEmail"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Employer's Email for Reference
                </Label>
                <Input
                  type="email"
                  id="employerEmail"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.employer_email_for_reference || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "employer_email_for_reference",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="employerPostcode"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's Postcode
                  </Label>
                  <Input
                    type="text"
                    id="employerPostcode"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_postcode || ""}
                    onChange={(e) =>
                      handleInputChange("employer_postcode", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="employerHouseNumber"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's House Name or Number
                  </Label>
                  <Input
                    type="text"
                    id="employerHouseNumber"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_house_name_or_number || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "employer_house_name_or_number",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="employerAddressLine1"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's Address Line 1
                  </Label>
                  <Input
                    type="text"
                    id="employerAddressLine1"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_address_line_1 || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "employer_address_line_1",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="employerAddressLine2"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's Address Line 2
                  </Label>
                  <Input
                    type="text"
                    id="employerAddressLine2"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_address_line_2 || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "employer_address_line_2",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <>
              <Col md={4}>
                <FormGroup>
                  <Label
                    for="employerCity"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's City
                  </Label>
                  <Input
                    type="text"
                    id="employerCity"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_city || ""}
                    onChange={(e) =>
                      handleInputChange("employer_city", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label
                    for="employerCounty"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's County
                  </Label>
                  <Input
                    type="text"
                    id="employerCounty"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_county || ""}
                    onChange={(e) =>
                      handleInputChange("employer_county", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label
                    for="employerCountry"
                    className={`text-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                  >
                    Employer's Country
                  </Label>
                  <Input
                    type="text"
                    id="employerCountry"
                    className={`border-${getStatusColor(
                      formValues?.employment_status
                    )}`}
                    value={formValues?.employer_country || ""}
                    onChange={(e) =>
                      handleInputChange("employer_country", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "EMPLOYED" && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label for="employmentCommenced" className="text-info">
                    Employment Commenced*
                  </Label>
                  <Input
                    type="date"
                    id="employmentCommenced"
                    className="border-info"
                    value={formValues?.employment_commenced || ""}
                    onChange={(e) =>
                      handleInputChange("employment_commenced", e.target.value)
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="employmentEnded" className="text-info">
                    Employment Ended
                  </Label>
                  <Input
                    type="date"
                    id="employmentEnded"
                    className="border-info"
                    value={formValues?.employment_ended || ""}
                    onChange={(e) =>
                      handleInputChange("employment_ended", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        {formValues?.employment_status === "EMPLOYED" && (
          <Row>
            <p>Please enter previous employment details where applicable.</p>
          </Row>
        )}
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "RETIRED") && (
            <Col md={6}>
              <FormGroup>
                <Label
                  for="grossAnnualIncome"
                  className={`text-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                >
                  Gross Annual Income*
                </Label>
                <Input
                  type="number"
                  id="grossAnnualIncome"
                  className={`border-${getStatusColor(
                    formValues?.employment_status
                  )}`}
                  value={formValues?.gross_annual_income || 0}
                  onChange={(e) =>
                    handleInputChange("gross_annual_income", e.target.value)
                  }
                  required
                />
               
              </FormGroup>
            </Col>
          )}
          {formValues?.employment_status === "EMPLOYED" && (
            <Col md={6}>
              <FormGroup>
                <Label for="netAnnualIncome" className="text-info">
                  Net Annual Income
                </Label>
                <Input
                  type="number"
                  id="netAnnualIncome"
                  className="border-info"
                  value={formValues?.net_annual_income || 0}
                  onChange={(e) =>
                    handleInputChange("net_annual_income", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          )}
          {formValues?.employment_status === "RETIRED" && (
            <Col md={6}>
              <FormGroup>
                <Label for="income_source" className="text-primary">
                  Income Source
                </Label>
                <Input
                  type="text"
                  id="income_source"
                  className="border-primary"
                  value={formValues?.income_source || ""}
                  onChange={(e) =>
                    handleInputChange("income_source", e.target.value)
                  }
                />
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "EMPLOYED" && (
            <Col md={6}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="probationaryPeriod"
                    className={
                      formValues.is_probationary_period
                        ? "bg-info border-info"
                        : "border-info"
                    }
                    checked={formValues?.is_probationary_period || false}
                    onChange={(e) =>
                      setFormValues((prevValues) => ({
                        ...prevValues!,
                        is_probationary_period: e.target.checked,
                      }))
                    }
                  />
                  Are you on a probationary period?
                </Label>
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {(formValues?.employment_status === "EMPLOYED" ||
            formValues?.employment_status === "SELF_EMPLOYED" ||
            formValues?.employment_status === "RETIRED" ||
            formValues?.employment_status === "OTHER" ||
            formValues?.employment_status === "CONTRACTOR") && (
            <>
              <Col md={6}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="foreignCurrency"
                      className={
                        formValues?.is_income_in_foreign_currency
                          ? `bg-${getStatusColor(
                              formValues?.employment_status
                            )} border-${getStatusColor(
                              formValues?.employment_status
                            )}`
                          : `border-${getStatusColor(
                              formValues?.employment_status
                            )}`
                      }
                      checked={
                        formValues?.is_income_in_foreign_currency || false
                      }
                      onChange={(e) =>
                        setFormValues((prevValues) => ({
                          ...prevValues!,
                          is_income_in_foreign_currency: e.target.checked,
                        }))
                      }
                    />
                    Is any income paid in a foreign currency?
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                {formValues?.is_income_in_foreign_currency && (
                  <FormGroup>
                    <Label
                      for="further_details"
                      className={`text-${getStatusColor(
                        formValues?.employment_status
                      )}`}
                    >
                      Further Details*
                    </Label>
                    <Input
                      type="textarea"
                      id="further_details"
                      className={`border-${getStatusColor(
                        formValues?.employment_status
                      )}`}
                      value={formValues?.further_details || ""}
                      onChange={(e) =>
                        handleInputChange("further_details", e.target.value)
                      }
                      required
                    />
                    
                  </FormGroup>
                )}
              </Col>
            </>
          )}
        </Row>
        {formValues?.employment_status === "EMPLOYED" && (
          <>
            <Row className="d-flex justify-content-between">
              <Col md={4}>
                <FormGroup>
                  <Label for="bonus" className="text-info">
                    Bonus*
                  </Label>
                  <Input
                    type="number"
                    id="bonus"
                    className="border-info"
                    value={formValues?.bonus || 0}
                    onChange={(e) => handleInputChange("bonus", e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup
                  check
                  className="d-flex justify-content-center align-content-center"
                >
                  <Label check className="text-info">
                    <Input
                      type="checkbox"
                      name="is_bonus_guaranteed"
                      className={
                        formValues?.is_bonus_guaranteed
                          ? "bg-info border-info"
                          : "border-info"
                      }
                      checked={formValues?.is_bonus_guaranteed || false}
                      onChange={(e) =>
                        setFormValues((prevValues) => ({
                          ...prevValues!,
                          is_bonus_guaranteed: e.target.checked,
                        }))
                      }
                    />
                    Bonus Guaranteed?
                  </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="bonusFrequency" className="text-info">
                    Bonus Frequency
                  </Label>
                  <Input
                    type="select"
                    id="bonusFrequency"
                    value={formValues?.bonus_frequency || ""}
                    onChange={(e) =>
                      handleInputChange("bonus_frequency", e.target.value)
                    }
                  >
                    <option value="">Select...</option>
                    <option value="DAILY">Daily</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="BI_WEEKLY">Bi Weekly</option>
                    <option value="MONTHLY">Monthly</option>
                    <option value="BI_MONTHLY">Bi Monthly</option>
                    <option value="QUARTERLY">Quarterly</option>
                    <option value="BI_ANNUALLY">Bi Annually</option>
                    <option value="ANNUALLY">Annually</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col md={4}>
                <FormGroup>
                  <Label for="overtime" className="text-info">
                    Overtime*
                  </Label>
                  <Input
                    type="number"
                    id="overtime"
                    className="border-info"
                    value={formValues?.overtime || 0}
                    onChange={(e) =>
                      handleInputChange("overtime", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup
                  check
                  className="d-flex justify-content-center align-content-center"
                >
                  <Label check className="text-info">
                    <Input
                      type="checkbox"
                      name="is_overtime_guaranteed"
                      className={
                        formValues?.is_overtime_guaranteed
                          ? "bg-info border-info"
                          : "border-info"
                      }
                      checked={formValues?.is_overtime_guaranteed || false}
                      onChange={(e) =>
                        setFormValues((prevValues) => ({
                          ...prevValues!,
                          is_overtime_guaranteed: e.target.checked,
                        }))
                      }
                    />
                    Overtime Guaranteed?
                  </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="overtimeFrequency" className="text-info">
                    Overtime Frequency
                  </Label>
                  <Input
                    type="select"
                    id="overtimeFrequency"
                    className="border-info"
                    value={formValues?.overtime_frequency || ""}
                    onChange={(e) =>
                      handleInputChange("overtime_frequency", e.target.value)
                    }
                  >
                    <option value="">Select...</option>
                    <option value="DAILY">Daily</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="BI_WEEKLY">Bi Weekly</option>
                    <option value="MONTHLY">Monthly</option>
                    <option value="BI_MONTHLY">Bi Monthly</option>
                    <option value="QUARTERLY">Quarterly</option>
                    <option value="BI_ANNUALLY">Bi Annually</option>
                    <option value="ANNUALLY">Annually</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col md={4}>
                <FormGroup>
                  <Label for="allowance" className="text-info">
                    Allowance*
                  </Label>
                  <Input
                    type="number"
                    id="allowance"
                    className="border-info"
                    value={formValues?.allowance || 0}
                    onChange={(e) =>
                      handleInputChange("allowance", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup
                  check
                  className="d-flex justify-content-center align-content-center"
                >
                  <Label check className="text-info">
                    <Input
                      type="checkbox"
                      name="is_allowance_guaranteed"
                      className={
                        formValues?.is_allowance_guaranteed
                          ? "bg-info border-info"
                          : "border-info"
                      }
                      checked={formValues?.is_allowance_guaranteed || false}
                      onChange={(e) =>
                        setFormValues((prevValues) => ({
                          ...prevValues!,
                          is_allowance_guaranteed: e.target.checked,
                        }))
                      }
                    />
                    Allowance Guaranteed?
                  </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="allowanceFrequency" className="text-info">
                    Allowance Frequency
                  </Label>
                  <Input
                    type="select"
                    id="allowanceFrequency"
                    className="border-info"
                    value={formValues?.allowance_frequency || ""}
                    onChange={(e) =>
                      handleInputChange("allowance_frequency", e.target.value)
                    }
                  >
                    <option value="">Select...</option>
                    <option value="DAILY">Daily</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="BI_WEEKLY">Bi Weekly</option>
                    <option value="MONTHLY">Monthly</option>
                    <option value="BI_MONTHLY">Bi Monthly</option>
                    <option value="QUARTERLY">Quarterly</option>
                    <option value="BI_ANNUALLY">Bi Annually</option>
                    <option value="ANNUALLY">Annually</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </>
        )}
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={6}>
                <Label for="employmentTime" className="text-warning">
                  Employment Time
                </Label>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="number"
                        id="employment_time_year"
                        className="border-warning"
                        placeholder="Years"
                        value={formValues?.employment_time_year || 0}
                        onChange={(e) =>
                          handleInputChange(
                            "employment_time_year",
                            e.target.value
                          )
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="number"
                        id="employment_time_month"
                        className="border-warning"
                        placeholder="Months"
                        value={formValues?.employment_time_month || 0}
                        onChange={(e) =>
                          handleInputChange(
                            "employment_time_month",
                            e.target.value
                          )
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="business_telephone" className="text-warning">
                    Business Telephone
                  </Label>
                  <Input
                    type="text"
                    id="business_telephone"
                    className="border-warning"
                    value={formValues?.business_telephone || ""}
                    onChange={(e) =>
                      handleInputChange("business_telephone", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label for="business_address_line_1" className="text-warning">
                    Business Address Line 1
                  </Label>
                  <Input
                    type="text"
                    id="business_address_line_1"
                    className="border-warning"
                    value={formValues?.business_address_line_1 || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "business_address_line_1",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="business_address_line_2" className="text-warning">
                    Business Address Line 2
                  </Label>
                  <Input
                    type="text"
                    id="business_address_line_2"
                    className="border-warning"
                    value={formValues?.business_address_line_2 || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "business_address_line_2",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={4}>
                <FormGroup>
                  <Label for="business_city" className="text-warning">
                    Business City
                  </Label>
                  <Input
                    type="text"
                    id="business_city"
                    className="border-warning"
                    value={formValues?.business_city || ""}
                    onChange={(e) =>
                      handleInputChange("business_city", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="business_county" className="text-warning">
                    Business County
                  </Label>
                  <Input
                    type="text"
                    id="business_county"
                    className="border-warning"
                    value={formValues?.business_county || ""}
                    onChange={(e) =>
                      handleInputChange("business_county", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="business_country" className="text-warning">
                    Business Country
                  </Label>
                  <Input
                    type="text"
                    id="business_country"
                    className="border-warning"
                    value={formValues?.business_country || ""}
                    onChange={(e) =>
                      handleInputChange("business_country", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>

        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label for="job_title" className="text-warning">
                    Job Title
                  </Label>
                  <Input
                    type="text"
                    id="job_title"
                    className="border-warning"
                    value={formValues?.job_title || ""}
                    onChange={(e) =>
                      handleInputChange("job_title", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="business_name" className="text-warning">
                    Business Name
                  </Label>
                  <Input
                    type="text"
                    id="business_name"
                    className="border-warning"
                    value={formValues?.business_name || ""}
                    onChange={(e) =>
                      handleInputChange("business_name", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label for="company_type" className="text-warning">
                    Company Type
                  </Label>
                  <Input
                    type="select"
                    id="company_type"
                    className="border-warning"
                    value={formValues?.company_type || ""}
                    onChange={(e) =>
                      handleInputChange("company_type", e.target.value)
                    }
                  >
                    <option value="">Select...</option>
                    <option value="SOLE_TRADER">Sole Trader</option>
                    <option value="LIMITED_COMPANY">Limited Company</option>
                    <option value="PARTNERSHIP">Partnership</option>
                    <option value="LLP">LLP</option>
                    <option value="INDIVIDUAL">Individual</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="percentage_of_business_owned"
                    className="text-warning"
                  >
                    Percentage Of Business Owned(%)
                  </Label>
                  <Input
                    type="text"
                    id="percentage_of_business_owned"
                    className="border-warning"
                    value={formValues?.percentage_of_business_owned || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "percentage_of_business_owned",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <Col md={6}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="is_accounts_available"
                    className={
                      formValues?.is_accounts_available
                        ? "bg-warning border-warning"
                        : "border-warning"
                    }
                    checked={formValues?.is_accounts_available || false}
                    onChange={(e) =>
                      setFormValues((prevValues) => ({
                        ...prevValues!,
                        is_accounts_available: e.target.checked,
                      }))
                    }
                  />
                  Accounts Available?
                </Label>
              </FormGroup>
            </Col>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={6}>
                <FormGroup>
                  <Label for="accountant_name" className="text-warning">
                    Accountant Name
                  </Label>
                  <Input
                    type="text"
                    id="accountant_name"
                    className="border-warning"
                    value={formValues?.accountant_name || ""}
                    onChange={(e) =>
                      handleInputChange("accountant_name", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="accountant_qualifications"
                    className="text-warning"
                  >
                    Accountant Qualifications
                  </Label>
                  <Input
                    type="text"
                    id="accountant_qualifications"
                    className="border-warning"
                    value={formValues?.accountant_qualifications || ""}
                    onChange={(e) =>
                      handleInputChange(
                        "accountant_qualifications",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        <Row>
          {formValues?.employment_status === "SELF_EMPLOYED" && (
            <>
              <Col md={4}>
                <FormGroup>
                  <Label for="salary" className="text-warning">
                    Salary*
                  </Label>
                  <Input
                    type="number"
                    id="salary"
                    className="border-warning"
                    value={formValues?.salary || 0}
                    onChange={(e) =>
                      handleInputChange("salary", e.target.value)
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="dividends" className="text-warning">
                    Dividends*
                  </Label>
                  <Input
                    type="number"
                    id="dividends"
                    className="border-warning"
                    value={formValues?.dividends || 0}
                    onChange={(e) =>
                      handleInputChange("dividends", e.target.value)
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="turnover" className="text-warning">
                    turnover
                  </Label>
                  <Input
                    type="number"
                    id="turnover"
                    className="border-warning"
                    value={formValues?.turnover || 0}
                    onChange={(e) =>
                      handleInputChange("turnover", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </>
          )}
        </Row>
        {formValues?.employment_status === "OTHER" && (
          <>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="other_income" className="text-secondary">
                    Other Income
                  </Label>
                  <Input
                    type="text"
                    id="other_income"
                    className="border-secondary"
                    value={formValues?.other_income || ""}
                    onChange={(e) =>
                      handleInputChange("other_income", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="other_income_source" className="text-secondary">
                    Other Income
                  </Label>
                  <Input
                    type="text"
                    id="other_income_source"
                    className="border-secondary"
                    value={formValues?.other_income_source || ""}
                    onChange={(e) =>
                      handleInputChange("other_income_source", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label
                    for="other_income_start_date"
                    className="text-secondary"
                  >
                    Other income start date
                  </Label>
                  <Input
                    type="date"
                    id="other_income_start_date"
                    className="border-secondary"
                    value={formValues?.other_income_start_date || 0}
                    onChange={(e) =>
                      handleInputChange(
                        "other_income_start_date",
                        e.target.value
                      )
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
          </>
        )}
        {formValues?.employment_status === "CONTRACTOR" && (
          <>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="contractor_industry" className="text-dark">
                    Contractor Industry
                  </Label>
                  <Input
                    type="text"
                    id="contractor_industry"
                    className="border-dark"
                    value={formValues?.contractor_industry || ""}
                    onChange={(e) =>
                      handleInputChange("contractor_industry", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="current_contract_start" className="text-dark">
                    Current Contract Start*
                  </Label>
                  <Input
                    type="date"
                    id="current_contract_start"
                    className="border-dark"
                    value={formValues?.current_contract_start || 0}
                    onChange={(e) =>
                      handleInputChange(
                        "current_contract_start",
                        e.target.value
                      )
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="current_contract_end" className="text-dark">
                    Current Contract End*
                  </Label>
                  <Input
                    type="date"
                    id="current_contract_end"
                    className="border-dark"
                    value={formValues?.current_contract_end || 0}
                    onChange={(e) =>
                      handleInputChange("current_contract_end", e.target.value)
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="time_contracting" className="text-dark">
                    Time contracting*
                  </Label>
                  <Input
                    type="text"
                    id="time_contracting"
                    className="border-dark"
                    value={formValues?.time_contracting || ""}
                    onChange={(e) =>
                      handleInputChange("time_contracting", e.target.value)
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="day_rate" className="text-dark">
                    Day Rate*
                  </Label>
                  <Input
                    type="number"
                    id="day_rate"
                    className="border-dark"
                    value={formValues?.day_rate || 0}
                    onChange={(e) =>
                      handleInputChange("day_rate", e.target.value)
                    }
                    required
                  />
                  
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="hourly_rate" className="text-dark">
                    Hourly Rate
                  </Label>
                  <Input
                    type="number"
                    id="hourly_rate"
                    className="border-dark"
                    value={formValues?.hourly_rate || 0}
                    onChange={(e) =>
                      handleInputChange("hourly_rate", e.target.value)
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
          </>
        )}
      </ModalBody>

      {/* Modal Footer */}
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleSubmit}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddEmploymentDetailsModal;
