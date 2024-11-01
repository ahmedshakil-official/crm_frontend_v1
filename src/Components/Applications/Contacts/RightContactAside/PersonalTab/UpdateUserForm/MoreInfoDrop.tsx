import { DayList, MonthList } from "@/Data/Applications/Contacts/Contacts";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export const MoreInfoDrop = () => {
  return (
    <>
      <Col md={12}>
        <FormGroup className="mt-0">
          <Row>
            <Col sm={4} lg={2}>
              <Input type="select" id="birth_day">
                <option className="f-w-600">{"Day"}</option>
                {DayList.map((list, i) => (
                  <option key={i}>{list}</option>
                ))}
              </Input>
            </Col>
            <Col sm={4} lg={3}>
              <Input type="select">
                <option className="f-w-600">{"Month"}</option>
                {MonthList.map((list, index) => (
                  <option key={index}>{list}</option>
                ))}
              </Input>
            </Col>
            <Col sm={4} lg={3}>
              <Input id="birth_year" type="text" />
            </Col>
          </Row>
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup className="mt-0">
          <Row>
            <Col sm={6}>
              <Label>{"Personality"}</Label>
            </Col>
            <Input type="text" required />
            <Col sm={6}>
              <Label>{"Interest"}</Label>
            </Col>
            <Input type="text" required />
          </Row>
        </FormGroup>
      </Col>
    </>
  );
}
