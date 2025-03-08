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

interface FoundPropertyProps {
  onPropertyFound: (value: boolean) => void;
}

const FoundProperty: React.FC<FoundPropertyProps> = ({ onPropertyFound }) => {
  const [foundProperty, setFoundProperty] = useState<boolean>(false);

  const handlePropertyFound = (value: boolean) => {
    setFoundProperty(value);
    onPropertyFound(value);
  };

  return (
    <Card className="mb-2">
      <CardHeader className="py-3">
        <Row className="align-items-center">
          <Col lg={9}>
            <div className="d-flex align-items-center">
              <Label
                className="mb-0 fw-semibold me-4"
                style={{ fontSize: "15px", color: "#495057" }}
                for="FoundPrimaryProperty"
              >
                Is a property being insured? If so, do you know which property
                is covered by this policy?
                <span className="text-danger" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <div className="d-flex align-items-center gap-3">
                <FormGroup check className="mb-0">
                  <Input
                    type="radio"
                    id="FoundPrimaryPropertyYes"
                    name="FoundPrimaryProperty"
                    value="true"
                    checked={foundProperty === true}
                    onChange={() => handlePropertyFound(true)}
                    className="cursor-pointer me-2"
                  />
                  <Label check className="cursor-pointer mb-0">
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check className="mb-0">
                  <Input
                    type="radio"
                    id="FoundPrimaryPropertyNo"
                    name="FoundPrimaryProperty"
                    value="false"
                    checked={foundProperty === false}
                    onChange={() => handlePropertyFound(false)}
                    className="cursor-pointer me-2"
                  />
                  <Label check className="cursor-pointer mb-0">
                    No
                  </Label>
                </FormGroup>
              </div>
            </div>
          </Col>
          {foundProperty && (
            <Col lg={3} className="text-end">
              <Button
                color="primary"
                size="md"
                className="rounded"
                onClick={() => {
                  console.log("Add new property clicked");
                }}
              >
                <i className="bi bi-plus-circle me-1"></i>
                Add New Property
              </Button>
            </Col>
          )}
        </Row>
      </CardHeader>
    </Card>
);
};

export default FoundProperty;
