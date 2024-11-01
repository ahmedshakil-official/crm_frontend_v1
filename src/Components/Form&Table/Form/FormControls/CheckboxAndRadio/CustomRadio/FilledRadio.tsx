import { FilledRadioTitle } from "@/Constant";
import { FilledRadioData } from "@/Data/Form&Table/Form/FormControls";
import { Col, Form, Input, Label } from "reactstrap";

export const FilledRadio = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 fill-radio">
        <h6 className="sub-title">{FilledRadioTitle}</h6>
        {FilledRadioData.map((data) => (
          <Form key={data.id}>
            <Label className="d-block" htmlFor={`radio-ani${data.id}`}>
              <Input id={`radio-ani${data.id}`} className={`radio radio-${data.color} radio-border-${data.color}`} type="radio" name="radio-animation" value="option3" defaultChecked={data.check ? true : false} />
              {data.text} 
            </Label>
          </Form>
        ))}
      </div>
    </Col>
  );
};
