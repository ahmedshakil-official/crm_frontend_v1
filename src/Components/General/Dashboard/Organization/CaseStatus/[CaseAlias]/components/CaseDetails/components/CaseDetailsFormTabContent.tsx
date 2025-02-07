import React from "react";
import { TabContent, TabPane, Row, Col } from "reactstrap";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import FormField from "./LoanDetails/LoanDetailsFormFields";

export const CaseDetailsFormTabContent: React.FC<{
  tabId: string;
  fields: typeof LoanDetailsFormFields;
}> = ({ tabId, fields }) => {
  const currentFields = fields[tabId];

  return (
    <TabContent activeTab={tabId} className="my-5">
      <TabPane tabId={tabId}>
        <Row className="gx-5 gy-3">
          {currentFields?.map((field) => (
            <Col key={field.name} md={6}>
              <FormField {...field} />
            </Col>
          ))}
        </Row>
      </TabPane>
    </TabContent>
  );
};
