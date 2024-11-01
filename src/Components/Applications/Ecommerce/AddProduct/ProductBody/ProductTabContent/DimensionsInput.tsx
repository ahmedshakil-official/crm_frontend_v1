import { Col, Input, Label, Row, Tooltip } from "reactstrap";
import { Dimensions, Height, Length, Width } from "@/Constant";
import { useState } from "react";

export const DimensionsInput = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Col xs="12">
      <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
        <Col xs="12">
          <Label check>{Dimensions}</Label>
          <i className="icon-help-alt ms-1" id="Tooltip3"></i>
          <Tooltip target="Tooltip3" placement="top" toggle={toggle} isOpen={tooltipOpen}>
            {"set proper length/width and height for product items."}
          </Tooltip>
        </Col>
        <Col md="4" sm="6">
          <Input id="inputCity" type="number" placeholder={Length} />
        </Col>
        <Col md="4" sm="6">
          <Input id="inputCity" type="number" placeholder={Width} />
        </Col>
        <Col md="4">
          <Input id="inputCity" type="number" placeholder={Height} />
        </Col>
      </Row>
    </Col>
  );
};
