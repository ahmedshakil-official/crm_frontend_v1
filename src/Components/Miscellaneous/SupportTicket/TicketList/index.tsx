import { Row, Col, Card, CardBody, Progress } from "reactstrap";
import CountUp from "react-countup";
import ProfitAndLoss from "./ProfitAndLoss";
import { TicketData } from "@/Data/Miscellaneous/SupportTicket/SupportTicketData";

const TicketList = () => {
  return (
    <Row>
      {TicketData.map((item, index) => (
        <Col xl="4" md="6" className="box-col-6" key={index}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span>{item.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={item.num} className="mb-1" delay={1} />
                  </h3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase">
                <Progress value={70} className="sm-progress-bar" color={item.class} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
