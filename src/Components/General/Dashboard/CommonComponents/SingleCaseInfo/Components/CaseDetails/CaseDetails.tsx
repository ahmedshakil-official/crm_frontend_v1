import {
  CompletionTabTitleData,
  DIPTabTitleData,
  FFDTabTitleData,
  FMATabTitleData,
  FOPTabTitleData,
  InqueryTabTitleData,
  LegalTabTitleData,
  NPDTabTitleData,
  OFBTabTitleData,
  RCCTabTitleData,
} from "@/Data/Organization/Case/CaseDetails/CaseDetailsTabTitleData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { basicTabIndicator } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { CaseDetailsTabContent } from "./Components/CaseDetailsTabContent";
import { TbCircleCheckFilled } from "react-icons/tb";

const CaseDetails: React.FC<{ caseStage: string }> = ({ caseStage }) => {
  const basicTab = useAppSelector((state: any) => state.caseDetails.basicTabId);
  const isRequired = useAppSelector(
    (state: any) => state.caseDetails.isRequired
  );
  const requiredFilledTabId = useAppSelector(
    (state: any) => state.caseDetails.requiredFilledTabId
  );
  const dispatch = useAppDispatch();

  // Map case stages to corresponding tab title data
  const tabDataMap: Record<string, any[]> = {
    INQUIRY: InqueryTabTitleData,
    FACT_FIND: FFDTabTitleData,
    RESEARCH_COMPLIANCE_CHECK: RCCTabTitleData,
    DECISION_IN_PRINCIPLE: DIPTabTitleData,
    FULL_MORTGAGE_APPLICATION: FMATabTitleData,
    OFFER_FROM_BANK: OFBTabTitleData,
    LEGAL: LegalTabTitleData,
    COMPLETION: CompletionTabTitleData,
    FUTURE_OPPORTUNITY: FOPTabTitleData,
    NOT_PROCEED: NPDTabTitleData,
  };

  // Get the current tab data based on caseStage
  const currentTabData = tabDataMap[caseStage] || [];

  // Set the first tab as the default when caseStage changes
  useEffect(() => {
    if (currentTabData.length > 0) {
      dispatch(basicTabIndicator(currentTabData[0].nav)); // Set the first tab as default
    }
  }, [caseStage, dispatch, currentTabData]);

  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeader>
          <Col md="3">
            <h3>Case Details</h3>
          </Col>
        </CardHeader>
        {/* Tabs for Case Details */}
        <CardBody>
          <CardHeader className="p-0">
            <Nav
              className="nav-success d-flex justify-content-center align-items-center flex-wrap gap-1 pb-2"
              pills
            >
              {currentTabData.map((item, index) => (
                <NavItem
                  key={index}
                  className="d-flex justify-content-center"
                  style={{
                    flex: "1 1 auto",
                    maxWidth: "300px",
                    cursor: "pointer",
                  }}
                >
                  <NavLink
                    outline
                    className={`${basicTab === item.nav ? "active" : ""} 
                     m-2 border d-flex justify-content-center  rounded p-3 text-center w-100`}
                    onClick={() => {
                      dispatch(basicTabIndicator(item.nav));
                    }}
                  >
                    {item.nav}
                    {requiredFilledTabId === item.nav && isRequired && (
                      <TbCircleCheckFilled size={18} className=" ms-1" />
                    )}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          {/* Case Details Tab Content */}
          <CardBody className="px-0 pb-0">
            <CaseDetailsTabContent />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CaseDetails;
