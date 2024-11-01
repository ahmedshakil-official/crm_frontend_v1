import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ValidationFormTitle } from "@/Constant";
import { FormValidationSchema, ValidationFormInitialValue, ValidationFormSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { FormValidationProp } from "@/Types/FormType";
import { Formik } from "formik";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import FormCard from "./FormCard";

export const ValidationForm = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);
  const handleSubmit = (values: FormValidationProp, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ValidationFormTitle} span={ValidationFormSubTitle} />
        <CardBody>
          <Formik initialValues={ValidationFormInitialValue} onSubmit={handleSubmit} validationSchema={FormValidationSchema}>
            {({ errors }) => <FormCard submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};
