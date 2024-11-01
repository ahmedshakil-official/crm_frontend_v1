import { Big, EndingDate, Medium, ProjectSize, ProjectSizePlaceholder, Small, StartingDate } from "@/Constant";
import { Field } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup, Row } from "reactstrap";

export const DateSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Row>
      <Col sm="4">
        <FormGroup>
          <h5 className="f-w-600 mb-2">{ProjectSize}</h5>
          <Field as="select" name="size" placeholder={ProjectSizePlaceholder} className="form-control form-select">
            <option>{Small}</option>
            <option>{Medium}</option>
            <option>{Big}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <h5 className="f-w-600 mb-2">{StartingDate}</h5>
          <DatePicker className="datepicker-here form-control" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <h5 className="f-w-600 mb-2">{EndingDate}</h5>
          <DatePicker className="datepicker-here form-control" selected={endDate} onChange={(date: Date) => setEndDate(date)} />
        </FormGroup>
      </Col>
    </Row>
  );
};
