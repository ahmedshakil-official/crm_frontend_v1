import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NumberBadgesTitle } from "@/Constant";
import { BadgesData, NumberBadgeSubTitle } from "@/Data/Uikits/Tag&Pills";
import { Badge, Card, CardBody, Col } from "reactstrap";

export const NumberBadges = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={NumberBadgesTitle} span={NumberBadgeSubTitle} />
        <CardBody>
          <div className="badge-spacing">
            {BadgesData &&
              BadgesData.map((item) => (
                <Badge color={item.class} key={item.id}>
                  {item.id}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
