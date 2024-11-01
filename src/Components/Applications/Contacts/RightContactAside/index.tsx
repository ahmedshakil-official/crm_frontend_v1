import { Business, Favorites, FollowUp, Holidays, Ideas, Important } from "@/Constant";
import { RightContactAsideProp } from "@/Types/ContactType";
import React, { useState } from "react";
import { Card, Col, TabContent, TabPane } from "reactstrap";
import { EmptyData } from "./Common/EmptyData";
import { HistoryCard } from "./HistoryCard";
import { OrganizationTab } from "./OrganizationTab";
import { PersonalTab } from "./PersonalTab";

export const RightContactAside: React.FC<RightContactAsideProp> = ({ activeTab }) => {
  const [showHistory, setShowHistory] = useState(false);
  const historyToggle = () => setShowHistory(!showHistory);
  return (
    <Col xxl={9} xl={8} md={12} className="box-col-12">
      <div className="email-right-aside bookmark-tabcontent contacts-tabs">
        <Card className="email-body radius-left dark-contact">
          <div className="ps-0">
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}>
                <PersonalTab historyToggle={historyToggle} />
              </TabPane>
              <TabPane tabId={2}>
                <OrganizationTab />
              </TabPane>
              <TabPane tabId={3}>
                <EmptyData title={FollowUp} />
              </TabPane>
              <TabPane tabId={4}>
                <EmptyData title={Favorites} />
              </TabPane>
              <TabPane tabId={5}>
                <EmptyData title={Ideas} />
              </TabPane>
              <TabPane tabId={6}>
                <EmptyData title={Important} />
              </TabPane>
              <TabPane tabId={7}>
                <EmptyData title={Business} />
              </TabPane>
              <TabPane tabId={8}>
                <EmptyData title={Holidays} />
              </TabPane>
              {showHistory && <HistoryCard historyToggle={historyToggle} showHistory={showHistory} />}
            </TabContent>
          </div>
        </Card>
      </div>
    </Col>
  );
};
