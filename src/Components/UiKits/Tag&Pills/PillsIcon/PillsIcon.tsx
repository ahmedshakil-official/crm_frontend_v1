import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PillIconsTitle } from "@/Constant";
import { BadgeIconData, RoundedPillSubTitle } from "@/Data/Uikits/Tag&Pills";
import { Badge, Card, CardBody, Col } from "reactstrap";

export const PillsIcon = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={PillIconsTitle} span={RoundedPillSubTitle} />
        <CardBody>
          <div className="badge-spacing">
            {BadgeIconData &&
              BadgeIconData.map((item, index) => (
                <Badge color={item.color} className={`rounded-circle ${item.color === "light" ? "text-dark" : ""}`} key={index}>
                  {item.iconName}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
