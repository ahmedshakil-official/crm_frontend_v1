import React, { useState } from "react";
import {
  Card,
  CardHeader,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

const FoundProperty: React.FC = () => {
  const [foundProperty, setFoundProperty] = useState<boolean>(false);

  const handlePropertyFound = (value: boolean) => {
    setFoundProperty(value);
  };

  return (
    <Card className="mb-2">
      <CardHeader>
        <Row className="align-items-center">
          <Col lg={5}>
            <FormGroup className="mb-0 d-flex align-items-center">
              <Label
                className="mb-0 fw-semibold"
                style={{ fontSize: "15px", color: "#495057" }}
                for="FoundPrimaryProperty"
              >
                Have you found a property yet?{" "}
                <span className="text-danger" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <div className="ms-3">
                <FormGroup check inline className="me-3">
                  <Input
                    type="radio"
                    id="FoundPrimaryPropertyYes"
                    name="FoundPrimaryProperty"
                    value="true"
                    checked={foundProperty === true}
                    onChange={() => handlePropertyFound(true)}
                    className="cursor-pointer"
                  />
                  <Label check className="cursor-pointer">
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input
                    type="radio"
                    id="FoundPrimaryPropertyNo"
                    name="FoundPrimaryProperty"
                    value="false"
                    checked={foundProperty === false}
                    onChange={() => handlePropertyFound(false)}
                    className="cursor-pointer"
                  />
                  <Label check className="cursor-pointer">
                    No
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col>
        </Row>
      </CardHeader>
    </Card>
  );
};

export default FoundProperty;
