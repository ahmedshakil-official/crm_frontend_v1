import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import DropdownCommon from "@/CommonComponent/CommonDropdown/DropdownCommon";
import { AlignmentsTitle } from "@/Constant";
import { AlignmentData, AlignmentsSubTitle } from "@/Data/Uikits/Dropdown";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { AlignTopDemo } from "./AlignTopDemo";

export const Alignments = () => {
  return (
    <Col xl="6">
      <Card className="custom-alignments">
        <CommonCardHeader title={AlignmentsTitle} span={AlignmentsSubTitle} />
        <CardBody>
          <div className="common-flex">
            <AlignTopDemo />
            {AlignmentData && 
              AlignmentData.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} toggleClass={"text-white"}/> 
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
