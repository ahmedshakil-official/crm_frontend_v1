import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, ScrollableListTitle } from "@/Constant";
import { ScrollableListData, ScrollableListSubTitle } from "@/Data/Uikits/Lists";
import Image from "next/image";
import React from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const ScrollableList = () => {
  return (
    <Col xxl="4">
      <Card>
        <CommonCardHeader title={ScrollableListTitle} span={ScrollableListSubTitle} />
        <CardBody>
          <ListGroup className="scrollbar-wrapper">
            {ScrollableListData &&
              ScrollableListData.map((item, index) => (
                <ListGroupItem action className={`list-hover-primary ${index === 0 ? "active" : ""}`} key={index}>
                  <div className="list-wrapper gap-0 pb-0">
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
        </CardBody>
      </Card>
    </Col>
  );
};
