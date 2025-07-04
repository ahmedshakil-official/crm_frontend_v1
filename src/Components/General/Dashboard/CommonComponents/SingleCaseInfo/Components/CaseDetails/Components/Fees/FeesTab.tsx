import { FC, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FeesTabContent } from "./FeesTabContent";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useParams } from "next/navigation";
import { useGetSingleCaseQuery } from "@/Redux/Reducers/CommonComponents/Cases/CasesApi";
import { getNextTabNav } from "@/utils/Helper/nextTabUtils";
import { basicTabIndicator } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import { toast } from "react-toastify";

const FeesTab: FC = () => {
  const { casealias } = useParams();
  const dispatch = useAppDispatch();
  const { data: caseData, isLoading: isCaseFetching } = useGetSingleCaseQuery(
    { case_alias: casealias },
    { skip: !casealias }
  );
  const [basicTab, setBasicTab] = useState("1");

  const currentTab: string | null = useAppSelector(
    (state) => state.caseDetails.basicTabId
  );

  const handleNextTab = () => {
    const nextTabNav = getNextTabNav(caseData?.case_stage, currentTab!);
    if (nextTabNav) {
      dispatch(basicTabIndicator(nextTabNav));
    } else {
      toast.info("This is the last tab.");
    }
  };

  return (
    <Col xxl="12">
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
          <CardBody className="pxd-0 pbd-0">
            <FeesTabContent tabId={basicTab} setTabId={setBasicTab} />
            <div className="d-flex justify-content-end px-4">
              <Button color="secondary" className="mt-3" onClick={handleNextTab}>
                Save & Next
              </Button>
            </div>
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FeesTab;
