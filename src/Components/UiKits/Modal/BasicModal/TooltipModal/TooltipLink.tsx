import { Href } from "@/Constant";
import { TooltipData } from "@/Data/Uikits/Modal";
import { Fragment, useState } from "react";
import { Tooltip } from "reactstrap";

export const TooltipLink=()=> {
  const [tooltips, setTooltips] = useState<{ [key: string]: boolean }>({});
  const toggleTooltip = (id: string) => {
    setTooltips((prevTooltips) => ({
      ...prevTooltips,
      [id]: !prevTooltips[id],
    }));
  };
  return (
    <>
      <h5>{"Tooltips in a modal"}</h5>
      <p className="mt-2">
        {TooltipData.map(({ id, content, text }) => (
          <Fragment key={id}>
            <a className="tooltip-test font-primary" href={Href} id={id}>
              {content}
            </a>{" "}
            {text}
            <Tooltip autohide={true} isOpen={tooltips[id] || false} target={id} toggle={() => toggleTooltip(id)}>
              {"Tooltip"}
            </Tooltip>
          </Fragment>
        ))}
      </p>
    </>
  );
}
