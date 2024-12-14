"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DragCalendar from "./DragCalendar/DragCalendar";

const CalenderContainer = () => {
  return (
    <>
      <Container fluid className="calendar-basic">
        <Card>
          <CardBody>
            <Row>
              <Col sm="12">
                <Row>
                  <DragCalendar />
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CalenderContainer;
