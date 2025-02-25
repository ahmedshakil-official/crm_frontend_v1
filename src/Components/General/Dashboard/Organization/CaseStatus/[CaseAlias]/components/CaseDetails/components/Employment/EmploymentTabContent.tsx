import { EmploymentDetailsProps } from "@/Types/Organization/CaseDetails/EmploymentTypes";
import React from "react";
import {
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
  casealias: string;
}

export const EmploymentTabContent: React.FC<EmploymentTabContentProps> = ({
  activeTab,
  activeUser,
  groupedData,
  casealias,
}) => {
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
              value={activeEmploymentRecord.employment_status}
              disabled
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
              value={activeEmploymentRecord.occupation || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="industry">Industry</Label>
            <Input
              type="text"
              id="industry"
              value={activeEmploymentRecord.industry || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerName">Employer Name*</Label>
            <Input
              type="text"
              id="employerName"
              value={activeEmploymentRecord.employer_name || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerTelephone">Employer's Telephone</Label>
            <Input
              type="text"
              id="employerTelephone"
              value={activeEmploymentRecord.employer_telephone || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerEmail">Employer's Email for Reference</Label>
            <Input
              type="email"
              id="employerEmail"
              value={activeEmploymentRecord.employer_email_for_reference || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerPostcode">Employer's Postcode</Label>
            <Input
              type="text"
              id="employerPostcode"
              value={activeEmploymentRecord.employer_postcode || ""}
              disabled
            />
            <FormText color="muted">Lookup</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="employerAddressLine1">Employer's Address Line 1</Label>
            <Input
              type="text"
              id="employerAddressLine1"
              value={activeEmploymentRecord.employer_address_line_1 || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerCity">Employer's City</Label>
            <Input
              type="text"
              id="employerCity"
              value={activeEmploymentRecord.employer_city || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerCountry">Employer's Country</Label>
            <Input
              type="text"
              id="employerCountry"
              value={activeEmploymentRecord.employer_country || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employmentCommenced">Employment Commenced*</Label>
            <Input
              type="date"
              id="employmentCommenced"
              value={activeEmploymentRecord.employment_commenced || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="grossAnnualIncome">Gross Annual Income*</Label>
            <Input
              type="number"
              id="grossAnnualIncome"
              value={activeEmploymentRecord.gross_annual_income || 0}
              disabled
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="probationaryPeriod"
                checked={activeEmploymentRecord.is_probationary_period}
                disabled
              />{" "}
              Are you on a probationary period?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="foreignCurrency"
                checked={activeEmploymentRecord.is_income_in_foreign_currency}
                disabled
              />{" "}
              Is any income paid in a foreign currency?
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="bonus">Bonus*</Label>
            <Input
              type="number"
              id="bonus"
              value={activeEmploymentRecord.bonus || 0}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="overtime">Overtime*</Label>
            <Input
              type="number"
              id="overtime"
              value={activeEmploymentRecord.overtime || 0}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="allowance">Allowance*</Label>
            <Input
              type="number"
              id="allowance"
              value={activeEmploymentRecord.allowance || 0}
              disabled
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="employmentType">Employment Type</Label>
            <Input
              type="select"
              id="employmentType"
              value={activeEmploymentRecord.employment_type || ""}
              disabled
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
              value={activeEmploymentRecord.employer_house_name_or_number || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerAddressLine2">Employer's Address Line 1</Label>
            <Input
              type="text"
              id="employerAddressLine2"
              value={activeEmploymentRecord.employer_address_line_1 || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employerCounty">Employer's County</Label>
            <Input
              type="text"
              id="employerCounty"
              value={activeEmploymentRecord.employer_county || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="employmentEnded">Employment Ended</Label>
            <Input
              type="date"
              id="employmentEnded"
              value={activeEmploymentRecord.employment_ended || ""}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="netAnnualIncome">Net Annual Income</Label>
            <Input
              type="number"
              id="netAnnualIncome"
              value={activeEmploymentRecord.net_annual_income || 0}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="bonusFrequency">Bonus Frequency</Label>
            <Input
              type="select"
              id="bonusFrequency"
              value={activeEmploymentRecord.bonus_frequency || ""}
              disabled
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
              value={activeEmploymentRecord.overtime_frequency || ""}
              disabled
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
              value={activeEmploymentRecord.allowance_frequency || ""}
              disabled
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
    </CardBody>
  );
};
