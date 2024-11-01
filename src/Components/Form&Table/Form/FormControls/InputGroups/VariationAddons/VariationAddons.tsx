import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationAddonsTitle } from "@/Constant";
import { VarationOfAddonsSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import { VariationAddonsFormContent } from "./VariationAddonsFormContent";

export const VariationAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={VariationAddonsTitle} span={VarationOfAddonsSubTitle} />
        <CardBody className="card-wrapper input-radius variation-input">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter color1="primary" color2="light" btn2Class="text-dark" />
      </Card>
    </Col>
  );
};
