import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JsBehaviorTitle } from "@/Constant";
import { BehaviourListNav, JsBehaviorSubTitle } from "@/Data/Uikits/Lists";
import { useState } from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { JsBehaviorContent } from "./JsBehaviorContent";

export const JsBehavior = () => {
  const [activeList, setActiveList] = useState("Home");

  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={JsBehaviorTitle} span={JsBehaviorSubTitle} />
        <CardBody className="behaviour-list">
          <Row>
            <Col sm="4">
              <ListGroup>
                {BehaviourListNav.map((item, index) => (
                  <ListGroupItem action
                    key={index}
                    className={`${index === 0 ? "bg-primary" : "list-hover-primary"} ${activeList === item ? "active" : ""}`}
                    onClick={() => {
                      setActiveList(item);
                    }}
                  >
                    {item}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col sm="8">
              <JsBehaviorContent tabId={activeList} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
