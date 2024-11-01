import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicPopoverTitle } from "@/Constant";
import { BasicPopoverData, BasicPopoverSubTitle } from "@/Data/Uikits/Popover";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import CommonPopover from "../Common/CommonPopover";

export const BasicPopover = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicPopoverTitle} span={BasicPopoverSubTitle} />
        <CardBody className="common-flex">
          <Button color="primary" className="example-popover mb-0 me-0" id="Popover1" onClick={toggle}>
            {"Hurry Up!"}
          </Button>
          <Popover placement="left" isOpen={popover} target="Popover1" toggle={toggle}>
            <PopoverHeader>{"Basic Popover"}</PopoverHeader>
            <PopoverBody>{"If the package restore doesn't help, you can look at the Output window in the Visual Studio."}</PopoverBody>
          </Popover>
          {BasicPopoverData &&
            BasicPopoverData.map((item, index) => (
              <Fragment key={index}>
                <CommonPopover data={item} />
              </Fragment>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
