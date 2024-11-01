import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ProgressStriped } from "@/Constant";
import { StripedProgressData, StripedProgressSubTitle } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const StripedProgress = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressStriped} span={StripedProgressSubTitle} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>{StripedProgressData && StripedProgressData.map((item, index) => <Progress key={index} color={item.class} value={item.value} striped />)}</Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
