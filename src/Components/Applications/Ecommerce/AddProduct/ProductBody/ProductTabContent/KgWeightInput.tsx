import { Col, Input, Label, Row, Tooltip } from "reactstrap";
import { WeightKg } from "@/Constant";
import { useState } from "react";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/Ecommerce/AddProductSlice";

export const KgWeightInput = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const dispatch = useAppDispatch();

  return (
    <Col xs="12">
      <Row>
        <Col xs="12">
          <Label check> {WeightKg} </Label>
          <i className="icon-help-alt ms-1" id="tooltip2" />
          <Tooltip target="tooltip2" placement="top" toggle={toggle} isOpen={tooltipOpen}>
            {"set proper weight for product items."}
          </Tooltip>
        </Col>
        <Col xs="12">
          <Input
            name="inputCity"
            type="number"
            onChange={(e) => dispatch(
              setFormValue({
                name: "inputCity",
                value: e.target.value,
              })
            )} />
          <p className="f-light"> Decide if the product is a digital or physical item. Shipping may be necessary for real-world items. </p>
        </Col>
      </Row>
    </Col>
  );
};
