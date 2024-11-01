import React from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { ButtonsGroupTitle } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ButtonGroupData } from "@/Data/Buttons/ButtonsData";

export default function ButtonsGroup() {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={ButtonsGroupTitle} />
        <CardBody className="btn-group-showcase">
          <Row>
            {ButtonGroupData.map((item, index) => (
              <Col xxl={4} md={6} sm={12} className={item.colClass} key={index}>
                <ButtonGroup>
                  <Button className={item.btnClass} color={item.color}>
                    {item.title1}
                  </Button>
                  <Button className={item.btnClass} color={item.color}>
                    {item.title2}
                  </Button>
                  <Button className={item.btnClass} color={item.color}>
                    {item.title3}
                  </Button>
                </ButtonGroup>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
