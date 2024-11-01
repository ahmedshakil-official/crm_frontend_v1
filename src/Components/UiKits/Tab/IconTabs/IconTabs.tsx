import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { IconTabContent } from "./IconTabContent";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, IconTabsTitle } from "@/Constant";
import { IconTabsNav, IconTabsSubTitle } from "@/Data/Uikits/Tabs";

export const IconTabs = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={IconTabsTitle} span={IconTabsSubTitle} />
        <CardBody>
          <Nav tabs>
            {IconTabsNav.map((item) => (
              <NavItem key={item.id}>
                <NavLink href={Href} className={`text-secondary ${basicTab === item.id ? "active" : ""}`} onClick={() => setBasicTab(item.id)}>
                  {item.icon} {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <IconTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};
