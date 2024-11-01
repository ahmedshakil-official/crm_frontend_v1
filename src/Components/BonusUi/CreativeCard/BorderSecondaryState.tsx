import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { SecondaryBorderState } from "@/Constant";
import { BorderSeconadaryData, BorderSeconadaryDataList } from "@/Data/BonusUi/CreativeCard";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const BorderSecondaryState = () => {
  return (
    <Col xxl="4" sm="12">
      <Card className="height-equal">
        <CommonCardHeader headClass="border-l-secondary" title={SecondaryBorderState} span={BorderSeconadaryData} />
        <CardBody className="scroll-demo">
          <ListGroup numbered className="scroll-rtl">
            <ListGroupItem className="d-flex align-items-start flex-wrap">
              <div className="ms-2 me-auto">Stella Nowland</div>
              <Badge color="warning" pill className="p-2">Freelance</Badge>
            </ListGroupItem>
            {BorderSeconadaryDataList.map(({title,color,tag}, index) => (
              <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                <div className="ms-2 me-auto">{title}</div>
                <Badge color={color} pill className="p-2">{tag}</Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderSecondaryState;
