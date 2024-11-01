import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import DropdownCommon from "@/CommonComponent/CommonDropdown/DropdownCommon";
import { JustifyContentTitle } from "@/Constant";
import { JustifyContentSubTitle, JustifyData } from "@/Data/Uikits/Dropdown";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { TextLeftDemo } from "./TextLeftDemo";

export const JustifyContent = () => {
  return (
    <Col xl="6">
      <Card className="justify-contents-card">
        <CommonCardHeader title={JustifyContentTitle} span={JustifyContentSubTitle} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <TextLeftDemo />
            {JustifyData && 
              JustifyData.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} toggleClass={item.class === "info" ? "text-white" : ""} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
