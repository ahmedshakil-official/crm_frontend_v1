import { Card, CardBody, Col } from "reactstrap";
import TooltipFormValidationForm from "./TooltipFormValidationForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TooltipFormValidationTitle } from "@/Constant";
import { TooltipFormValidationSubTitle, TooltipInitialValue, TooltipValidationSchema } from "@/Data/Form&Table/Form/FormControls";
import { useState } from "react";
import { FormDataTypes } from "@/Types/FormType";
import { Formik } from "formik";

export const TooltipFormValidation = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const submitHandler = (values: FormDataTypes, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };
  return (
    <Col sm="12">
      <Card className="custom-from-validation">
        <CommonCardHeader title={TooltipFormValidationTitle} span={TooltipFormValidationSubTitle} />
        <CardBody> 
          <Formik initialValues={TooltipInitialValue} onSubmit={submitHandler} validationSchema={TooltipValidationSchema}>
            {({ errors }) => <TooltipFormValidationForm errors={errors} setSubmitError={setSubmitError} submitErrors={submitErrors} />}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};
