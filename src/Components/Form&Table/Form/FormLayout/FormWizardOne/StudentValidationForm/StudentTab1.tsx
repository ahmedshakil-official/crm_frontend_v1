import { Col, Input, Label, Row } from "reactstrap";
import { CRMMail, ConfirmPassword, Email, EnterConfirmPassword, EnterPassword, EnterYourName, Name, Password } from "@/Constant";
import { StudentTabProp } from "@/Types/FormType";

export const StudentTab1 :React.FC<StudentTabProp> = ({ studentValidationForm, getUserData }) => {
  const { password, name, email, confirmPassWord } = studentValidationForm;

  return (
    <Row className="g-3">
      <Col sm="12">
        <Label check className="form-label">{Name}</Label>
        <Input onChange={getUserData} value={name} name="name" type="text" placeholder={EnterYourName} />
      </Col>
      <Col sm="12">
        <Label check className="form-label">{Email}<span className="text-danger">*</span>
        </Label>
        <Input name="email" onChange={getUserData} value={email} type="email" placeholder={CRMMail} />
      </Col>
      <Col xs="12">
        <Label check className="form-label">{Password}<span className="text-danger">*</span></Label>
        <Input name="password" onChange={getUserData} value={password} type="password" placeholder={EnterPassword} />
      </Col>
      <Col xs="12">
        <Label className="form-label">{ConfirmPassword}<span className="text-danger">*</span></Label>
        <Input name="confirmPassWord" onChange={getUserData} value={confirmPassWord} type="password" placeholder={EnterConfirmPassword} />
      </Col>
    </Row>
  );
};
