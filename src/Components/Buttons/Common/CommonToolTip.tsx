import { CommonToolTipProp } from "@/Types/ButtonsType";
import { useState } from "react";
import { Tooltip } from "reactstrap";

export const CommonToolTip:React.FC<CommonToolTipProp> = ({ id, toolTipText }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>
      {toolTipText}
    </Tooltip>
  );
}
