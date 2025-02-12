import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import { useAppSelector } from "@/Redux/Hooks";
import {
  useGetCaseLoanDetailsQuery,
  useGetLoanDetailsQuery,
  useUpdateLoanDetailsMutation,
} from "@/Redux/Reducers/CaseDetails/LoanDetails/LoanDetailsApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import FormField, { FormFieldProps } from "./LoanDetails/LoanDetailsFormFields";

export const CaseDetailsFormTab = () => {
  // State for controlling tabs and fetching data
  const [basicTab, setBasicTab] = useState("1");
  const value = useAppSelector((state) => state.caseDetails.basicTabId);
  const fields = LoanDetailsFormFields;
  const params = useParams();
  const { casealias } = params;

  // Fetch case loan details based on the case alias
  const { data: casedata, isLoading: isCaseLoanDetilsLoading } =
    useGetCaseLoanDetailsQuery(casealias);

  // Fetch loan details only when casedata alias is available
  const {
    data: serverData,
    isLoading,
    isError,
  } = useGetLoanDetailsQuery(
    casedata?.[0]?.alias
      ? {
          case_alias: casealias,
          loanDetails_alias: casedata?.[0]?.alias,
        }
      : null // Avoid triggering the query if there's no alias
  );

  // Mutation hook to update loan details
  const [updateLoanDetails, { isLoading: isSaving }] =
    useUpdateLoanDetailsMutation();

  // State for form data and error tracking
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

      // Populate initialFormData and initialErrors based on the fetched data
      Object.entries(fields).forEach(([tabId, fieldList]) => {
        initialFormData[tabId] = {};
        initialErrors[tabId] = {};

        fieldList.forEach((field) => {
          // Set initial values or defaults for each form field
          initialFormData[tabId][field.name] =
            serverData[field.name] ?? (field.type === "radio" ? false : "");

          // Set initial validation errors for required fields
          if (field.required) {
            initialErrors[tabId][field.name] = serverData[field.name]
              ? ""
              : "This field is required";
          }
        });
      });

      // Update state with initialized data
      setFormData(initialFormData);
      setErrors(initialErrors);
    }
  }, [serverData, fields]);

  // Handle input change for form fields
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

    // Update validation errors based on the new value
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

  // Check if the form is valid by verifying all error messages
  const isFormValid = () => {
    return Object.values(errors).every((tab) =>
      Object.values(tab).every((err) => err === "")
    );
  };

  // Save the form data to the server after transforming it as needed
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
          );
          return { ...acc, ...updatedTabData };
        },
        {}
      );

      // Call the mutation to save the merged data
      const res = await updateLoanDetails({
        case_alias: casealias,
        loanDetails_alias: casedata?.[0]?.alias || "", // Handle alias properly
        mergedData,
      }).unwrap();
      toast.success("Data saved successfully!");
    } catch (error) {
      toast.error("Failed to save data!");
    }
  };

  // Navigation function to move to the next tab
  const nextTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(basicTab);
    if (currentIndex < tabIds.length - 1) {
      setBasicTab(tabIds[currentIndex + 1]);
    }
  };

  // Navigation function to move to the previous tab
  const prevTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(basicTab);
    if (currentIndex > 0) {
      setBasicTab(tabIds[currentIndex - 1]);
    }
  };

  // Determine if the current tab is the last tab
  const isLastTab =
    Object.keys(fields).indexOf(basicTab) === Object.keys(fields).length - 1;

  // Display loading indicators if data is still being fetched or saved
  if (isLoading || isSaving || isCaseLoanDetilsLoading)
    return <div>Loading...</div>;

  // Display error message if there's an error fetching the data
  if (isError)
    return (
      <div className="text-center text-danger fs-3">Error fetching data!</div>
    );

  return (
    <Col xxl="12">
      <Card>
        <CardBody className="text-center">
          {value === "1" ? (
            <>
              {/* Tabs Navigation */}
              <Nav
                tabs
                className="border-tab nav-primary nav-border mb-0 d-flex justify-content-center"
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
            <div className="text-center p-2">
              <p className="fs-3 text-warning">
                No form available for this selection.
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};
