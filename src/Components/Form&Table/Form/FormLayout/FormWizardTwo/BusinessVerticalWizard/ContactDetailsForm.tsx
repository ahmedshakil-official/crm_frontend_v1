import { ContactDetails, Continue, Email, GekkoCo, InqMail, JoinOrganizationType, OrganizationDescription, OrganizationName, Previous, ShareYourProblemsAndAnotherIssues } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setContactDetailsFormValue } from "@/Redux/Reducers/FormLayout/FormWizardTwoSlice";
import { BusinessFormCommonProps } from "@/Types/FormType";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ContactDetailsForm: React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const SelectData = ["Technology", "Culture", "NGO", "Environment", "Life cycle"];
  const { contactDetailsFormValues } = useAppSelector((state) => state.formWizardTwo);
  const { organizationName, email, description, organizationType } = contactDetailsFormValues;
  const dispatch = useAppDispatch();
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setContactDetailsFormValue({ ...contactDetailsFormValues, [name]: value }));
  };
  const handleNextButton = () => {
    if (organizationName !== "" && email !== "" && description !== "" && organizationType !== "") callbackActive(4);
    else toast.error("Please fill all field after press next button");
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()} className="g-3 needs-validation basic-form" noValidate>
      <Row>
        <Col xs="12">
          <h5 className="f-w-600">{ContactDetails}</h5>
          <p>Please visit the documentation page if you require further information.</p>
        </Col>
        <Col sm="6" className="mt-3">
          <FormGroup>
            <Label>{OrganizationName}<span className="text-danger">*</span></Label>
            <Input type="text" placeholder={GekkoCo} name="organizationName" value={organizationName} onChange={getUserData} />
          </FormGroup>
        </Col>
        <Col sm="6" className="mt-3">
          <FormGroup>
            <Label>{Email}<span className="text-danger">*</span></Label>
            <Input type="text" placeholder={InqMail} value={email} name="email" onChange={getUserData} />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label>{JoinOrganizationType}<span className="text-danger">*</span></Label>
            <Input type="select" value={organizationType} name="organizationType" onChange={getUserData} className="f-w-400 f-14 text-gray">
              <option value={""}>Join organization type</option>
              {SelectData.map((item, index) => (<option key={index} value={item}>{item}</option>))}
            </Input>
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label>{OrganizationDescription}</Label>
            <Input type="textarea" value={description} name="description" onChange={getUserData} placeholder={ShareYourProblemsAndAnotherIssues} />
          </FormGroup>
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Button color="primary" onClick={() => callbackActive(2)}>{Previous}</Button>
          <Button className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactDetailsForm;
