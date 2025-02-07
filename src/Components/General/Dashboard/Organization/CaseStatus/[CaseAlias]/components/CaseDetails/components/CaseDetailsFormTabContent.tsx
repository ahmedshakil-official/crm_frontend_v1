
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import { useAppSelector } from "@/Redux/Hooks";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import React from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import FormField from "./LoanDetails/LoanDetailsFormFields";

export const CaseDetailsFormTabContent: React.FC<SimpleTabContentProp> = ({
  tabId,
}) => {
  const value = useAppSelector((state) => state.caseDetails.basicTabId);

  const fields =
    LoanDetailsFormFields[tabId as keyof typeof LoanDetailsFormFields];
  return (
    <TabContent activeTab={tabId} className="my-5">
      <TabPane tabId={tabId}>
        <Row className="gx-5 gy-3">
          {fields?.map((field, idx) => (
            <Col key={field.name} md={6}>
              {/* Each column will take up 50% of the width */}
              <FormField {...field} />
            </Col>
          ))}
        </Row>
      </TabPane>
    </TabContent>
  );
};
