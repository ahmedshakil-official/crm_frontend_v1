import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, MaterialStyleTabTitle } from "@/Constant";
import { MaterialStyleNav, MaterialStyleSubTitle } from "@/Data/Uikits/Tabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { MaterialStyleContent } from "./MaterialStyleContent";

export const MaterialStyleTab = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col xxl="6" className="mb-lg-3">
      <Card>
        <CommonCardHeader title={MaterialStyleTabTitle} span={MaterialStyleSubTitle} />
        <CardBody>
          <Nav tabs className="border-tab border-0 mb-0 nav-danger">
            {MaterialStyleNav.map((item) => (
              <NavItem key={item.id}>
                <NavLink href={Href} className={`nav-border text-danger nav-danger ${item.id === "1" ? "pt-0" : ""} ${basicTab === item.id ? "active" : ""}`} onClick={() => setBasicTab(item.id)}>
                  {item.icon} {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <MaterialStyleContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};
