import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const SuitabilityContent: React.FC = () => {
  const handleChange = (field: string, value: string) => {};

  return (
    <Form>
      {/* Your circumstances and objectives  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Your circumstances and objectives</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Budget and affordability  */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Budget and affordability</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* New Mortgage Details  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>New Mortgage Details</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Why are we recommending this repayment method?  */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Why are we recommending this repayment method?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 5</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Why are we recommending this mortgage type?  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h3>Why are we recommending this mortgage type?</h3>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Why are you recommending this term?  */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Why are you recommending this term?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Why are we recommending this mortgage Lender?  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Why are we recommending this mortgage Lender?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Why are we recommending this mortgage amount?  */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Why are we recommending this mortgage amount?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* What are the costs and fees?  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>What are the costs and fees?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* What are the disadvantages and risks?  */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>What are the disadvantages and risks?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 5</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 6</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 7</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 8</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 9</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* What is the cost of our advice?  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>What is the cost of our advice?</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Protection  */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Protection</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Buildings and Insurance  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Buildings and Insurance</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>

          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Wills */}
      <Card className="border-1 border-secondary">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Wills</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option value="">Select...</option>
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Answer 1</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 2</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 3</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <FormGroup>
            <Label>Answer 4</Label>
            <Input type="textarea" name="aims" rows="3" />
          </FormGroup>
          <div className="d-flex justify-content-start align-items-center">
            <Button color="secondary">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Button for save changes  */}
      <div className="d-flex justify-content-end mt-3 mb-0">
        <Button color="primary">Save Changes</Button>
      </div>
    </Form>
  );
};

export default SuitabilityContent;
