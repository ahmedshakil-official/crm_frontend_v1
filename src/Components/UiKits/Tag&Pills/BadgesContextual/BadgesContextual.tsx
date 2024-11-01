import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesContextualTitle } from "@/Constant";
import { BadgesContextualSubTitle, BadgesData } from "@/Data/Uikits/Tag&Pills";
import { Badge, Card, CardBody, Col } from "reactstrap";

export const BadgesContextual = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgesContextualTitle} span={BadgesContextualSubTitle} />
        <CardBody>
          <div className="badge-spacing">
            {BadgesData &&
              BadgesData.map((item) => (
                <Badge color={item.class} className={item.class === "light" ? "text-dark" : ""} key={item.id}>
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
