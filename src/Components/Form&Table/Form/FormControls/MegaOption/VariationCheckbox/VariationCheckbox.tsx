import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ChooseActivities, VariationCheckboxTitle } from "@/Constant";
import { VariationCheckboxData, VariationCheckboxDataList } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import VariationCheckboxUpgrade from "./VariationCheckboxUpgrade";

const VariationCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VariationCheckboxTitle} span={VariationCheckboxData} />
        <CardBody>
          <Row className="g-3">
            <Col xl="4" md="5">
              <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <h6 className="sub-title">{ChooseActivities}</h6>
                {VariationCheckboxDataList.map(({ id, color, check, labelText }, index) => (
                  <div className="payment-wrapper" key={index}>
                    <div className="payment-first">
                      <FormGroup className={`checkbox checkbox-${color}`} check>
                        <Input id={`check-${id}`} type="checkbox" defaultChecked={check} />
                        <Label className="mb-0" htmlFor={`check-${id}`} check>
                          {labelText}
                        </Label>
                      </FormGroup>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <VariationCheckboxUpgrade />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationCheckbox;
