import classnames from "classnames";
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import DIPHistoryContent from "./DIPHistoryContent";

const DIPHistoryTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="p-3">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => toggle("1")}
          >
            DIP History
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => toggle("2")}
          >
            DIP Details
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="p-3">
            <DIPHistoryContent />
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DIPHistoryTab;
