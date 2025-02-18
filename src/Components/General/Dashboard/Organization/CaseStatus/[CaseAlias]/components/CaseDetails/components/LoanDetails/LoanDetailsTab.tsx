import { Href } from "@/Constant";
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
import { LoanDetailsTabContent } from "./LoanDetailsTabContent";

export const LoanDetailsTab = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {[
                { id: "1", nav: "Step 1" },
                { id: "2", nav: "Step 2" },
                { id: "3", nav: "Step 3" },
                { id: "4", nav: "Step 4" },
              ].map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    href={Href}
                    className={`${basicTab === item.id ? "active" : ""}`}
                    onClick={() => setBasicTab(item.id)}
                  >
                    {item.nav}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <LoanDetailsTabContent tabId={basicTab} />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
