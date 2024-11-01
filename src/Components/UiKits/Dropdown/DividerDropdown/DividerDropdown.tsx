import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DividerDropdownTitle } from "@/Constant";
import { DividerCommonData, DividerDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DividerBody } from "./DividerBody";

export const DividerDropdown = () => {
  return (
    <Col md="6">
      <Card className="custom-divider-dropdown">
        <CommonCardHeader title={DividerDropdownTitle} span={DividerDropdownSubTitle} />
        <CardBody>
          <div className="common-flex">
            {DividerCommonData &&
              DividerCommonData.map((item, index) => (
                <Fragment key={index}>
                  <DividerBody item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
