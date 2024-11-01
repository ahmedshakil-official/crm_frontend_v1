"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, Invoice } from "@/Constant";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceAddSection from "./InvoiceAddSection";
import InvoiceAmountSection from "./InvoiceAmountSection";
import InvoiceHead from "./InvoiceHead";
import InvoiceTableBody from "./InvoiceTableBody";
import InvoiceTableHead from "./InvoiceTableHead";

const InvoiceThreeContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-3`} parent={Ecommerce} />
      <Container className="invoice-3 mb-4">
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <Table borderless style={{ width: 1160, margin: "0 auto" }}>
                  <tbody>
                    <InvoiceHead />
                    <InvoiceAddSection />            
                    <tr>
                      <td className="p-0">
                        <Table borderless style={{ width: "100%", borderSpacing: 0 }}>
                          <InvoiceTableHead/>
                          <InvoiceTableBody />
                        </Table>
                      </td>
                    </tr>
                    <InvoiceAmountSection />
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceThreeContainer;
