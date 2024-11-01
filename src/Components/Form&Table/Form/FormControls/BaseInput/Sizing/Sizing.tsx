import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizingTitle } from "@/Constant";
import { FloatingFormSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Form, FormGroup, FormText, Input, Row } from "reactstrap";

export const Sizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SizingTitle} span={FloatingFormSubTitle} />
        <CardBody className="basic-form">
          <div className="card-wrapper border rounded-3">
            <Form className="floating-wrapper">
              <Row>
                <FormGroup>
                  <Input bsSize="lg" type="text" placeholder=".form-control-lg" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Default input" />
                </FormGroup>
                <FormGroup>
                  <Input bsSize="sm" type="text" placeholder=".form-control-sm" />
                </FormGroup>
                <FormText id="passwordHelpBlock">{"Your password must be 8-20 characters long, contain letters and numbers."}</FormText>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
