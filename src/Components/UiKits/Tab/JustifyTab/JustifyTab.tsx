import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, JustifyTabTitle } from "@/Constant";
import { JustifyTabNav, JustifyTabSubTitle } from "@/Data/Uikits/Tabs";
import { useState } from "react";
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from "reactstrap";
import { JustifyTabContent } from "./JustifyTabContent";

export const JustifyTab = () => {
  const [basicTab, setBasicTab] = useState("2");

  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={JustifyTabTitle} span={JustifyTabSubTitle} />
        <CardBody>
          <CardHeader className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p className="mb-0">
              <em className="text-danger">{"CRM Profiles For New Employees:"}</em>
            </p>
            <Nav className="nav-warning" pills>
              {JustifyTabNav.map((item,index) => (
                <NavItem key={index}>
                  <NavLink href={Href} className={`${basicTab === item.id ? "active" : ""}`} onClick={() => setBasicTab(item.id)}>
                    {item.nav}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <JustifyTabContent tabId={basicTab} />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
