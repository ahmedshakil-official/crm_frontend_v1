import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultRadioTitle } from "@/Constant";
import { DefaultRadioData, DefaultRadioSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";

export const DefaultRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DefaultRadioTitle} span={DefaultRadioSubTitle} />
        <CardBody>
          <Row className="g-3">
            {DefaultRadioData.map((item) => (
              <Col sm={item.id === 3 ? 12 : 6} xl={4} key={item.id}>
                <div className={`card-wrapper border rounded-3 checkbox-checked ${item.id !== 3 ? "default-radio" : ""}`}>
                  <h6 className="sub-title">{item.title}</h6>
                  {item.child.map((list, index) => (
                    <FormGroup key={index} className={list.groupClass ? list.groupClass : ""} check>
                      <Input id={`flexRadio${list.id}`} type="radio" name={list.name} defaultChecked={list.check ? true : false} disabled={list.disabled ? true : false} />
                      <Label htmlFor={`flexRadio${list.id}`} check>
                        {list.labelText}
                      </Label>
                    </FormGroup>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
