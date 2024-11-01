import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PopoverOffsetTitle } from "@/Constant";
import { PopoverOffsetSubTitle } from "@/Data/Uikits/Popover";
import { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";

export const PopoverOffset = () => {
  const [popoverOffset, setPopoverOffset] = useState(false);
  const [popoverLeft, setPopoverLeft] = useState(false);

  const togglePopover = (popoverId: string) => {
    if (popoverId === "PopoverOffset") setPopoverOffset(!popoverOffset);
    else if (popoverId === "offset") setPopoverLeft(!popoverLeft);
  };

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverOffsetTitle} span={PopoverOffsetSubTitle} />
        <CardBody className="common-flex">
          <Button color="secondary" className="mb-0 me-0" id="PopoverOffset" onClick={() => togglePopover("PopoverOffset")}>
            {"Popover offset 50"}
          </Button>
          <Popover placement="right" isOpen={popoverOffset} target="PopoverOffset" toggle={() => togglePopover("PopoverOffset")} offset={[50, 0]}>
            <PopoverHeader>{"Popover title"}</PopoverHeader>
            <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
          </Popover>
          <Button color="dark" className="example-popover mb-0 me-0" id="offset" onClick={() => togglePopover("offset")}>
            {"Popover offset -50"}
          </Button>
          <Popover placement="left" isOpen={popoverLeft} target="offset" toggle={() => togglePopover("offset")} offset={[-50, 0]}>
            <PopoverHeader>{"Popover On Left"}</PopoverHeader>
            <PopoverBody>{"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."}</PopoverBody>
          </Popover>
        </CardBody>
      </Card>
    </Col>
  );
};
