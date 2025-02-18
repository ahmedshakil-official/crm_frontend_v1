import React, { useState } from "react";
import { TabContent, TabPane, Button } from "reactstrap";
import LoanDetailsFormTab1 from "./LoanDetailsFormTabs/LoanDetailsFormTab1";
import LoanDetailsFormTab2 from "./LoanDetailsFormTabs/LoanDetailsFormTab2";
import LoanDetailsFormTab3 from "./LoanDetailsFormTabs/LoanDetailsFormTab3";
import LoanDetailsFormTab4 from "./LoanDetailsFormTabs/LoanDetailsFormTab4";

interface LoanDetailsTabContentProps {
  tabId: string;
  setTabId: (id: string) => void;
}

export const LoanDetailsTabContent: React.FC<LoanDetailsTabContentProps> = ({
  tabId,
  setTabId,
}) => {
  // State for form data in all tabs
  const [formDataTab1, setFormDataTab1] = useState({
    application_type: "",
    lenders_reference: "",
    mortgage_type: "",
    loan_purpose: "",
    borrower_type: "",
    interest_rate_type: "",
    product_term: "",
    lender: "",
    repayment_method: "",
    repayment_vehicle: "",
  });

  const [formDataTab2, setFormDataTab2] = useState({
    property_valuation: "",
    loan_amount: "",
    estimated_value: "",
    ltv: "",
    term_years: "",
    term_months: "",
    interest_only_amount: "",
    outstanding_balance: "",
    current_monthly_payment: "",
    current_lender: "",
    original_purchase_price: "",
    date_of_purchase: "",
    advice_level: "",
  });

  const [formDataTab3, setFormDataTab3] = useState({
    dip_accept_date: "",
    dip_expiry_date: "",
    expected_completion_date: "",
    product_expiry_date: "",
  });

  const [formDataTab4, setFormDataTab4] = useState({
    sale_type: "",
    introduction_type: "",
    lead_source: "",
    introducer_payment_terms: "",
    introducer_fee: "",
    reasons_for_capital_raising: "",
    accepted_or_declined_by_lender: false,
    case_summary: "",
  });

  // Handle form changes for Tab 1
  const handleFormChangeTab1 = (name: string, value: string) => {
    setFormDataTab1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form changes for Tab 2
  const handleFormChangeTab2 = (name: string, value: string) => {
    setFormDataTab2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form changes for Tab 3
  const handleFormChangeTab3 = (name: string, value: string) => {
    setFormDataTab3((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form changes for Tab 4
  const handleFormChangeTab4 = (name: string, value: string) => {
    setFormDataTab4((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation for Tab 2 required fields
  const isTab2Valid = () => {
    const { property_valuation, loan_amount, estimated_value } = formDataTab2;
    return property_valuation && loan_amount && estimated_value;
  };

  // Handle navigation to next tab
  const handleNext = () => {
    const nextTabId = (parseInt(tabId) + 1).toString();
    if (nextTabId <= "4") {
      setTabId(nextTabId);
    }
  };

  // Handle Save action (just logging the data)
  const handleSave = () => {
    console.log("Form data saved!", {
      ...formDataTab1,
      ...formDataTab2,
      ...formDataTab3,
      ...formDataTab4,
    });
  };

  return (
    <div>
      <TabContent activeTab={tabId} className="w-full">
        <TabPane tabId="1">
          <LoanDetailsFormTab1
            formData={formDataTab1}
            handleFormChange={handleFormChangeTab1}
          />
          <Button color="primary" onClick={handleNext} className="float-end">
            Next
          </Button>
        </TabPane>
        <TabPane tabId="2">
          <LoanDetailsFormTab2
            formData={formDataTab2}
            handleFormChange={handleFormChangeTab2}
          />
          <Button
            color="primary"
            onClick={handleNext}
            className="float-end"
            disabled={!isTab2Valid()}
          >
            Next
          </Button>
        </TabPane>
        <TabPane tabId="3">
          <LoanDetailsFormTab3
            formData={formDataTab3}
            handleFormChange={handleFormChangeTab3}
          />
          <Button color="primary" onClick={handleNext} className="float-end">
            Next
          </Button>
        </TabPane>
        <TabPane tabId="4">
          <LoanDetailsFormTab4
            formData={formDataTab4}
            handleFormChange={handleFormChangeTab4}
          />
          <Button
            color="primary"
            onClick={handleSave}
            disabled={!isTab2Valid()}
            className="float-end"
          >
            Save
          </Button>
        </TabPane>
      </TabContent>
    </div>
  );
};
