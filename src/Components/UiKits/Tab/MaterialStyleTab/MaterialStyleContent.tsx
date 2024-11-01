import { MaterialData } from "@/Data/Uikits/Tabs";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import React from "react";
import { TabContent, TabPane } from "reactstrap";

export const MaterialStyleContent: React.FC<SimpleTabContentProp> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {MaterialData &&
        MaterialData.map((item, index) => (
          <TabPane tabId={item.id} key={index}>
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};
