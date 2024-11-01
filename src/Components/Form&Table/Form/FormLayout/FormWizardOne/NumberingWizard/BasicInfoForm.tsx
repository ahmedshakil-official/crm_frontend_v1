import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AgreeToTermsAndConditions, CRMMail, ConfirmPassword, Email, EnterConfirmPassword, EnterPassword, EnterYourName, FirstName, Password } from "@/Constant";
import { NumberingWizardPropsType } from "@/Types/FormType";

const BasicInfoForm: React.FC<NumberingWizardPropsType> = ({ basicInputFormValue, getUserData }) => {
  const { email, firstName, password, confirmPassword, agreeTerms } = basicInputFormValue;
  return (
    <Form className="stepper-one needs-validation custom-input" noValidate>
      <Row>
        <Col sm="6">
          <FormGroup>
            <Label check className="form-label">{Email}<span className="text-danger">*</span></Label>
            <Input onChange={getUserData} value={email} name="email" type="email" placeholder={CRMMail} />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label check className="form-label">{FirstName}<span className="text-danger">*</span></Label>
            <Input onChange={getUserData} value={firstName} name="firstName" type="text" placeholder={EnterYourName} />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check className="form-label">{Password}<span className="text-danger">*</span></Label>
            <Input onChange={getUserData} value={password} name="password" type="password" placeholder={EnterPassword} />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check className="form-label">{ConfirmPassword}<span className="text-danger">*</span></Label>
            <Input onChange={getUserData} value={confirmPassword} name="confirmPassword" type="password" placeholder={EnterConfirmPassword} />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup check>
            <Input id="inputCheckWizard" name="agreeTerms" onChange={getUserData} type="checkbox" checked={agreeTerms} required />
            <Label className="mb-0" htmlFor="inputCheckWizard" check>{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default BasicInfoForm;
