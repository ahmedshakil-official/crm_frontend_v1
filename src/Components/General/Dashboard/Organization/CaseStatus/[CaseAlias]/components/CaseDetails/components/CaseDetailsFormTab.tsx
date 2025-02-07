import { Href } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { CaseDetailsFormTabContent } from "./CaseDetailsFormTabContent";
import { CaseDetailsFormTabTitleData } from "@/Data/Case/CaseDetails/CaseDetailsFormTabTitleData";

export const CaseDetailsFormTab = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col xxl="12">
      <Card>
        <CardBody className="text-center">
          <Nav tabs className="border-tab mb-0 d-flex justify-content-center">
            {CaseDetailsFormTabTitleData[0].map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  href={Href}
                  className={`nav-border text-info tab-info ${
                    item.id === "1" ? "pt-0" : ""
                  } ${basicTab === item.id ? "active" : ""}`}
                  onClick={() => setBasicTab(item.id)}
                >
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <div className=" w-75 mx-auto">
            <CaseDetailsFormTabContent tabId={basicTab} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
