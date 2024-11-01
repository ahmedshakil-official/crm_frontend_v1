"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, Invoice } from "@/Constant";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { InvoiceHeadSection } from "./InvoiceHeadSection";
import { InvoiceDateSection } from "./InvoiceDateSection";
import { InvoiceAddressSection } from "./InvoiceAddressSection";
import { InvoiceTableHead } from "./InvoiceTableHead";
import { InvoiceTableBody } from "./InvoiceTableBody";
import { InvoiceTexSection } from "./InvoiceTexSection";

const InvoiceTwoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-2`} parent={Ecommerce} />
      <Container className="invoice-2">
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody></CardBody>
              <Table borderless style={{ width: 1160, margin: "5px auto" }} className="mb-4">
                <tbody>
                  <tr><InvoiceHeadSection /></tr>
                  <tr><InvoiceDateSection /></tr>
                  <tr><InvoiceAddressSection /></tr>
                  <tr>
                    <td className="p-0">
                      <Table borderless style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px solid rgba(82, 82, 108, 0.1)" }}>
                        <InvoiceTableHead />
                        <InvoiceTableBody />
                      </Table>
                    </td>
                  </tr>
                  <tr><InvoiceTexSection /></tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceTwoContainer;
