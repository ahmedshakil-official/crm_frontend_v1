import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListWithRadioTitle } from "@/Constant";
import { ListRadioData, ListWithRadioSubTitle } from "@/Data/Uikits/Lists";
import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

export const ListWithRadio = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ListWithRadioTitle} span={ListWithRadioSubTitle} />
        <CardBody>
          <ListGroup>
            {ListRadioData &&
              ListRadioData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`me-1 checkbox-${item.class}`} id={`firstRadio${index}`} type="radio" name="listGroupRadio" defaultChecked={item.check ? true : false} />
                  <Label className="mb-0" htmlFor={`firstRadio${index}`} check>
                    {" "}
                    {item.text}
                  </Label>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
