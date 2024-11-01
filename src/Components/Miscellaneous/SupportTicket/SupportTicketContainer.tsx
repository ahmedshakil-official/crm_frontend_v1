import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Apps, SupportTicket, SupportTicketList } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { SupportData } from "@/Data/Miscellaneous/SupportTicket/SupportTicketData";

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SupportTicket} parent={Apps} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={SupportTicketList} span={SupportData} />
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportTicketContainer;
