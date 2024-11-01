"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FormControls, InputMaskTitle } from "@/Constant";
import { InputMasksSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { DateFormat } from "./DateFormat";
import { TimeFormat } from "./TimeFormat";
import { DefaultInputMask } from "./DefaultInputMask";

const InputMaskContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={InputMaskTitle} parent={FormControls} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card className="masks-input">
              <CommonCardHeader title={InputMaskTitle} span={InputMasksSubTitle} />
              <CardBody>
                <Row className="g-3">
                  <DateFormat />
                  <TimeFormat />
                  <DefaultInputMask />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default InputMaskContainer;
