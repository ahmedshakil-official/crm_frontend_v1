import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HtmlTooltipTitle } from "@/Constant";
import { HtmlTooltipData, HtmlTooltipSubTitle } from "@/Data/Uikits/Tooltip";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";

export const HtmlTooltip = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleTooltip = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={HtmlTooltipTitle} span={HtmlTooltipSubTitle} />
        <CardBody>
          <div className="common-flex tooltip-effect">
            {HtmlTooltipData &&
              HtmlTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} className={`mb-0 me-0 ${item.class === "warning" ? "text-white" : ""}`} id={`html_${index}`} onClick={() => toggleTooltip(index)}>
                    {item.text}
                  </Button>
                  <Tooltip isOpen={openIndex === index} target={`html_${index}`} toggle={() => toggleTooltip(index)}>
                    {item.tooltip}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
