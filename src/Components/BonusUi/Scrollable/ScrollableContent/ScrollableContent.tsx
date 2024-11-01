import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, ScrollableContentTitle } from "@/Constant";
import { ScrollContentSubTitle, ScrollableContentData } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const ScrollableContent = () => {
  return (
    <Col xxl="4" md="12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ScrollableContentTitle} span={ScrollContentSubTitle} />
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo scroll-b-none custom-container" autoHide style={{ width: "100%", height: "300px" }}>
            <ListGroup className="main-lists-content">
              {ScrollableContentData &&
                ScrollableContentData.map((item, index) => (
                  <ListGroupItem action className={`list-hover-primary ${index === 0 ? "active" : ""}`} key={index}>
                    <div className="list-wrapper gap-0">
                      <Image width={55} height={55} className="list-img" src={`${ImagePath}/user/${item.image}`} alt="profile" />
                      <div className="list-content">
                        <h6>{item.head}</h6>
                        <p>{item.mail}</p>
                        <small className={index !== 0 ? "text-muted" : ""}>{item.small}</small>
                      </div>
                    </div>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};
