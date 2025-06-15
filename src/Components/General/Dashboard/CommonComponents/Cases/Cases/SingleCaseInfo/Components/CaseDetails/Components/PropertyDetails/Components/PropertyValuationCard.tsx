import { FC } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

interface PropertyValuationCardProps {
  propertyValue?: string;
  estimatedValuation?: string;
}

const PropertyValuationCard: FC<PropertyValuationCardProps> = ({
  propertyValue = "0.00",
  estimatedValuation = "0.00",
}) => {
  return (
    <Card className="shadow-sm border-0 mb-2">
      <CardBody>
        <Row>
          <Col sm={6} className="mb-2">
            <FormGroup>
              <Label for="property_value">
                Property Purchase Price
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <InputGroup>
                <InputGroupText>£</InputGroupText>
                <Input
                  id="property_value"
                  name="property_value"
                  type="text"
                  value={propertyValue}
                  readOnly
                  className="form-control"
                />
              </InputGroup>
            </FormGroup>
          </Col>

          <Col sm={6} className="mb-3">
            <FormGroup>
              <Label for="estimated_valuation">
                Property Estimated Valuation
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <InputGroup>
                <InputGroupText>£</InputGroupText>
                <Input
                  id="estimated_valuation"
                  name="estimated_valuation"
                  type="text"
                  value={estimatedValuation}
                  readOnly
                  className="form-control"
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PropertyValuationCard;