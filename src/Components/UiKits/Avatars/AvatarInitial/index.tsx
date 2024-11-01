import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AvatarInitialTitle } from "@/Constant";
import { AvatarInitialData, AvatarInitialSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const AvatarInitial = () => {
  return (
    <Col xl="4" sm="12">
      <Card>
        <CommonCardHeader title={AvatarInitialTitle} span={AvatarInitialSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarInitialData &&
              AvatarInitialData.map((item) => (
                <div className={`avatar-intial img-${item.class} bg-light-${item.color}`} key={item.id}>
                  <span className={`fs-${item.id}`}>{item.text}</span>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
