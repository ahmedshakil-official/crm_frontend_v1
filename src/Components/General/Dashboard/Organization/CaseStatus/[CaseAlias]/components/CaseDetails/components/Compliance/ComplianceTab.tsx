import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { ComplianceRatingCard } from "./ComplianceTabContents/ComplianceRatingCard";
import { ComplianceTabContents } from "./ComplianceTabContents";

export const ComplianceTab = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <section className=" mb-4">
              <ComplianceRatingCard />
            </section>
            <Nav
              className="nav-warning d-flex justify-content-center align-content-center"
              pills
            >
              {[
                { id: "1", nav: "Disclosure Document/s" },
                { id: "2", nav: "Data Protection - GDPR" },
                { id: "3", nav: "Anti-Money Laundering" },
                { id: "4", nav: "Mandatory Documentation" },
                { id: "5", nav: "Fact Find" },
                { id: "6", nav: "Budget Planner" },
                { id: "7", nav: "EOR & KFI" },
                { id: "8", nav: "Application" },
                { id: "9", nav: "Suitability" },
              ].map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={`${basicTab === item.id ? "active" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setBasicTab(item.id)}
                  >
                    {item.nav}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <ComplianceTabContents tabId={basicTab} setTabId={setBasicTab} />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
