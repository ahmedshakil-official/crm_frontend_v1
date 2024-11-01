import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UniqueDropdownTitle } from "@/Constant";
import { UniqueDropdownSubTitle } from "@/Data/Uikits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownForm } from "./DropdownForm";
import { DropdownText } from "./DropdownText";

export const UniqueDropdown = () => {
  return (
    <Col sm="6">
      <Card className="custom-unique-dropdown">
        <CommonCardHeader title={UniqueDropdownTitle} span={UniqueDropdownSubTitle} />
        <CardBody>
          <div className="common-flex">
            <DropdownForm /> 
            <DropdownText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};