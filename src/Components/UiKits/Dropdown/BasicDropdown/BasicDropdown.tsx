import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import DropdownCommon from "@/CommonComponent/CommonDropdown/DropdownCommon";
import { BasicDropdownTitle } from "@/Constant";
import { BasicDropdownData, BasicDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BasicDemo } from "./BasicDemo";

export const BasicDropdown = () => {
  return (
    <Col xl="6">
      <Card className="custom-basic-dropdown">
        <CommonCardHeader title={BasicDropdownTitle} span={BasicDropdownSubTitle} />
        <CardBody>
          <div className="common-flex">
            <BasicDemo />
            {BasicDropdownData &&
              BasicDropdownData.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} toggleClass={"text-white"} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
