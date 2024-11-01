import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ContextualClassTitle } from "@/Constant";
import { ContextualClassSubTitle, ContextualListData } from "@/Data/Uikits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const ContextualClass = () => {
  return (
    <Col xxl="6" sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={ContextualClassTitle} span={ContextualClassSubTitle} />
        <CardBody>
          <ListGroup>
            {ContextualListData &&
              ContextualListData.map((item, index) => (
                <ListGroupItem className={`list-light-${item.class}`} key={index}>
                  {item.htmlText}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
