import { IconCheckboxTitle } from "@/Constant";
import { IconCheckboxData } from "@/Data/Form&Table/Form/FormControls";
import { Col, FormGroup, Input, Label } from "reactstrap";

export const IconCheckbox = () => {
  return (
    <Col xl="4" sm="12" className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100">
        <h6 className="sub-title">{IconCheckboxTitle}</h6>
        <FormGroup className="checkbox checkbox-primary ps-0 main-icon-checkbox" check>
          <ul className="checkbox-wrapper">
            {IconCheckboxData.map((data) => (
              <li key={data.id}>
                <Input className="checkbox-shadow" id={data.id} type="checkbox" defaultChecked={data.check ? true : false} />
                <Label htmlFor={data.id} check>
                  <i className={data.icon} />
                  <span>{data.text}</span>
                </Label>
              </li>
            ))}
          </ul>
        </FormGroup>
      </div>
    </Col>
  );
};
