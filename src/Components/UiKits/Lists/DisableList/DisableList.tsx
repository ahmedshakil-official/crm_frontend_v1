import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisableListTitle, ImagePath } from "@/Constant";
import { DisableListData, DisableListSubTitle } from "@/Data/Uikits/Lists";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const DisableList = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={DisableListTitle} span={DisableListSubTitle} />
        <CardBody>
          <ListGroup>
            {DisableListData &&
              DisableListData.map((item, index) => (
                <ListGroupItem action className={`${item.class}`} key={index}>
                  <Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="user" />
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
