import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListWithCheckboxTitle } from "@/Constant";
import { ListCheckboxData, ListWithCheckboxSubTitle } from "@/Data/Uikits/Lists";
import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

export const ListWithCheckbox = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ListWithCheckboxTitle} span={ListWithCheckboxSubTitle} />
        <CardBody>
          <ListGroup>
            {ListCheckboxData &&
              ListCheckboxData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`me-2 checkbox-${item.class} ${index === 0 ? "active" : ""}`} id={item.idFor} type="checkbox" />
                  <Label className={`mb-0 text-${item.class}`} htmlFor={item.idFor} check>
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
