import { EmploymentDetailsProps } from "@/Types/Organization/CaseDetails/EmploymentTypes";
import apiClient from "@/services/api-client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Button,
  CardBody,
  Col,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

interface EmploymentTabContentProps {
  activeTab: string | null;
  activeUser: number | null;
  groupedData: Record<number, EmploymentDetailsProps[]>;
}

export const EmploymentTabContent: React.FC<EmploymentTabContentProps> = ({
  activeTab,
  activeUser,
  groupedData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState<EmploymentDetailsProps | null>(
    null
  );
  // UseParams with type assertion
  const params = useParams();
  const { casealias } = params;

  // `useEffect` to reset `formValues` when `activeTab` or `activeUser` changes
  useEffect(() => {
    if (activeTab && activeUser !== null) {
      const userEmploymentRecords = groupedData[activeUser];
      const activeEmploymentRecord = userEmploymentRecords?.find(
        (employment) => employment.alias === activeTab
      );
      setFormValues(activeEmploymentRecord || null);
    }
  }, [activeTab, activeUser, groupedData]);

  if (!activeTab || activeUser === null) {
    return <div>No employment data available.</div>;
  }

  const userEmploymentRecords = groupedData[activeUser];
  const activeEmploymentRecord = userEmploymentRecords?.find(
    (employment) => employment.alias === activeTab
  );

  if (!activeEmploymentRecord) {
    return <div>No matching employment record found.</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues!,
      [id]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    if (formValues) {
      try {
        await apiClient.put(
          `/cases/${casealias}/employment/details/${formValues.alias}/`,
          formValues
        );
        setIsEditing(false);
      } catch (error) {
        console.error("Failed to update employment details:", error);
      }
    }
  };

  return (
    <CardBody className="px-0 pb-0">
      <h4>Employment Details</h4>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="employmentStatus">Employment Status</Label>
            <Input
              type="select"
              id="employmentStatus"
              value={formValues?.employment_status || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="EMPLOYED">Employed</option>
              <option value="SELF_EMPLOYED">Self Employed</option>
              <option value="RETIRED">Retired</option>
              <option value="OTHER">Other</option>
              <option value="UNEMPLOYED">Unemployed</option>
              <option value="HOUSEPERSON">Houseperson</option>
              <option value="CONTRACTOR">Contractor</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="occupation">Occupation*</Label>
            <Input
              type="text"
              id="occupation"
              value={formValues?.occupation || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="industry">Industry</Label>
            <Input
              type="text"
              id="industry"
              value={formValues?.industry || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerName">Employer Name*</Label>
            <Input
              type="text"
              id="employerName"
              value={formValues?.employer_name || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerTelephone">Employer's Telephone</Label>
            <Input
              type="text"
              id="employerTelephone"
              value={formValues?.employer_telephone || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerEmail">Employer's Email for Reference</Label>
            <Input
              type="email"
              id="employerEmail"
              value={formValues?.employer_email_for_reference || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerPostcode">Employer's Postcode</Label>
            <Input
              type="text"
              id="employerPostcode"
              value={formValues?.employer_postcode || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <FormText color="muted">Lookup</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="employerAddressLine1">Employer's Address Line 1</Label>
            <Input
              type="text"
              id="employerAddressLine1"
              value={formValues?.employer_address_line_1 || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerCity">Employer's City</Label>
            <Input
              type="text"
              id="employerCity"
              value={formValues?.employer_city || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerCountry">Employer's Country</Label>
            <Input
              type="text"
              id="employerCountry"
              value={formValues?.employer_country || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employmentCommenced">Employment Commenced*</Label>
            <Input
              type="date"
              id="employmentCommenced"
              value={formValues?.employment_commenced || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="grossAnnualIncome">Gross Annual Income*</Label>
            <Input
              type="number"
              id="grossAnnualIncome"
              value={formValues?.gross_annual_income || 0}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="probationaryPeriod"
                checked={formValues?.is_probationary_period || false}
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues!,
                    is_probationary_period: e.target.checked,
                  }))
                }
                disabled={!isEditing}
              />{" "}
              Are you on a probationary period?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="foreignCurrency"
                checked={formValues?.is_income_in_foreign_currency || false}
                onChange={(e) =>
                  setFormValues((prevValues) => ({
                    ...prevValues!,
                    is_income_in_foreign_currency: e.target.checked,
                  }))
                }
                disabled={!isEditing}
              />{" "}
              Is any income paid in a foreign currency?
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="bonus">Bonus*</Label>
            <Input
              type="number"
              id="bonus"
              value={formValues?.bonus || 0}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="overtime">Overtime*</Label>
            <Input
              type="number"
              id="overtime"
              value={formValues?.overtime || 0}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="allowance">Allowance*</Label>
            <Input
              type="number"
              id="allowance"
              value={formValues?.allowance || 0}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="employmentType">Employment Type</Label>
            <Input
              type="select"
              id="employmentType"
              value={formValues?.employment_type || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
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
              value={formValues?.employer_house_name_or_number || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerAddressLine2">Employer's Address Line 1</Label>
            <Input
              type="text"
              id="employerAddressLine2"
              value={formValues?.employer_address_line_1 || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerCounty">Employer's County</Label>
            <Input
              type="text"
              id="employerCounty"
              value={formValues?.employer_county || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employmentEnded">Employment Ended</Label>
            <Input
              type="date"
              id="employmentEnded"
              value={formValues?.employment_ended || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="netAnnualIncome">Net Annual Income</Label>
            <Input
              type="number"
              id="netAnnualIncome"
              value={formValues?.net_annual_income || 0}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bonusFrequency">Bonus Frequency</Label>
            <Input
              type="select"
              id="bonusFrequency"
              value={formValues?.bonus_frequency || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
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
              value={formValues?.overtime_frequency || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
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
              value={formValues?.allowance_frequency || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
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
      <Button
        color="primary"
        onClick={isEditing ? handleSaveClick : handleEditClick}
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
    </CardBody>
  );
};
