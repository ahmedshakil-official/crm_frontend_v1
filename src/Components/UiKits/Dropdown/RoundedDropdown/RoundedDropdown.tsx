import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import DropdownCommon from "@/CommonComponent/CommonDropdown/DropdownCommon";
import { RoundedDropdownTitle } from "@/Constant";
import { RoundedDropdownData, RoundedDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { RoundedDemo } from "./RoundedDemo";

export const RoundedDropdown = () => {
  return (
    <Col xl="6">
      <Card className="custom-basic-dropdown">
        <CommonCardHeader title={RoundedDropdownTitle} span={RoundedDropdownSubTitle} />
        <CardBody>
          <div className="common-flex">
            <RoundedDemo />
            {RoundedDropdownData &&
              RoundedDropdownData.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} toggleClass={`rounded-pill text-white`} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
