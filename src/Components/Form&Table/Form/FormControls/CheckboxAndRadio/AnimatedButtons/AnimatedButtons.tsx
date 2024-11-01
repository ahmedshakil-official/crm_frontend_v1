import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedButtonsTitle } from "@/Constant";
import { AnimatedButtonsData, AnimatedButtonsSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Fragment } from "react";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";

export const AnimatedButtons = () => {
  return (
    <Col xl="6">
      <Card className="custom-animated-btn">
        <CommonCardHeader title={AnimatedButtonsTitle} span={AnimatedButtonsSubTitle} />
        <CardBody>
          <Row className="g-3">
            {AnimatedButtonsData.map((data) => (
              <Col sm="6" key={data.id}>
                <div className="card-wrapper border rounded-3 checkbox-checked animated-button">
                  <h6 className="sub-title">{data.title}</h6>
                  {data.child.map((item) => (
                    <Fragment key={item.id}>
                      <Label className="d-block">
                      <Input className={`${item.type}_animated`} type={item.type} defaultChecked={item.check === "checked"} name={item.type === "radio" ? item.name : ""} />
                        {item.text}</Label>
                    </Fragment>
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
