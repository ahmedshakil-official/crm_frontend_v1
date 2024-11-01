import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconsCommonProps3 } from "@/Types/IconsTypes";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const IcoIconCard: React.FC<IconsCommonProps3> = ({ title, iconType, parentCallback }) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };
  return (
    <Card>
      <CommonCardHeader title={title} headClass="f-w-700" />
      <CardBody>
        <Row className="icon-event iconly-icons icon-lists">
          {iconType?.map((item, i) => (
            <Col xxl="2" lg="4" xs="12" md="6" className="icons-item" key={i} onClick={() => getITag(item)}>
              <Card className="d-flex align-items-center default-border m-0">
                <i className={`icofont icofont-${item}`}></i>
                <h5 className="mt-0 me-2">{item}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default IcoIconCard;
