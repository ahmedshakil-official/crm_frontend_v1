import { AgreeCondition, ChooseFile, City, DescriptionLabel, FirstName, LooksGood, Password, PayMethodTitle, SelectThemeTitle, State, SubmitForm, Zip } from "@/Constant";
import { TooltipValidationStateList, ValidationRadioList } from "@/Data/Form&Table/Form/FormControls";
import { FormValidationsProp } from "@/Types/FormType";
import { ErrorMessage, Field, Form } from "formik";
import React from "react";
import { Button, Col, FormFeedback, FormGroup, Label, Row } from "reactstrap";

const FormCard: React.FC<FormValidationsProp> = ({ errors, submitErrors, setSubmitError }) => {
  return (
    <Form className="needs-validation custom-input validation-forms">
      <Row className="g-3">
        <Col xs="12">
          <Label check>{FirstName}</Label>
          <Field name="firstName" type="text" className={`form-control ${submitErrors && `${errors.firstName ? "is-invalid" : "is-valid"}`}`} placeholder={"Mark"} />
          <ErrorMessage name="firstName" component="span" className="invalid-feedback font-danger" />
          <FormFeedback valid>{LooksGood}</FormFeedback>
        </Col>
        <Col xs="12">
          <Label check>{Password}</Label>
          <Field name="password" type="text" className={`form-control ${submitErrors && `${errors.password ? "is-invalid" : "is-valid"}`}`} />
          <ErrorMessage name="password" component="span" className="invalid-feedback font-danger" />
        </Col>
        <Col xs="12">
          <Label check>{State}</Label>
          <Field name="state" as="select" className={`form-control ${submitErrors && `${errors.state ? "is-invalid" : "is-valid"}`}`}>
            {TooltipValidationStateList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
          </Field>
          <ErrorMessage name="state" component="span" className="invalid-feedback font-danger" />
          <FormFeedback valid>{LooksGood}</FormFeedback>
        </Col>
        <Col md="6">
          <Label check>{City}</Label>
          <Field name="city" type="text" className={`form-control ${submitErrors && `${errors.city ? "is-invalid" : "is-valid"}`}`} />
          <ErrorMessage name="city" component="span" className="invalid-feedback font-danger"></ErrorMessage>
          <FormFeedback valid>{LooksGood}</FormFeedback>
        </Col>
        <Col md="6">
          <Label check>{Zip}</Label>
          <Field name="zip" type="text" className={`form-control ${submitErrors && `${errors.zip ? "is-invalid" : "is-valid"}`}`} />
          <ErrorMessage name="zip" component="span" className="invalid-feedback font-danger"></ErrorMessage>
          <FormFeedback valid>{LooksGood}</FormFeedback>
        </Col>
        <Col xs="12">
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{PayMethodTitle}</h6>
            <div className="radio-form">
              {ValidationRadioList.map(({ id, text }, index) => (
                <FormGroup check key={index}>
                  <Field className="form-check-input" id={`validationFormCheck${id}`} type="radio" name="payment" value={text} />
                  <Label for={`validationFormCheck${id}`} className={`${submitErrors && ` ${errors.payment ? "font-danger" : "text-success"}`}`} check>{text}</Label>
                </FormGroup>
              ))}
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Field as="select" name="theme" className={`form-control ${submitErrors && `${errors.theme ? "is-invalid" : "is-valid"}`}`}>
            <option defaultValue="">{SelectThemeTitle}</option>
            {TooltipValidationStateList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
          </Field>
          <ErrorMessage name="theme" component="span" className="invalid-feedback font-danger" />
        </Col>
        <Col xs="12">
          <Label check>{ChooseFile}</Label>
          <Field name="file" className={`form-control ${submitErrors && `${errors.file ? "is-invalid" : "is-valid"}`}`} type="file" />
          <ErrorMessage name="file" component="span" className="invalid-feedback font-danger"></ErrorMessage>
        </Col>
        <Col xs="12">
          <Label check>{DescriptionLabel}</Label>
          <Field as="textarea" name="description" className={`form-control ${submitErrors && `${errors.description ? "is-invalid" : "is-valid"}`}`} placeholder={"TextAreaPlaceHolder"}></Field>
          <ErrorMessage name="description" className="invalid-feedback font-danger" component="span" />
        </Col>
        <Col xs="12">
          <div className="form-check valid-form">
            <Field name="terms" className={`form-check-input ${submitErrors && ` ${errors.terms ? "text-danger" : "text-success"}`}`} id="invalidCheck" type="checkbox" value="Agree to terms and conditions" />
            <Label for="invalidCheck" className={`${submitErrors && ` ${errors.terms ? "font-danger" : "font-success"}`}`} check>{AgreeCondition}</Label>
          </div>
        </Col>
        <Col xs="12">
          <Button color="primary" type="submit" onClick={() => setSubmitError(true)}>{SubmitForm}</Button>
        </Col>
      </Row>
    </Form>
  );
};
export default FormCard;
