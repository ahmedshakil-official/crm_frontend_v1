import React from "react";
import { TabContent, TabPane, Row, Col } from "reactstrap";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/Step1Data";
import FormField from "./LoanDetails/LoanDetailsFormFields";

export const CaseDetailsFormTabContent: React.FC<SimpleTabContentProp> = ({
  tabId,
}) => {
  const fields =
    LoanDetailsFormFields[tabId as keyof typeof LoanDetailsFormFields];

  return (
    <TabContent activeTab={tabId} className="my-5">
      <TabPane tabId={tabId}>
        <Row className="gx-5 gy-3">
          {fields?.map((field, idx) => (
            <Col key={field.name} md={6}>
              {" "}
              {/* Each column will take up 50% of the width */}
              <FormField {...field} />
            </Col>
          ))}
        </Row>
      </TabPane>
    </TabContent>
  );
};
