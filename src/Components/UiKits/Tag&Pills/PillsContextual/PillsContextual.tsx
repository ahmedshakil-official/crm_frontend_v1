import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PillsContextualTitle } from "@/Constant";
import { BadgesData, PillsContextualSubTitle } from "@/Data/Uikits/Tag&Pills";
import { Badge, Card, CardBody, Col } from "reactstrap";

export const PillsContextual = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={PillsContextualTitle} span={PillsContextualSubTitle} />
        <CardBody>
          <div className="badge-spacing">
            {BadgesData &&
              BadgesData.map((item) => (
                <Badge color={item.class} key={item.id} pill>
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
