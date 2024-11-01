import { Date, DateFormatTitle, DateFormatType } from "@/Constant";
import Cleave from "cleave.js/react";
import { Col, Form, Label, Row } from "reactstrap";

export const DateFormat = () => {
  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <h6 className="sub-title">{DateFormatTitle}</h6>
        <Form>
          <Row className="g-3">
            <Col xs="12" className="mt-2">
              <Label className="col-form-label">{Date}</Label>
              <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["d", "m", "Y"] }} placeholder="DD-MM-YYYY" />
            </Col>
            <Col xs="12" className="mt-2">
              <Label className="col-form-label">{DateFormatType}</Label>
              <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["m", "Y"] }} placeholder="MM-YYYY" />
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};
