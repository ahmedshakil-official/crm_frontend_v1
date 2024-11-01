import { LeftTabData } from "@/Data/Uikits/Tabs";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import React from "react";
import { TabContent, TabPane } from "reactstrap";

export const MaterialContent: React.FC<SimpleTabContentProp> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {LeftTabData &&
        LeftTabData.map((item, index) => (
          <TabPane tabId={item.id} key={index}>
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};
