import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LargeProgressTitle } from "@/Constant";
import { LargeProgressData, LargeProgressSubTitle } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const LargeProgress = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LargeProgressTitle} span={LargeProgressSubTitle} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              {LargeProgressData &&
                LargeProgressData.map((item, index) => (
                  <Progress color={item.class} value={item.value} className="lg-progress-bar" key={index}>
                    {item.value}
                    {"%"}
                  </Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
