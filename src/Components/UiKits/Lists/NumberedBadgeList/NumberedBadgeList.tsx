import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NumberedBadgeListTitle } from "@/Constant";
import { BadgeListData, NumBadgeListSubTitle } from "@/Data/Uikits/Lists";
import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const NumberedBadgeList = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={NumberedBadgeListTitle} span={NumBadgeListSubTitle} />
        <CardBody>
          <ListGroup numbered className="badge-list">
            {BadgeListData &&
              BadgeListData.map((item, index) => (
                <ListGroupItem className="d-flex justify-content-between align-items-start flex-wrap" key={index}>
                  <div>{item.text}</div>
                  <Badge color={item.badgeClass} className={`p-2 ${item.badgeClass !== "warning" ? "text-white" : ""}`} pill>
                    {item.badgeText}
                  </Badge>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
