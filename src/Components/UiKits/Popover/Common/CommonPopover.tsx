import { CommonPopoverType } from "@/Types/UiKitsType";
import React, { useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";

const CommonPopover: React.FC<CommonPopoverType> = ({ data }) => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <>
      <Button color={data.btnColor} className={`example-popover mb-0 me-0 ${data.btnClass}`} size={data.size} id={`${"Popover-" + data.id}`}>
        {data.btnText}
      </Button>
      <Popover placement={data.placement} isOpen={popover} target={"Popover-" + data.id} toggle={toggle} trigger={data.trigger}>
        <PopoverHeader>{data.popoverHeader}</PopoverHeader>
        <PopoverBody>{data.popoverBody}</PopoverBody>
      </Popover>
    </>
  );
};
export default CommonPopover;
