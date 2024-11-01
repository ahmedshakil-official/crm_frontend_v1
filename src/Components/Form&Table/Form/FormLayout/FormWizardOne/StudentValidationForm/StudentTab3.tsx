import { Button, Col, Input, InputGroup, Label, Row } from "reactstrap";
import { GitHubPlaceholder, Github, Href, SocialLinks, Submit, Twitter, TwitterPlaceholder } from "@/Constant";
import { StudentTabProp } from "@/Types/FormType";

export const StudentTab3 :React.FC<StudentTabProp> = ({ studentValidationForm, getUserData}) => {
  const { twitterUrl, gitHubUrl } = studentValidationForm;

  return (
    <>
      <h5 className="mb-2">{SocialLinks}</h5>
      <Row className="g-3">
        <Col sm="6">
          <Label check className="form-label">{Twitter}</Label>
          <Input name="twitterUrl" onChange={getUserData} value={twitterUrl} type="url" placeholder={TwitterPlaceholder} />
        </Col>
        <Col sm="6">
          <Label check className="form-label">{Github}</Label>
          <Input name="gitHubUrl" onChange={getUserData} value={gitHubUrl} type="url" placeholder={GitHubPlaceholder} />
        </Col>
        <Col xs="12">
          <InputGroup>
            <Input name="studentFile" onChange={getUserData} type="file" />
            <a className="btn btn-outline-secondary" href={Href}>{Submit}</a>
          </InputGroup>
        </Col>
        <Col xs="12">
          <Input type="select" onChange={getUserData} name="positions">
            <option value={""}>Positions</option>
            <option value={"Web Designer"}>Web Designer</option>
            <option value={"Software Engineer"}>Software Engineer</option>
            <option value={"UI/UX Designer "}>UI/UX Designer </option>
            <option value={"Web Developer"}>Web Developer</option>
          </Input>
        </Col>
        <Col xs="12">
          <Label check className="form-label">Why do you want to take this position?</Label>
          <Input type="textarea" name="positionQuestion" onChange={getUserData} id="questionsTextarea" rows={2} defaultValue={""} />
        </Col>
      </Row>
    </>
  );
};
