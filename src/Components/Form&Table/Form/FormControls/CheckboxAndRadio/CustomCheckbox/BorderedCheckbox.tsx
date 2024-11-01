import { BorderedCheckboxTitle, PrimaryCheckbox, SecondaryCheckbox, SuccessCheckbox } from "@/Constant";
import { Col, FormGroup, Input, Label } from "reactstrap";

export const BorderedCheckbox = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked custom-checkbox">
        <h6 className="sub-title">{BorderedCheckboxTitle}</h6>
        <FormGroup className="checkbox checkbox-primary mb-0" check>
          <Input id="checkbox-primary-1" className="primary" type="checkbox" defaultChecked />
          <Label htmlFor="checkbox-primary-1" check>
            {PrimaryCheckbox}
          </Label>
        </FormGroup>
        <FormGroup className="checkbox checkbox-secondary mb-0" check>
          <Input className="secondary" id="checkbox-secondary" type="checkbox" />
          <Label htmlFor="checkbox-secondary" check>
            {" "}
            {SecondaryCheckbox}
          </Label>
        </FormGroup>
        <FormGroup className="checkbox checkbox-success mb-0" check>
          <Input id="checkbox-primary" className="success" type="checkbox" />
          <Label htmlFor="checkbox-primary" check>
            {SuccessCheckbox}
          </Label>
        </FormGroup>
      </div>
    </Col>
  );
};
