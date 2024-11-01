import { EnterSomeDetails } from "@/Constant";
import { ErrorMessage, Field } from "formik";
import { Col, FormGroup, Row } from "reactstrap";

export const DescriptionSection = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <h5 className="f-w-600 mb-2">{EnterSomeDetails}</h5>
          <Field name="description" as="textarea" className="form-control" rows={3} />
          <ErrorMessage name="description" component="span" className="text-danger" />
        </FormGroup>
      </Col>
    </Row>
  );
};
