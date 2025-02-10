import { TabContent, TabPane, Row, Col } from "reactstrap";
import FormField, { FormFieldProps } from "./LoanDetails/LoanDetailsFormFields";
import { JSX } from "react";

export const CaseDetailsFormTabContent: React.FC<{
  tabId: string;
  fields: any;
  onInputChange: (
    tabId: string,
    fieldName: string,
    value: string | boolean
  ) => void;
  formData: Record<string, Record<string, string | boolean>>;
  errors: Record<string, Record<string, string>>;
}> = ({ tabId, fields, onInputChange, formData, errors }) => {
  const currentFields = fields[tabId];

  return (
    <TabContent activeTab={tabId} className="my-5">
      <TabPane tabId={tabId}>
        <Row className="gx-5 gy-3">
          {currentFields?.map((field: JSX.IntrinsicAttributes & FormFieldProps) => (
            <Col key={field.name} md={6}>
              <FormField
                {...field}
                value={
                  formData[tabId]?.[field.name] ||
                  (field.type === "radio" ? false : "")
                }
                onChange={(value) => onInputChange(tabId, field.name, value)}
                error={errors[tabId]?.[field.name]}
              />
            </Col>
          ))}
        </Row>
      </TabPane>
    </TabContent>
  );
};
