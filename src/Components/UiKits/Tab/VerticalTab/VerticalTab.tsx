import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, VerticalTabTitle } from "@/Constant";
import { VerticalTabNav, VerticalTabSubTitle } from "@/Data/Uikits/Tabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink, Row } from "reactstrap";
import {VerticalTabContent} from "./VerticalTabContent";

export const VerticalTab = () => {
  const [basicTab, setBasicTab] = useState("2");

  return (
    <Col sm="12" xxl="6">
      <Card>
        <CommonCardHeader title={VerticalTabTitle} span={VerticalTabSubTitle} />
        <CardBody>
          <Row>
            <Col md="4" xs="12">
              <Nav className="flex-column nav-success" pills>
                {VerticalTabNav.map((item) => (
                  <NavLink key={item.id} href={Href} className={basicTab === item.id ? "active" : ""} onClick={() => setBasicTab(item.id)}>
                    {item.nav}
                  </NavLink>
                ))}
              </Nav>
            </Col>
            <Col md="8" xs="12">
              <VerticalTabContent tabId={basicTab} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
