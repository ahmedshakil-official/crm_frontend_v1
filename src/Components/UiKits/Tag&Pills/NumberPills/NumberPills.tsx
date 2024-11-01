import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NumberPillsTitle } from "@/Constant";
import { BadgesData, NumberPillsSubTitle } from "@/Data/Uikits/Tag&Pills";
import { Badge, Card, CardBody, Col } from "reactstrap";

export const NumberPills = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={NumberPillsTitle} span={NumberPillsSubTitle} />
        <CardBody>
          <div className="badge-spacing">
            {BadgesData &&
              BadgesData.map((item) => (
                <Badge color={item.class} className="rounded-circle" key={item.id}>
                  {item.id}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
