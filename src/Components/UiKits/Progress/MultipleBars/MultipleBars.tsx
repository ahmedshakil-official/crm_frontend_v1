import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MultipleBarsTitle } from "@/Constant";
import { MultipleBarData, MultipleBarsSubTitle } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const MultipleBars = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={MultipleBarsTitle} span={MultipleBarsSubTitle} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              {MultipleBarData &&
                MultipleBarData.map((item, index) => (
                  <Progress key={index} multi>
                    {item.data && item.data.map((item, index) => <Progress key={index} value={item.value} color={item.class} bar />)}
                  </Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
