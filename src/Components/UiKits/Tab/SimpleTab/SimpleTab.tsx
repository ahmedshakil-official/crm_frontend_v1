import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, SimpleTabTitle } from "@/Constant";
import { SimpleTabNav, SimpleTabSubTitle } from "@/Data/Uikits/Tabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { SimpleTabContent } from "./SimpleTabContent";

export const SimpleTab = () => {
  const [basicTab, setBasicTab] = useState("2");

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={SimpleTabTitle} span={SimpleTabSubTitle} />
        <CardBody>
          <Nav tabs className="simple-wrapper">
            {SimpleTabNav.map((item) => (
              <NavItem key={item.id}>
                <NavLink href={Href} className={`text-primary ${basicTab === item.id ? "active" : ""}`} onClick={() => setBasicTab(item.id)}>
                  {item.nav}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <SimpleTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};
