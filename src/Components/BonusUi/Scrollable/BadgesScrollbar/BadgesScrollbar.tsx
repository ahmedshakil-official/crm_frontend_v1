import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesScrollbarTitle } from "@/Constant";
import { BadgeScrollData, BadgesScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import Scrollbars from "react-custom-scrollbars-2";
import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const BadgesScrollbar = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BadgesScrollbarTitle} span={BadgesScrollSubTitle} />
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo scroll-b-none" autoHide style={{ width: "100%", height: "300px" }}>
            <ListGroup numbered className="scroll-rtl">
              {BadgeScrollData &&
                BadgeScrollData.map((item, index) => (
                  <ListGroupItem className={`d-flex align-items-start flex-wrap ${index === BadgeScrollData.length - 1 ? "justify-content-between" : ""}`} key={index}>
                    <div className="ms-2 me-auto">{item.text}</div>
                    <Badge color={item.class} className={`p-2 ${index !== 0 ? "text-white" : ""}`} pill>
                      {item.badge}
                    </Badge>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};
