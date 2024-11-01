import { ImagePath } from "@/Constant";
import { JustifyTabData } from "@/Data/Uikits/Tabs";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import Image from "next/image";
import React from "react";
import { TabContent, TabPane } from "reactstrap";

export const JustifyTabContent: React.FC<SimpleTabContentProp> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {JustifyTabData &&
        JustifyTabData.map((item, index) => (
          <TabPane tabId={item.id} key={index}>
            <div className="designer-details">
              {item.data &&
                item.data.map((item, index) => (
                  <div className="designer-profile" key={index}>
                    <div className="designer-wrap">
                      <Image width={50} height={50} className="designer-img" src={`${ImagePath}/${item.image}`} alt="profile" />
                      <div className="designer-content">
                        <h6>{item.head}</h6>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPane>
        ))}
    </TabContent>
  );
};
