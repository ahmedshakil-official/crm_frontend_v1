import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ProgressAnimated } from "@/Constant";
import { AnimetedProgressSubTitle, StripedProgressData } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const AnimatedProgress = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressAnimated} span={AnimetedProgressSubTitle} />
        <CardBody className=" progress-showcase">
          <Row>
            <Col>{StripedProgressData && StripedProgressData.map((item, index) => <Progress key={index} color={item.class} value={item.value} striped animated />)}</Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
