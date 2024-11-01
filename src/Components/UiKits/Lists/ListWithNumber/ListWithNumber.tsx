import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListWithNumberTitle } from "@/Constant";
import { ListWithNumberSubTitle, NumberListData } from "@/Data/Uikits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const ListWithNumber = () => {
  return (
    <Col xxl="4" xs="12">
      <Card>
        <CommonCardHeader title={ListWithNumberTitle} span={ListWithNumberSubTitle} />
        <CardBody>
          <ListGroup numbered>
            {NumberListData &&
              NumberListData.map((item, index) => (
                <ListGroupItem className={`fw-bold text-${item.class}`} key={index}>
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
