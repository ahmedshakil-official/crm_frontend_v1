"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { Ecommerce, Invoice } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const InvoiceSixContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-6`} parent={Ecommerce} />
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="invoice">
                  <div>
                    <InvoiceSixHeader />
                    <hr />
                    <UserDetails />
                    <InvoiceSixTable />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceSixContainer;
