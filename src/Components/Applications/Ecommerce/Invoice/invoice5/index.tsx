"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, ImagePath, Invoice } from "@/Constant";
import Image from "next/image";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceDateSection from "./InvoiceDateSection";
import InvoiceHead from "./InvoiceHead";
import InvoiceTableHead from "./InvoiceTableHead";

const InvoiceFiveContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-5`} parent={Ecommerce} />
      <Container>
        <Row>
          <Col className="invoice-2">
            <Card>
              <CardBody>
                <Table borderless style={{ width: 1160, margin: "0 auto" }}>
                  <tbody>
                    <InvoiceHead />
                    <InvoiceDateSection />
                    <tr>
                      <td className="p-0">
                        <InvoiceTableHead />
                      </td>
                    </tr>
                    <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "36px" }}>
                      <td>
                        <Image width={154} height={49} src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
                        <span style={{ display: "block", fontSize: "18px", fontWeight: 600 }}>Laurine T. Ebbert</span>
                        <span style={{ display: "block", fontSize: "14px", paddingTop: "5px" }}>( Designer )</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <InvoiceButtons />
      </Container>
    </>
  );
};

export default InvoiceFiveContainer;
