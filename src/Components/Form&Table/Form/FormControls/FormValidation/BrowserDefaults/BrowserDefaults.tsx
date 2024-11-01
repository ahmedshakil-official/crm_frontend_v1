import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AgreePolicy, BrowserDefaultsTitle, ChooseFile, ConfirmationText, DescriptionLabel, EmailAddress, FirstName, Password, PayMethodTitle, State, StateChoose, Submit } from "@/Constant";
import { BrowserDefaultsSubTitle, TooltipValidationStateList } from "@/Data/Form&Table/Form/FormControls";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export const BrowserDefaults = () => {
  return (
    <Col xl="6" className="mb-lg-3">
      <Card>
        <CommonCardHeader title={BrowserDefaultsTitle} span={BrowserDefaultsSubTitle} />
        <CardBody className="custom-input form-validation">
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row className="g-3">
              <Col xs="12">
                <Label htmlFor="first-name">{FirstName}</Label>
                <Input id="first-name" type="text" placeholder="First name" required />
              </Col>
              <Col xs="12">
                <Label htmlFor="exampleFormControlInput1">{EmailAddress}</Label>
                <Input id="exampleFormControlInput1" type="email" placeholder="pesamof475@saeoil.com" required />
              </Col>
              <Col xs="12">
                <Col sm="12">
                  <Label htmlFor="inputPassword2">{Password}</Label>
                  <Input id="inputPassword2" type="password" required />
                </Col>
              </Col>
              <Col xs="12">
                <Label htmlFor="validationDefault04">{State}</Label>
                <Input type="select" id="validationDefault04" required>
                  <option>{StateChoose}</option>{TooltipValidationStateList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
                </Input>
              </Col>
              <Col xs="12">
                <Label htmlFor="formFile">{ChooseFile}</Label>
                <Input id="formFile" type="file" required />
              </Col>
              <Col xs="12">
                <div className="card-wrapper border rounded-3 checkbox-checked">
                  <h6 className="sub-title">{PayMethodTitle}</h6>
                  <div className="radio-form">
                    <FormGroup check>
                      <Input type="radio" name="flexRadioDefault" id="flexRadioDefault1" required />
                      <Label htmlFor="flexRadioDefault1" check>{"Visa"}</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input type="radio" name="flexRadioDefault" id="flexRadioDefault2" required />
                      <Label htmlFor="flexRadioDefault2" check>{"MasterCard"}</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked required />
                      <Label htmlFor="flexRadioDefault3" check>{"Paypal"}</Label>
                    </FormGroup>
                  </div>
                </div>
              </Col>
              <Col xs="12">
                <Label htmlFor="exampleFormControlTextarea1">{DescriptionLabel}</Label>
                <Input type="textarea" id="exampleFormControlTextarea1" rows="3" />
              </Col>
              <Col xs="12" className="checkbox-checked">
                <Input type="checkbox" className="me-2" id="flexCheckDefault" />
                <Label htmlFor="flexCheckDefault" check>{AgreePolicy}</Label>
              </Col>
              <Col xs="12" className="mt-2">
                <FormGroup check switch>
                  <Input type="checkbox" className="me-2" id="flexSwitchCheckDefault" required />
                  <Label htmlFor="flexSwitchCheckDefault" check>{ConfirmationText}</Label>
                </FormGroup>
              </Col> 
              <Col xs="12" className="mt-2"><Button color="primary">{Submit}</Button></Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
