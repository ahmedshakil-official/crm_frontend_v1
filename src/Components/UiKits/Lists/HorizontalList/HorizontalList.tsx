import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalListTitle } from "@/Constant";
import { HorizontalColor, HorizontalListData, HorizontalListSubTitle } from "@/Data/Uikits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const HorizontalList = () => {
  return (
    <Col xxl="6" xs="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={HorizontalListTitle} span={HorizontalListSubTitle} />
        <CardBody>
          <div className="horizontal-list-wrapper">
            {HorizontalListData &&
              HorizontalListData.map((item, index) => (
                <ListGroup className={`fw-bold list-group-horizontal-${item.class}`} key={index}>
                  {item.data &&
                    item.data.map((data, i) => (
                      <ListGroupItem className={`${i === 0 && HorizontalColor[index]}`} key={i}>
                        {data}
                      </ListGroupItem>
                    ))}
                </ListGroup>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
