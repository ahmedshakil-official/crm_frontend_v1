import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTooltipTitle, Href } from "@/Constant";
import { BasicTooltipSubTitle } from "@/Data/Uikits/Tooltip";
import { TooltipStateProps } from "@/Types/UiKitsType";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";

export const BasicTooltip = () => {
  const [state, setState] = useState({ tooltip1: false, tooltip2: false, tooltip3: false });
  const toggleTooltip = (key: keyof TooltipStateProps) => {
    setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };
  const toggleTooltip1 = () => toggleTooltip("tooltip1");
  const toggleTooltip2 = () => toggleTooltip("tooltip2");
  const toggleTooltip3 = () => toggleTooltip("tooltip3");

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicTooltipTitle} span={BasicTooltipSubTitle} />
        <CardBody>
          <Button color="primary" className="example-popover mb-0 me-0" id="TooltipExample">
            {"It's magic please hover me..."}
          </Button>
          <Tooltip placement="top" isOpen={state.tooltip1} target="TooltipExample" toggle={toggleTooltip1}>
            {"Surprise!!! Thank you for hovering..."}
          </Tooltip>
          <h5 className="mb-1 py-4 pb-0">{"Inline Tooltip Content"}</h5>
          <p className="mb-0">
            {"Here, is some content about tooltips that you can set the"}
            <a href={Href} className="text-primary fw-bold" id="Tooltip1">
              {"tooltip"}
            </a>
            {"inside the content with help of tooltip and also you can add "}
            <Button color="success" id="Tooltip2" className="text-white border-0 px-3 py-1 me-0 mb-0">
              {"button"}
            </Button>
            {". Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
          </p>
          <Tooltip placement="top" isOpen={state.tooltip2} target="Tooltip1" toggle={toggleTooltip2}>
            {"tooltip"}
          </Tooltip>
          <Tooltip placement="top" isOpen={state.tooltip3} target="Tooltip2" toggle={toggleTooltip3}>
            {"button"}
          </Tooltip>
        </CardBody>
      </Card>
    </Col>
  );
};
