import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SmallProgressTitle } from "@/Constant";
import { SmallProgressData, SmallProgressSubTitle } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const SmallProgress = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SmallProgressTitle} span={SmallProgressSubTitle} />
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              {SmallProgressData &&
                SmallProgressData.map((item, index) => (
                  <Progress color="primary" animated striped bar value={item.value} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4" key={index}>
                    <span className="text-primary progress-label">{item.text}</span>
                    <span className="animate-circle"></span>
                  </Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
