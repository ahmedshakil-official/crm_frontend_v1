import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import {LargeDropdown} from "./LargeDropdown";
import {SmallDropdown} from "./SmallDropdown";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DropdownSizingTitle } from "@/Constant";
import { DropdownSizingSubTitle } from "@/Data/Uikits/Dropdown";

export const DropdownSizing = () => {
  return (
    <Col md="6">
      <Card className="custom-dropdown-sizing">
        <CommonCardHeader title={DropdownSizingTitle} span={DropdownSizingSubTitle} />
        <CardBody>
          <div className="common-flex">
            <LargeDropdown />
            <SmallDropdown />
          </div>
        </CardBody> 
      </Card>
    </Col>
  );
};
