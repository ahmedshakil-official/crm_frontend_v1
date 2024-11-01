import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderTabsTitle, Href } from "@/Constant";
import { BorderTabsNav, BorderTabsSubTitle } from "@/Data/Uikits/Tabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { BorderTabContent } from "./BorderTabContent";

export const BorderTabs = () => {
  const [basicTab, setBasicTab] = useState("2");

  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={BorderTabsTitle} span={BorderTabsSubTitle} />
        <CardBody>
          <Nav tabs className="border-tab mb-0">
            {BorderTabsNav.map((item) => (
              <NavItem key={item.id}>
                <NavLink href={Href} className={`nav-border text-info tab-info ${item.id === "1" ? "pt-0" : ""} ${basicTab === item.id ? "active" : ""}`} onClick={() => setBasicTab(item.id)}>
                  {item.icon} {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <BorderTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};
