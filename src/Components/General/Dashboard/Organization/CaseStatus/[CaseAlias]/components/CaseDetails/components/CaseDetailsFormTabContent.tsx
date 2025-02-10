import { TabContent, TabPane, Row, Col } from "reactstrap";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import FormField from "./LoanDetails/LoanDetailsFormFields";

export const CaseDetailsFormTabContent: React.FC<{
  tabId: string;
  fields: typeof LoanDetailsFormFields;
  onInputChange: (tabId: string, fieldName: string, value: string) => void;
  formData: Record<string, Record<string, string>>;
  errors: Record<string, Record<string, string>>; // Added errors prop
}> = ({ tabId, fields, onInputChange, formData, errors }) => {
  const currentFields = fields[tabId];

  return (
    <TabContent activeTab={tabId} className="my-5">
      <TabPane tabId={tabId}>
        <Row className="gx-5 gy-3">
          {currentFields?.map((field) => (
            <Col key={field.name} md={6}>
              <FormField
                {...field}
                value={formData[tabId]?.[field.name] || ""}
                onChange={(value) => onInputChange(tabId, field.name, value)}
                error={errors[tabId]?.[field.name]} // Pass error message
              />
            </Col>
          ))}
        </Row>
      </TabPane>
    </TabContent>
  );
};
