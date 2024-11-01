import { City, ShippingClass, ZipCode } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/Ecommerce/AddProductSlice";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { DimensionsInput } from "./DimensionsInput";
import { KgWeightInput } from "./KgWeightInput";

const TabThree = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3 custom-input">
          <Col xs="12">
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs="12">
                <Label check> Where can I pick up my order? </Label>
              </Col>
              <Col md="4" sm="6">
                <Input type="number" placeholder={`${ZipCode} (10001)`} name="zipCode" onChange={(e) => dispatch(setFormValue({ name: "zipCode", value: e.target.value }))} />
              </Col>
              <Col md="4" sm="6">
                <Input type="text" name="city" placeholder={City} onChange={(e) => dispatch(setFormValue({ name: "city", value: e.target.value }))} />
              </Col>
              <Col md="4">
                <Input type="select" defaultValue={"State"} name="state" onChange={(e) => dispatch(setFormValue({ name: "state", value: e.target.value }))}>
                  <option>{"State"}</option><option>{"Gujarat"}</option><option>{"Punjab"}</option><option>{"Himachal pradesh"}</option><option>{"Goa"} </option><option>{"Sikkim"} </option><option>{"Telangana"}</option></Input>
              </Col>
            </Row>
          </Col>
          <KgWeightInput />
          <DimensionsInput />
          <Col xs="12">
            <Row>
              <Col xs="12"><Label check> {ShippingClass} </Label></Col>
              <Col md="12">
                <Input type="select" name="inputState" defaultValue={"Basic Shipping"} onChange={(e) => dispatch(setFormValue({ name: "inputState", value: e.target.value }))}>
                  <option>{"Basic Shipping"}</option><option>{"Expedited Shipping"}</option><option>{"International Shipping"}</option><option>{"Free Shipping"}</option><option>{"Same-Day or Next-Day Shipping"}</option><option>{"Flat Rate Shipping"}</option><option>{"Local Pickup"}</option></Input>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabThree;
