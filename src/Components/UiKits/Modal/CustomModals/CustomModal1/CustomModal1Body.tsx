import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CheckCircle } from "react-feather";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { DemoModalData } from "@/Data/Uikits/Modal";

export const CustomModal1Body = () => {
  return (
    <Col xl="12">
      <Card className="social-profile mb-0">
        <CardBody>
          <div className="social-img-wrap">
            <div className="social-img">
              <Image width={68} height={68} src={`${ImagePath}/avtar/3.jpg`} alt="profile" />
            </div>
            <div className="edit-icon">
              <div className="icon">
                <CheckCircle className="stroke-primary" />
              </div>
            </div>
          </div>
          <div className="social-details">
            <h4 className="mb-1">
              <a href={`/app/social_app`}>{"Brooklyn Simmons"}</a>
            </h4>
            <span className="font-dark">{"@brookly.simmons"}</span>
            <ul className="social-follow">
              {DemoModalData &&
                DemoModalData.map((item, index) => (
                  <li key={index}>
                    <h4 className="mb-0">{item.class}</h4>
                    <span className="font-dark">{item.text}</span>
                  </li>
                ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
