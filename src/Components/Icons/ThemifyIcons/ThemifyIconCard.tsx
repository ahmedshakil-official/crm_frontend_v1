import { IconsCommonProps2 } from "@/Types/IconsTypes";
import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const ThemifyIconCard: React.FC<IconsCommonProps2> = ({ iconType, title, parentCallback }) => {
  const getITag = (tag: string | undefined) => {
    parentCallback(tag);
  };

  return (
    <>
      <Col xl="12">
        <Card>
          <CardHeader className="f-w-700">
            <h3>{title}</h3>
          </CardHeader>
          <CardBody>
            <Row className="icon-event iconly-icons icon-lists">
              {iconType.map((icon, i) => {
                return (
                  <Col xxl="2" lg="4" xs="12" className="icons-item" key={i} onClick={() => getITag(icon)}>
                    <Card className="d-flex align-items-center default-border m-0">
                      <i className={icon}></i>
                      <h5 className="mt-0 me-2">{icon}</h5>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ThemifyIconCard;
