import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomSizesTitle } from "@/Constant";
import { CustomSizesData, CustomSubTitle } from "@/Data/Uikits/Progress";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

export const CustomSizes = () => {
  return (
    <Card>
      <CommonCardHeader title={CustomSizesTitle} span={CustomSubTitle} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>{CustomSizesData && CustomSizesData.map((item, index) => <Progress color={item.class} value={item.value} style={{ height: item.text }} key={index} />)}</Col>
        </Row>
      </CardBody>
    </Card>
  );
};
