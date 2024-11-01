import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PopoverDirectionTitle } from "@/Constant";
import { PopoverDirectionSubTitle, PopoverPositions } from "@/Data/Uikits/Popover";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import CommonPopover from "../Common/CommonPopover";

export const PopoverDirection = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverDirectionTitle} span={PopoverDirectionSubTitle} />
        <CardBody className="common-flex">
          <Button color="warning" className="example-popover mb-0 me-0 text-light" id="TopPopover" onClick={toggle}>
            {"Popover on top"}
          </Button>
          <Popover placement="top" isOpen={popover} target="TopPopover" toggle={toggle}>
            <PopoverHeader>{"Popover On Top"}</PopoverHeader>
            <PopoverBody>{"Popovers need the tooltip plugin considering that a dependency."}</PopoverBody>
          </Popover>
          {PopoverPositions &&
            PopoverPositions.map((item, index) => (
              <Fragment key={index}>
                <CommonPopover data={item} />
              </Fragment>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
