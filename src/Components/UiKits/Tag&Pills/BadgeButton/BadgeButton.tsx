import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgeButtonsTitle } from "@/Constant";
import { BadgeButtonData, BadgeButtonSubTitle } from "@/Data/Uikits/Tag&Pills";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

export const BadgeButton = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgeButtonsTitle} span={BadgeButtonSubTitle} />
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            {BadgeButtonData &&
              BadgeButtonData.map((item, index) => (
                <Button color={item.class} className={`d-flex align-items-center ${item.class === "info" ? "text-light" : ""}`} key={index}>
                  {item.text}
                  <Badge color="transparent" className="rounded-circle btn-p-space btn-light text-dark ms-2">
                    {item.iconName}
                  </Badge>
                </Button>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
