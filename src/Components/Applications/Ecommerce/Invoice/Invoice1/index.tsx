"use client";
import React, { useRef } from "react";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceBackImage from "./InvoiceBackImage";
import InvoiceContent from "./InvoiceContent";
import InvoiceOrder from "./InvoiceOrder";
import InvoiceSign from "./InvoiceSign";
import { useReactToPrint } from "react-to-print";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, Invoice } from "@/Constant";

const Invoice1Container = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-1`} parent={Ecommerce} />
      <div ref={componentRef}>
        <Container>
          <Row>
            <Col sm="12">
              <Card className="invoice-1">
                <CardBody>
                  <Table className="table-wrapper" borderless>
                    <tbody>
                      <tr>
                        <InvoiceHeader />
                      </tr>
                      <tr>
                        <InvoiceBackImage />
                      </tr>
                      <tr>
                        <InvoiceContent />
                      </tr>
                      <tr>
                        <InvoiceOrder />
                      </tr>
                    </tbody>
                    <tbody>
                      <InvoiceSign />
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <InvoiceButtons handlePrint={handlePrint} />
    </>
  );
};

export default Invoice1Container;
