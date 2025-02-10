"use client";

import { Href } from "@/Constant";
import { useEffect, useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
import { CaseDetailsFormTabContent } from "./CaseDetailsFormTabContent";
import { CaseDetailsFormTabTitleData } from "@/Data/Case/CaseDetails/CaseDetailsFormTabTitleData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import { basicTabIndicator } from "@/Redux/Reducers/CaseDetails/CaseDetailsTabIndicatorSlice";

export const CaseDetailsFormTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  const value = useAppSelector((state) => state.caseDetails.basicTabId);
  const dispatch = useAppDispatch();
  const fields = LoanDetailsFormFields;

  const [formData, setFormData] = useState<
    Record<string, Record<string, string>>
  >({});
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>(
    {}
  );

  // Initialize formData and errors
  useEffect(() => {
    const initialFormData: Record<string, Record<string, string>> = {};
    const initialErrors: Record<string, Record<string, string>> = {};

    Object.entries(fields).forEach(([tabId, fieldList]) => {
      initialFormData[tabId] = {};
      initialErrors[tabId] = {};

      fieldList.forEach((field) => {
        initialFormData[tabId][field.name] = "";
        if (field.required) {
          initialErrors[tabId][field.name] = "This field is required";
        }
      });
    });

    setFormData(initialFormData);
    setErrors(initialErrors);
  }, []);

  // Handle input change
  const handleInputChange = (
    tabId: string,
    fieldName: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [tabId]: {
        ...prev[tabId],
        [fieldName]: value,
      },
    }));

    // Remove error if the user provides input
    setErrors((prev) => ({
      ...prev,
      [tabId]: {
        ...prev[tabId],
        [fieldName]: value.trim() ? "" : "This field is required",
      },
    }));
  };

  // Check if form is valid (no empty required fields)
  const isFormValid = () => {
    return Object.values(errors).every((tab) =>
      Object.values(tab).every((err) => err === "")
    );
  };

  // Handle save form all tab data into one object
  const handleSave = () => {
    const mergedData = Object.values(formData).reduce((acc, tabData) => {
      return { ...acc, ...tabData };
    }, {});

    console.log("Form submitted with data:", mergedData);
    dispatch(basicTabIndicator((parseInt(value) + 1).toString()));
  };

  // Function to navigate tabs
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

  // Check if current tab is the last one
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
                {CaseDetailsFormTabTitleData[0].map((item) => (
                  <NavItem key={item.id}>
                    <NavLink
                      href={Href}
                      className={`nav-border text-info tab-info ${
                        item.id === "1" ? "pt-0" : ""
                      } ${basicTab === item.id ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setBasicTab(item.id);
                      }}
                    >
                      {item.text}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>

              <div className="w-75 mx-auto">
                {/* Pass fields and error messages to the content component */}
                <CaseDetailsFormTabContent
                  tabId={basicTab}
                  fields={fields}
                  onInputChange={handleInputChange}
                  formData={formData}
                  errors={errors} // Pass errors to display validation messages
                />
              </div>

              {/* Buttons to navigate between tabs */}
              <div className="d-flex justify-content-between mt-4 w-75 mx-auto">
                <Button
                  onClick={prevTab}
                  disabled={Object.keys(fields).indexOf(basicTab) === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={isLastTab ? handleSave : nextTab}
                  disabled={isLastTab && !isFormValid()}
                >
                  {isLastTab ? "Save" : "Next"}
                </Button>
              </div>
              {/* Show error message if the form is invalid */}
              <div className="text-danger mt-2">
                {isLastTab &&
                  !isFormValid() &&
                  "Please fill in all required fields before saving."}
              </div>
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
