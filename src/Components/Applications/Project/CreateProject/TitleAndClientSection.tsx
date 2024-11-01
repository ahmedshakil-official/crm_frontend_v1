import { ClientName, ClientNamePlaceholder, ProjectTitle, ProjectTitlePlaceholder } from "@/Constant";
import { ErrorMessage, Field } from "formik";
import { Col, FormGroup, Row } from "reactstrap";

export const TitleAndClientSection = () => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <h5 className="f-w-600 mb-2">{ProjectTitle}</h5>
            <Field name="title" type="text" className="form-control" placeholder={ProjectTitlePlaceholder} />
            <ErrorMessage name="title" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <h5 className="f-w-600 mb-2">{ClientName}</h5>
            <Field name="client" className="form-control" type="text" placeholder={ClientNamePlaceholder} />
            <ErrorMessage name="client" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};
