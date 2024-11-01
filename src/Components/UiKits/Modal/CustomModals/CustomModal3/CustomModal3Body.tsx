import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Edit2 } from "react-feather";
import { BalanceItem } from "./BalanceItem";
import Image from "next/image";
import { ImagePath } from "@/Constant";

export const CustomModal3Body = () => {
  return (
    <Col xl="12">
      <Card className="balance-box mb-0">
        <CardBody>
          <div className="balance-profile">
            <div className="balance-img">
              <Image width={68} height={68} src={`${ImagePath}/avtar/4.jpg`} alt="user vector" />
              <a href={`/users/user_profile`} className="edit-icon">
                <div className="icon">
                  <Edit2 className="stroke-primary" />
                </div>
              </a>
            </div>
            <span className="font-dark d-block">{"Your Balance "} </span>
            <h4 className="mt-1">{"$768,987.90"}</h4>
            <BalanceItem />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
