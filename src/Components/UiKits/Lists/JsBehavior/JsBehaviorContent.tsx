import { JsBehaviorListData } from "@/Data/Uikits/Lists";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import React from "react";
import { TabContent, TabPane } from "reactstrap";

export const JsBehaviorContent: React.FC<SimpleTabContentProp> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {JsBehaviorListData &&
        JsBehaviorListData.map((item, index) => (
          <TabPane className={item.id === "Profile" ? "dark-list" : ""} tabId={item.id} key={index}>
            {item.htmlText}
          </TabPane>
        ))}
    </TabContent>
  );
};
