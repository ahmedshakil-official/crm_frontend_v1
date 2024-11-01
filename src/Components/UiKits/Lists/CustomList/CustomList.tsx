import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomListTitle, ImagePath } from "@/Constant";
import { CustomListData, CustomListSubTitle } from "@/Data/Uikits/Lists";
import Image from "next/image";
import React from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const CustomList = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={CustomListTitle} span={CustomListSubTitle} />
        <CardBody>
          <ListGroup className="main-lists-contents">
            {CustomListData &&
              CustomListData.map((item, index) => (
                <ListGroupItem action className={`${item.class}`} key={index}>
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="list-wrapper">
                      <Image width={55} height={55} className="list-img" src={`${ImagePath}/user/${item.image}`} alt="profile" />
                      <div className="list-content">
                        <h6>{item.head}</h6>
                        <p>{item.mail}</p>
                      </div>
                    </div>
                    <small className={index !== 0 ? "text-muted" : ""}>{item.span}</small>
                  </div>
                  <p className="mb-1">{item.subtext}</p>
                  <small className={index === 0 ? "text-white" : "text-muted"}>{item.follower}</small>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
