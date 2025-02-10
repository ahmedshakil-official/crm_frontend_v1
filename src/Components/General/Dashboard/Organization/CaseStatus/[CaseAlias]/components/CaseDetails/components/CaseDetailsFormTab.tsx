import { useState, useEffect } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import { basicTabIndicator } from "@/Redux/Reducers/CaseDetails/CaseDetailsTabIndicatorSlice";
import { CaseDetailsFormTabContent } from "./CaseDetailsFormTabContent"; // Import Tab Content

export const CaseDetailsFormTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  const value = useAppSelector((state) => state.caseDetails.basicTabId);
  const dispatch = useAppDispatch();
  const fields = LoanDetailsFormFields;

  const [formData, setFormData] = useState<
    Record<string, Record<string, string | boolean>>
  >({});
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>(
    {}
  );

  // Initialize formData and errors
  useEffect(() => {
    const initialFormData: Record<
      string,
      Record<string, string | boolean>
    > = {};
    const initialErrors: Record<string, Record<string, string>> = {};

    Object.entries(fields).forEach(([tabId, fieldList]) => {
      initialFormData[tabId] = {};
      initialErrors[tabId] = {};

      fieldList.forEach((field) => {
        initialFormData[tabId][field.name] =
          field.type === "radio" ? false : "";
        if (field.required) {
          initialErrors[tabId][field.name] = "This field is required";
        }
      });
    });

    setFormData(initialFormData);
    setErrors(initialErrors);
  }, [fields]);

  // Handle input change
  const handleInputChange = (
    tabId: string,
    fieldName: string,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [tabId]: {
        ...prev[tabId],
        [fieldName]: value,
      },
    }));

    setErrors((prev) => ({
      ...prev,
      [tabId]: {
        ...prev[tabId],
        [fieldName]: value ? "" : "This field is required",
      },
    }));
  };

  // Check if form is valid
  const isFormValid = () => {
    return Object.values(errors).every((tab) =>
      Object.values(tab).every((err) => err === "")
    );
  };

  // Save form data
  const handleSave = () => {
    const mergedData = Object.values(formData).reduce((acc, tabData) => {
      return { ...acc, ...tabData };
    }, {});
    console.log("Form submitted with data:", mergedData);
    dispatch(basicTabIndicator((parseInt(value) + 1).toString()));
  };

  // Navigation for tabs
  const nextTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(basicTab);
    if (currentIndex < tabIds.length - 1) {
      setBasicTab(tabIds[currentIndex + 1]);
    }
  };

  const prevTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(basicTab);
    if (currentIndex > 0) {
      setBasicTab(tabIds[currentIndex - 1]);
    }
  };

  // Check if it's the last tab
  const isLastTab =
    Object.keys(fields).indexOf(basicTab) === Object.keys(fields).length - 1;

  return (
    <Col xxl="12">
      <Card>
        <CardBody className="text-center">
          {value === "1" ? (
            <>
              <Nav
                tabs
                className="border-tab mb-0 d-flex justify-content-center"
              >
                {Object.keys(fields).map((item) => (
                  <NavItem key={item}>
                    <NavLink
                      href="#"
                      className={`nav-border text-info ${
                        basicTab === item ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setBasicTab(item);
                      }}
                    >
                      Tab {item}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>

              <div className="w-75 mx-auto">
                <CaseDetailsFormTabContent
                  tabId={basicTab}
                  fields={fields}
                  onInputChange={handleInputChange}
                  formData={formData}
                  errors={errors}
                />
              </div>

              <div className="d-flex justify-content-between mt-4 w-75 mx-auto">
                <Button onClick={prevTab} disabled={basicTab === "1"}>
                  Previous
                </Button>
                <Button
                  onClick={isLastTab ? handleSave : nextTab}
                  disabled={isLastTab && !isFormValid()}
                >
                  {isLastTab ? "Save" : "Next"}
                </Button>
              </div>

              {!isFormValid() && (
                <div className="text-danger mt-2">
                  {isLastTab &&
                    "Please fill in all required fields before saving."}
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-4">
              <p>No form available for this selection.</p>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};
