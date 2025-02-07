import { Href } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { CaseDetailsFormTabContent } from "./CaseDetailsFormTabContent";
import { CaseDetailsFormTabTitleData } from "@/Data/Case/CaseDetails/CaseDetailsFormTabTitleData";
import { useAppSelector } from "@/Redux/Hooks";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/LoanDetailsFormData";

export const CaseDetailsFormTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  const value = useAppSelector((state) => state.caseDetails.basicTabId);
  const fields = LoanDetailsFormFields;

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
                {/* Passing value to the tab content */}
                <CaseDetailsFormTabContent tabId={basicTab} fields={fields} />
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
