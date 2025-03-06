import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import AdverseTabContent from "./AdverseTabContent";
import { useParams } from "next/navigation";
import { useGetAdverseDetailsQuery } from "@/Redux/Reducers/CaseDetails/AdverseDetails/AdverseDetailsApi";

export interface AdverseUser {
  alias: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  profile_image: null | string;
  user_type: string;
}

export interface AdverseProps {
  alias: string;
  has_any_ccj_registered_in_the_last_six_years: boolean;
  has_any_defaults_registered_in_the_last_six_years: boolean;
  has_ever_been_made_bankrupt: boolean;
  is_a_property_repossessed: boolean;
  is_direct_debit_returned_in_the_last_three_months: boolean;
  is_ever_enter_into_a_debt_management_plan_or_debt_relief_order: boolean;
  is_ever_taken_out_a_pay_day_loan: boolean;
  is_exceeded_your_overdraft_in_the_last_three_months: boolean;
  missed_any_payments_on_commitments_in_the_last_five_years: boolean;
  user: AdverseUser;
  why_did_the_adverse_occur: null | string; // Assuming this can be a string if not null
}

export const AdverseTab = () => {
  // Get case alias from URL params
  const params = useParams();
  const { casealias } = params;

  // Fetch applicants data
  const { data: adverseData, isLoading } = useGetAdverseDetailsQuery({
    case_alias: casealias,
  });
  const [basicTab, setBasicTab] = useState<string | null>(null);
  useEffect(() => {
    if (adverseData?.length > 0) {
      setBasicTab(adverseData[0].alias);
    }
  }, [adverseData]);

  if (isLoading) return <div>Loading...</div>;

  if (!adverseData || adverseData.length === 0) {
    return (
      <Col xxl="12" className="px-5">
        <h1 className="text-center text-warning">No Adverse Data Available</h1>
      </Col>
    );
  }

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {adverseData?.map((Adverse: AdverseProps) => (
                <NavItem key={Adverse.alias}>
                  <NavLink
                    className={`${basicTab === Adverse.alias ? "active" : ""}`}
                    onClick={() => setBasicTab(Adverse.alias || null)}
                    style={{ cursor: "pointer" }}
                  >
                    {`${Adverse?.user?.first_name} ${Adverse?.user?.last_name}`}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            {basicTab && <AdverseTabContent basicTab={basicTab} />}
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
