import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
} from "reactstrap";
import FormField, { FormFieldProps } from "./LoanDetails/LoanDetailsFormFields";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import {
  useGetLoanDetailsQuery,
  useUpdateLoanDetailsMutation,
} from "@/Redux/Reducers/CaseDetails/LoanDetails/LoanDetailsApi";

export const CaseDetailsFormTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  const value = useAppSelector((state) => state.caseDetails.basicTabId);
  const dispatch = useAppDispatch();
  const fields = LoanDetailsFormFields;

  // Fetch data from server
  const {
    data: serverData,
    isLoading,
    isError,
  } = useGetLoanDetailsQuery(undefined);
  const [updateLoanDetails, { isLoading: isSaving }] =
    useUpdateLoanDetailsMutation();

  // State for form fields
  const [formData, setFormData] = useState<
    Record<string, Record<string, string | boolean | number | null>>
  >({});
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>(
    {}
  );

  // Initialize formData and errors when server data is available
  useEffect(() => {
    if (serverData) {
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
            serverData[field.name] ?? (field.type === "radio" ? false : "");
          if (field.required) {
            initialErrors[tabId][field.name] = serverData[field.name]
              ? ""
              : "This field is required";
          }
        });
      });

      setFormData(initialFormData);
      setErrors(initialErrors);
    }
  }, [serverData, fields]);

  // Handle input changes
  const handleInputChange = (
    tabId: string,
    fieldName: string,
    value: string | boolean | number | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [tabId]: {
        ...prev[tabId],
        [fieldName]: value,
      },
    }));

    setErrors((prev) => {
      // Check if the field is a date type and if its value is empty
      const isDateField = fields[tabId]?.some(
        (field: FormFieldProps) =>
          field.name === fieldName && field.type === "date"
      );

      // If it's a date field and empty, don't mark as required
      const errorMessage =
        isDateField && (value === "" || value === null)
          ? ""
          : value
          ? ""
          : "This field is required";

      return {
        ...prev,
        [tabId]: {
          ...prev[tabId],
          [fieldName]: errorMessage,
        },
      };
    });
  };


  // Check if form is valid
  const isFormValid = () => {
    return Object.values(errors).every((tab) =>
      Object.values(tab).every((err) => err === "")
    );
  };

  // Save form data to server
  const handleSave = async () => {
    try {
      // Transform date fields with empty strings into null
      const mergedData = Object.entries(formData).reduce(
        (acc, [tabId, tabData]) => {
          const updatedTabData = Object.entries(tabData).reduce(
            (tabAcc: Record<string, any>, [fieldName, value]) => {
              // Check if the field is a date and value is an empty string
              if (
                fields[tabId].find(
                  (field: FormFieldProps) =>
                    field.name === fieldName && field.type === "date"
                ) &&
                value === ""
              ) {
                tabAcc[fieldName] = null; // Set to null if it's an empty string
              } else {
                tabAcc[fieldName] = value; // Keep the value as is
              }
              return tabAcc;
            },
            {}
          ); // Empty object for each tab
          return { ...acc, ...updatedTabData };
        },
        {}
      ); // Empty object for all tabs

      console.log("before send", mergedData); // Log the transformed data

      const res = await updateLoanDetails(mergedData).unwrap();
      console.log("updatedData", res);
      alert("Data saved successfully!");
    } catch (error) {
      alert("Failed to save data.");
    }
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

  const isLastTab =
    Object.keys(fields).indexOf(basicTab) === Object.keys(fields).length - 1;

  if (isLoading || isSaving) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data!</div>;

  return (
    <Col xxl="12">
      <Card>
        <CardBody className="text-center">
          {value === "1" ? (
            <>
              {/* Tabs Navigation */}
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

              {/* Form Fields */}
              <div className="w-75 mx-auto">
                <Row className="gx-5 gy-3 my-5">
                  {fields[basicTab]?.map((field: FormFieldProps) => (
                    <Col key={field.name} md={6}>
                      <FormField
                        {...field}
                        value={
                          field.type === "date"
                            ? formData[basicTab]?.[field.name] ?? ""
                            : formData[basicTab]?.[field.name] ?? ""
                        }
                        onChange={(value) =>
                          handleInputChange(
                            basicTab,
                            field.name,
                            field.type === "date" && value === "" ? null : value
                          )
                        }
                        error={errors[basicTab]?.[field.name]}
                      />
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Navigation Buttons */}
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

              {/* Validation Message */}
              {!isFormValid() && isLastTab && (
                <div className="text-danger mt-2">
                  Please fill in all required fields before saving.
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
