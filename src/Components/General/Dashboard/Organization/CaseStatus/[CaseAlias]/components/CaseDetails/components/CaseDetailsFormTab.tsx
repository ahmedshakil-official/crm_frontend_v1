import { Href } from "@/Constant";
import { useState } from "react";
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

  // Function to go to the next tab
  const nextTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(basicTab);
    if (currentIndex < tabIds.length - 1) {
      setBasicTab(tabIds[currentIndex + 1]);
    }
  };

  // Function to go to the previous tab
  const prevTab = () => {
    const tabIds = Object.keys(fields);
    const currentIndex = tabIds.indexOf(basicTab);
    if (currentIndex > 0) {
      setBasicTab(tabIds[currentIndex - 1]);
    }
  };

  // Function to handle the "Save" action
  const handleSave = () => {
    // Replace this with your save logic
    console.log("Form saved!");
    dispatch(basicTabIndicator((parseInt(value) + 1).toString()));
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
                {/* Pass the fields for the current active tab */}
                <CaseDetailsFormTabContent tabId={basicTab} fields={fields} />
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
                  disabled={isLastTab && false} // Disable if "Save" should not be disabled
                >
                  {isLastTab ? "Save" : "Next"}
                </Button>
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
