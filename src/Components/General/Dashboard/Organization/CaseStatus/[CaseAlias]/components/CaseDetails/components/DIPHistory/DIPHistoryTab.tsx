import { useGetDIPHistoryDetailsQuery } from "@/Redux/Reducers/CaseDetails/DIPHistoryDetails/DIPHistoryDetailsApi";
import LoadingSpinner from "@/app/loading";
import classnames from "classnames";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import DIPHistoryContent from "./DIPHistoryContent";

const DIPHistoryTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("1");
  const [dipHistories, setDipHistories] = useState<any[]>([]);
  const { casealias } = useParams();

  const { data: dipHistoryData, isLoading } = useGetDIPHistoryDetailsQuery({
    case_alias: casealias,
  });

  useEffect(() => {
    if (dipHistoryData) {
      setDipHistories(dipHistoryData);
    }
  }, [dipHistoryData]);

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-3">
      <Nav tabs className="justify-content-center">
        {dipHistories.map((_, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({
                active: activeTab === String(index + 1),
              })}
              onClick={() => toggle(String(index + 1))}
            >
              DIP History {index + 1}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={activeTab}>
        {dipHistories.map((dipHistory, index) => (
          <TabPane key={index} tabId={String(index + 1)}>
            <div className="p-3">
              <DIPHistoryContent dipData={dipHistory} />
            </div>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default DIPHistoryTab;
