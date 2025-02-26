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
  FormText,
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

  const [formValues, setFormValues] = useState({
    employment_status: "",
    occupation: "",
    industry: "",
    employer_name: "",
    employer_telephone: "",
    employer_email_for_reference: "",
    employer_postcode: "",
    employer_address_line_1: "",
    employer_city: "",
    employer_country: "",
    employment_commenced: null as string | null,
    gross_annual_income: 0,
    is_probationary_period: false,
    is_income_in_foreign_currency: false,
    bonus: 0,
    overtime: 0,
    allowance: 0,
    employment_type: "",
    employer_house_name_or_number: "",
    employer_county: "",
    employment_ended: null as string | null,
    net_annual_income: 0,
    bonus_frequency: "",
    overtime_frequency: "",
    allowance_frequency: "",
  });

  const handleInputChange = (
    name: string,
    value: string | number | boolean | string[] | null
  ) => {
    if (name === "employment_commenced" || name === "employment_ended") {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value === "" ? null : value,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
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

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="xl">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add Employment Details</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className=" p-5">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="employmentStatus">Employment Status</Label>
              <Input
                type="select"
                id="employmentStatus"
                value={formValues?.employment_status || ""}
                onChange={(e) =>
                  handleInputChange("employment_status", e.target.value)
                }
                className={
                  formValues?.employment_status === "EMPLOYED"
                    ? "text-info"
                    : formValues?.employment_status === "SELF_EMPLOYED"
                    ? "text-warning"
                    : formValues?.employment_status === "RETIRED"
                    ? "text-primary"
                    : formValues?.employment_status === "OTHER"
                    ? "text-secondary"
                    : formValues?.employment_status === "UNEMPLOYED"
                    ? "text-dark"
                    : formValues?.employment_status === "HOUSEPERSON"
                    ? "text-secondary"
                    : formValues?.employment_status === "CONTRACTOR"
                    ? "text-danger"
                    : "text-secondary" // Default fallback
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
                <option className="text-dark" value="UNEMPLOYED">
                  Unemployed
                </option>
                <option className="text-secondary" value="HOUSEPERSON">
                  Houseperson
                </option>
                <option className="text-danger" value="CONTRACTOR">
                  Contractor
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="occupation">Occupation*</Label>
              <Input
                type="text"
                id="occupation"
                value={formValues.occupation}
                onChange={(e) =>
                  handleInputChange("occupation", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="industry">Industry</Label>
              <Input
                type="text"
                id="industry"
                value={formValues.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerName">Employer Name*</Label>
              <Input
                type="text"
                id="employerName"
                value={formValues.employer_name}
                onChange={(e) =>
                  handleInputChange("employer_name", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerTelephone">Employer's Telephone</Label>
              <Input
                type="text"
                id="employerTelephone"
                value={formValues.employer_telephone}
                onChange={(e) =>
                  handleInputChange("employer_telephone", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerEmail">Employer's Email for Reference</Label>
              <Input
                type="email"
                id="employerEmail"
                value={formValues.employer_email_for_reference}
                onChange={(e) =>
                  handleInputChange(
                    "employer_email_for_reference",
                    e.target.value
                  )
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerPostcode">Employer's Postcode</Label>
              <Input
                type="text"
                id="employerPostcode"
                value={formValues.employer_postcode}
                onChange={(e) =>
                  handleInputChange("employer_postcode", e.target.value)
                }
              />
              <FormText color="muted">Lookup</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="employerAddressLine1">
                Employer's Address Line 1
              </Label>
              <Input
                type="text"
                id="employerAddressLine1"
                value={formValues.employer_address_line_1}
                onChange={(e) =>
                  handleInputChange("employer_address_line_1", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerCity">Employer's City</Label>
              <Input
                type="text"
                id="employerCity"
                value={formValues.employer_city}
                onChange={(e) =>
                  handleInputChange("employer_city", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerCountry">Employer's Country</Label>
              <Input
                type="text"
                id="employerCountry"
                value={formValues.employer_country}
                onChange={(e) =>
                  handleInputChange("employer_country", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employmentCommenced">Employment Commenced*</Label>
              <Input
                type="date"
                id="employmentCommenced"
                value={formValues.employment_commenced || ""}
                onChange={(e) =>
                  handleInputChange("employment_commenced", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="grossAnnualIncome">Gross Annual Income*</Label>
              <Input
                type="number"
                id="grossAnnualIncome"
                value={formValues.gross_annual_income}
                onChange={(e) =>
                  handleInputChange("gross_annual_income", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="probationaryPeriod"
                  checked={formValues.is_probationary_period}
                  onChange={(e) =>
                    handleInputChange(
                      "is_probationary_period",
                      e.target.checked
                    )
                  }
                />{" "}
                Are you on a probationary period?
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="foreignCurrency"
                  checked={formValues.is_income_in_foreign_currency}
                  onChange={(e) =>
                    handleInputChange(
                      "is_income_in_foreign_currency",
                      e.target.checked
                    )
                  }
                />{" "}
                Is any income paid in a foreign currency?
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="bonus">Bonus*</Label>
              <Input
                type="number"
                id="bonus"
                value={formValues.bonus}
                onChange={(e) => handleInputChange("bonus", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="overtime">Overtime*</Label>
              <Input
                type="number"
                id="overtime"
                value={formValues.overtime}
                onChange={(e) => handleInputChange("overtime", e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="allowance">Allowance*</Label>
              <Input
                type="number"
                id="allowance"
                value={formValues.allowance}
                onChange={(e) => handleInputChange("allowance", e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="employmentType">Employment Type</Label>
              <Input
                type="select"
                id="employmentType"
                value={formValues.employment_type}
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
            <FormGroup>
              <Label for="employerHouseNumber">
                Employer's House Name or Number
              </Label>
              <Input
                type="text"
                id="employerHouseNumber"
                value={formValues.employer_house_name_or_number}
                onChange={(e) =>
                  handleInputChange(
                    "employer_house_name_or_number",
                    e.target.value
                  )
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerAddressLine2">
                Employer's Address Line 2
              </Label>
              <Input
                type="text"
                id="employerAddressLine2"
                value={formValues.employer_address_line_1}
                onChange={(e) =>
                  handleInputChange("employer_address_line_1", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employerCounty">Employer's County</Label>
              <Input
                type="text"
                id="employerCounty"
                value={formValues.employer_county}
                onChange={(e) =>
                  handleInputChange("employer_county", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="employmentEnded">Employment Ended</Label>
              <Input
                type="date"
                id="employmentEnded"
                value={formValues.employment_ended || ""}
                onChange={(e) =>
                  handleInputChange("employment_ended", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="netAnnualIncome">Net Annual Income</Label>
              <Input
                type="number"
                id="netAnnualIncome"
                value={formValues.net_annual_income}
                onChange={(e) =>
                  handleInputChange("net_annual_income", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="bonusFrequency">Bonus Frequency</Label>
              <Input
                type="select"
                id="bonusFrequency"
                value={formValues.bonus_frequency}
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
            <FormGroup>
              <Label for="overtimeFrequency">Overtime Frequency</Label>
              <Input
                type="select"
                id="overtimeFrequency"
                value={formValues.overtime_frequency}
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
            <FormGroup>
              <Label for="allowanceFrequency">Allowance Frequency</Label>
              <Input
                type="select"
                id="allowanceFrequency"
                value={formValues.allowance_frequency}
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
      </ModalBody>

      {/* Modal Footer */}
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddEmploymentDetailsModal;
