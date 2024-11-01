import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { PillTabContent } from "./PillTabContent";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, PillsTabTitle } from "@/Constant";
import { PillsTabNav, PillsTabSubTitle } from "@/Data/Uikits/Tabs";

export const PillsTab = () => {
  const [basicTab, setBasicTab] = useState("3");

  return (
    <Col sm="12" xxl="6">
      <Card>
        <CommonCardHeader title={PillsTabTitle} span={PillsTabSubTitle} />
        <CardBody>
          <Nav tabs className="nav-primary border-0" pills>
            {PillsTabNav.map((item) => (
              <NavItem key={item.id}>
                <NavLink href={Href} className={basicTab === item.id ? "active" : ""} onClick={() => setBasicTab(item.id)}>
                  {item.nav}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <PillTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};
