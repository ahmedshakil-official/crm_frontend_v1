import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";
import { ApplicantsDetailsFormFields } from "@/Data/Case/CaseDetails/ApplicantsDetails/ApplicantsDetailsFormData";
import { useAppSelector } from "@/Redux/Hooks";
import {
  useGetCaseLoanDetailsQuery,
  useGetLoanDetailsQuery,
  useUpdateLoanDetailsMutation,
} from "@/Redux/Reducers/CaseDetails/LoanDetails/LoanDetailsApi";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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
  // Get the Redux value to decide which form to show.
  const value = useAppSelector((state) => state.caseDetails.basicTabId);

  // Memoize the mapping so it doesn't change on every render.
  const formFieldsMapping: Record<
    string,
    Record<string, FormFieldProps[]>
  > = useMemo(() => {
    return {
      "1": LoanDetailsFormFields,
      "2": ApplicantsDetailsFormFields,
    };
  }, []);

  // Reusable custom hook to set dynamic form fields and active tab.
  const useDynamicFormFields = (
    value: string,
    mapping: Record<string, Record<string, FormFieldProps[]>>
  ) => {
    const [fields, setFields] = useState<Record<string, FormFieldProps[]>>({});
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
      if (mapping[value]) {
        setFields(mapping[value]);
        const tabs = Object.keys(mapping[value]);
        if (tabs.length > 0) {
          setActiveTab(tabs[0]);
        } else {
          setActiveTab("");
        }
      } else {
        setFields({});
        setActiveTab("");
      }
    }, [value, mapping]);

    return { fields, activeTab, setActiveTab };
  };

  // Use the custom hook to get fields and activeTab based on the current value.
  const { fields, activeTab, setActiveTab } = useDynamicFormFields(
    value,
    formFieldsMapping
  );

  const params = useParams();
  const { casealias } = params;

  // Fetch case loan details
  const { data: casedata, isLoading: isCaseLoanDetilsLoading } =
    useGetCaseLoanDetailsQuery(casealias);

  // Fetch server data only if we have a valid case alias
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
      : null
  );

  // Mutation hook to update details
  const [updateLoanDetails, { isLoading: isSaving }] =
    useUpdateLoanDetailsMutation();

  // State for form data (grouped by tab) and validation errors
  const [formData, setFormData] = useState<
    Record<string, Record<string, string | boolean | number | null>>
  >({});
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>(
    {}
  );

  // Initialize form data and errors when serverData and fields are ready.
  useEffect(() => {
    if (serverData && Object.keys(fields).length > 0) {
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

  // Handle input changes for fields.
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
      const isDateField = fields[tabId]?.some(
        (field: FormFieldProps) =>
          field.name === fieldName && field.type === "date"
      );
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

  // Validate that all tabs have no errors.
  const isFormValid = () => {
    return Object.values(errors).every((tab) =>
      Object.values(tab).every((err) => err === "")
    );
  };

  // Merge form data across tabs and transform empty date fields to null.
  const handleSave = async (value: string) => {
    try {
      const mergedData = Object.entries(formData).reduce(
        (acc, [tabId, tabData]) => {
          const updatedTabData = Object.entries(tabData).reduce(
            (tabAcc: Record<string, any>, [fieldName, value]) => {
              if (
                fields[tabId].find(
                  (field: FormFieldProps) =>
                    field.name === fieldName && field.type === "date"
                ) &&
                value === ""
              ) {
                tabAcc[fieldName] = null;
              } else {
                tabAcc[fieldName] = value;
              }
              return tabAcc;
            },
            {}
          );
          return { ...acc, ...updatedTabData };
        },
        {}
      );

      if (value === "1") {
        await updateLoanDetails({
          case_alias: casealias,
          loanDetails_alias: casedata?.[0]?.alias || "",
          mergedData,
        }).unwrap();
        toast.success("Data saved successfully!");
      }else{
        console.log(mergedData);
      }
    } catch (error) {
      toast.error("Failed to save data!");
    }
  };

  // Navigation functions to switch between tabs.
  const nextTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(activeTab);
    if (currentIndex < tabIds.length - 1) {
      setActiveTab(tabIds[currentIndex + 1]);
    }
  };

  const prevTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabIds[currentIndex - 1]);
    }
  };

  const isLastTab =
    Object.keys(fields).indexOf(activeTab) === Object.keys(fields).length - 1;

  if (isLoading || isSaving || isCaseLoanDetilsLoading)
    return <div>Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-danger fs-3">Error fetching data!</div>
    );

  return (
    <Col xxl="12">
      <Card>
        <CardBody className="text-center">
          {value !== "" ? (
            <>
              {/* Tabs Navigation */}
              <Nav
                tabs
                className="border-tab nav-primary nav-border mb-0 d-flex justify-content-center"
              >
                {Object.keys(fields).map((tabId) => (
                  <NavItem key={tabId}>
                    <NavLink
                      href="#"
                      className={`nav-border text-info ${
                        activeTab === tabId ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(tabId);
                      }}
                    >
                      {value === "2" ? `User ${tabId}` : `Tab ${tabId}`}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>

              {/* Render Form Fields for the Active Tab */}
              <div className="w-75 mx-auto">
                <Row className="gx-5 gy-3 my-5">
                  {fields[activeTab]?.map((field: FormFieldProps) => (
                    <Col key={field.name} md={6}>
                      <FormField
                        {...field}
                        value={
                          field.type === "date"
                            ? formData[activeTab]?.[field.name] ?? ""
                            : formData[activeTab]?.[field.name] ?? ""
                        }
                        onChange={(value) =>
                          handleInputChange(
                            activeTab,
                            field.name,
                            field.type === "date" && value === ""
                              ? null
                              : (value as string | number | boolean | null)
                          )
                        }
                        error={errors[activeTab]?.[field.name]}
                      />
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4 w-75 mx-auto">
                <Button
                  onClick={prevTab}
                  disabled={activeTab === Object.keys(fields)[0]}
                >
                  Previous
                </Button>
                <Button
                  onClick={isLastTab ? () => handleSave(value) : nextTab}
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
            // If value is not "1" or "2", show a message.
            <div className="text-center p-2">
              <p className="fs-3 text-warning">
                No form data available for this selection.
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};
