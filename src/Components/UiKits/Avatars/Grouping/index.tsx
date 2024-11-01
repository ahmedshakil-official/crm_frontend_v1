import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { GroupingTitle, ImagePath } from "@/Constant";
import { AvatarGroupData, GroupSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const Grouping = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={GroupingTitle} span={GroupSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarGroupData &&
              AvatarGroupData.map((data) => (
                <div className="customers d-inline-block avatar-group" key={data.id}>
                  <ul>
                    {data.child &&
                      data.child.map((item) => (
                        <li className="d-inline-block" key={item.id}>
                          <RatioImage className={`img-${item.class}`} src={`${ImagePath}/${item.image}`} alt="avatar" />
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
