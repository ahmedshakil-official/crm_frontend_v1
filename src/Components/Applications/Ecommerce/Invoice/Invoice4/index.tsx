"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, ImagePath, Invoice } from "@/Constant";
import Image from "next/image";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceDateSection from "./InvoiceDateSection";
import InvoiceHead from "./InvoiceHead";
import InvoiceTable from "./InvoiceTableHead";
import InvoiceTaxSection from "./InvoiceTaxSection";

const InvoiceFourContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-4`} parent={Ecommerce} />
      <Container className="invoice-2">
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <Table borderless style={{ width: 1160, margin: "0 auto" }}>
                  <tbody>
                    <InvoiceHead />
                    <InvoiceDateSection />
                    <tr>
                      <td className="p-0">
                        <InvoiceTable />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #308e87 20.61%, #54BA4A 103.6%)", display: "block", padding: "0px" }} />
                    </tr>
                    <InvoiceTaxSection />
                    <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                      <td className="p-0">
                        <Image width={154} height={49} src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
                        <span style={{ display: "block", fontSize: 18, fontWeight: 600 }}>Laurine T. Ebbert</span>
                        <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
                      </td>
                    </tr>
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

export default InvoiceFourContainer;
