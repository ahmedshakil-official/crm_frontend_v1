import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TooltipDirectionTitle } from "@/Constant";
import { TooltipDirectionSubTitle, TooltipPosition } from "@/Data/Uikits/Tooltip";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";

export const TooltipDirection = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleTooltip = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={TooltipDirectionTitle} span={TooltipDirectionSubTitle} />
        <CardBody>
          <div className="common-flex">
            {TooltipPosition &&
              TooltipPosition.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} className={`mb-0 me-0 ${item.class === "warning" ? "text-white" : ""}`} id={`direction_${index}`} onClick={() => toggleTooltip(index)}>
                    {item.text}
                    {" Tooltip"}
                  </Button>
                  <Tooltip isOpen={openIndex === index} placement={item.position as "top" | "bottom" | "left" | "right"} target={`direction_${index}`} toggle={() => toggleTooltip(index)}>
                    {"Tooltip on "}
                    {item.position}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
