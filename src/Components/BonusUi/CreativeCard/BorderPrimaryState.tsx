import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BryanOwens, GloriaAcheson, Href, ImagePath, PrimaryBorderState, TeresaMoselles } from "@/Constant";
import { BorderPrimaryData } from "@/Data/BonusUi/CreativeCard";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const BorderPrimaryState = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader headClass="border-l-primary" title={PrimaryBorderState} span={BorderPrimaryData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem action active tag="a" href={Href}><Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" />{TeresaMoselles}</ListGroupItem>
            <ListGroupItem action tag="a" href={Href}><Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/3.png`} alt="user" />{GloriaAcheson}</ListGroupItem>
            <ListGroupItem action tag="a" href={Href}><Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/5.jpg`} alt="user" />{BryanOwens}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderPrimaryState;
