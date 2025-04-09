import { FC, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FeesTabContent } from "./FeesTabContent";

const FeesTab: FC = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {[
                { id: "1", nav: "Fees In" },
                { id: "2", nav: "Fees Out" },
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
            <FeesTabContent tabId={basicTab} setTabId={setBasicTab} />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FeesTab;
