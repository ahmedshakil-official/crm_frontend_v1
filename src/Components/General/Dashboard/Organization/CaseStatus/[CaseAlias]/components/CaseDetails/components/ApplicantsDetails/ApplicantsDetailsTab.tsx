import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ApplicantsDetailsTabContent from "./ApplicantsDetailsTabContent";
import { useGetApplicantsQuery } from "@/Redux/Reducers/CaseDetails/ApplicantsDetails/ApplicantsDetailsApi";

// Type for URL params
interface Params {
  casealias: string;
}

// Type for applicants data array
export interface Applicant {
  alias?: string;
  is_company_application: boolean;
  applicant?: {
    first_name: string;
    last_name: string;
  };
  title: string;
  maiden_name: string;
  date_of_birth: string;
  anticipated_retirement_age: number;
  state_retirement_age: number;
  is_smoker: boolean;
  gender: string;
  nationality: string;
  is_dual_nationality: boolean;
  dual_nationality: string;
  marital_status: string;
  ni_number: string;
  country_of_birth: string;
  bank_name: string;
  home_phone: string;
  mobile_phone: string;
  work_phone: string;
  email: string;
  has_dependants: boolean;
  number_of_dependants: number;
  date_of_arrival_uk: string;
  indefinite_right_to_reside: boolean;
  visa_details: string;
  visa_expiry_date: string;
  postcode: string;
  house_number_or_name: string;
  address_line1: string;
  city: string;
  county: string;
  country: string;
  effective_from: string;
  time_at_address_years: number;
  time_at_address_months: number;
  residential_status: string;
  current_mortgage_balance: string;
  property_value: string;
  owner_monthly_payment: string;
  lender: string;
  mortgage_start_date: string;
  mortgage_type: string;
  current_interest_rate: string;
  remaining_term: number;
  repayment_type: string;
  current_interest_type: string;
  early_repayment_charge_applies: boolean;
  erc_expiry_date: string;
  erc_amount: string;
  erc_being_paid: boolean;
  mortgage_account_number: string;
  being_redeemed: boolean;
  is_mortgage_portable: boolean;
  is_mortgage_being_ported: boolean;
  mortgage_not_to_complete_until_erc_ended: string;
  mortgage_charter_scheme: boolean;
  property_type: string;
  bedrooms: number;
  tenure: string;
  year_built: number;
  notes: string;
  marketing_preferences?: string;
}

export const ApplicantsDetailsTab = () => {
  const [basicTab, setBasicTab] = useState<string | null>(null);

  // Get case alias from URL params
  const params = useParams() as unknown as Params;
  const { casealias } = params;

  // Fetch applicants data
  const { data: applicantsData, isLoading } = useGetApplicantsQuery({
    case_alias: casealias,
  });

  // Set the first applicant's alias as default when data is available
  useEffect(() => {
    if (applicantsData?.length > 0 && !basicTab) {
      setBasicTab(applicantsData[0]?.alias || null);
    }
  }, [applicantsData, basicTab]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {applicantsData?.map((applicantData: Applicant) => (
                <NavItem key={applicantData.alias}>
                  <NavLink
                    className={`${
                      basicTab === applicantData.alias ? "active" : ""
                    }`}
                    onClick={
                      () => setBasicTab(applicantData.alias || null) // Ensure null is used if alias is undefined
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {`${applicantData?.applicant?.first_name} ${applicantData?.applicant?.last_name}`}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <ApplicantsDetailsTabContent
              applicantsData={applicantsData}
              basicTab={basicTab}
            />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
