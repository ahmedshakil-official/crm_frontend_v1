import { FixPrice, High, Hourly, Low, Medium, Priority, PriorityPlaceholder, ProjectProgress, ProjectProgressPlaceholder, ProjectType, Urgent } from "@/Constant";
import { ErrorMessage, Field } from "formik";
import { Col, FormGroup, Row } from "reactstrap";

export const ProjectSection = () => {
  return (
    <Row>
      <Col sm="4">
        <FormGroup>
          <h5 className="f-w-600 mb-2">{ProjectProgress}</h5>
          <Field name="progress" className="form-control" type="number" placeholder={ProjectProgressPlaceholder} />
          <ErrorMessage name="progress" component="span" className="text-danger" />
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <h5 className="f-w-600 mb-2">{ProjectType}</h5>
          <Field name="type" as="select" className="form-control form-select">
            <option value={Hourly}>{Hourly}</option>
            <option value={FixPrice}>{FixPrice}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <h5 className="f-w-600 mb-2">{Priority}</h5>
          <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-control form-select">
            <option value={Low}>{Low}</option>
            <option value={Medium}>{Medium}</option>
            <option value={High}>{High}</option>
            <option value={Urgent}>{Urgent}</option>
          </Field>
        </FormGroup>
      </Col>
    </Row>
  );
};
