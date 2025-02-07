import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Href } from "@/Constant";
import { useState } from "react";
import { CaseDetailsTabTitleData } from "@/Data/Case/CaseDetails/CaseDetailsTabTitleData";
import { CaseDetailsTabContent } from "./components/CaseDetailsTabContent";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { basicTabIndicator } from "@/Redux/Reducers/CaseDetails/CaseDetailsTabIndicatorSlice";

const CaseDetails: React.FC = () => {
  const [basicTab, setBasicTab] = useState("1");
  const dispatch=useAppDispatch();

  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeader>
          <Col md="3">
            <h3>Case Details</h3>
          </Col>
        </CardHeader>
        {/* Tab of Case details title */}
        <CardBody>
          <CardHeader className="d-flex align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-success justify-content-center" pills>
              {CaseDetailsTabTitleData.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    href={Href}
                    outline
                    style={{ width: "16rem" }}
                    className={`${
                      basicTab === item.id ? "active" : ""
                    } m-2 border border-success rounded p-3 text-center`}
                    onClick={() => {
                      setBasicTab(item.id); // ✅ Sets the tab
                      dispatch(basicTabIndicator(item.id)); // ✅ Dispatches the action with correct payload
                    }}
                  >
                    {item.nav}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          {/* Tab of Case details fields  */}
          <CardBody className="px-0 pb-0">
            <CaseDetailsTabContent />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CaseDetails;
