'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BillingDetails, CheckOutTitle, ECommerce } from "@/Constant";
import { Card, CardBody, Container, Row } from "reactstrap";
import CheckoutTableData from "./CheckoutTableData";
import ProductCheckout from "./ProductCheckout";

const CheckOutContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CheckOutTitle} parent={ECommerce} />
      <Container fluid>
        <Card className="checkout custom-billing">
          <CommonCardHeader title={BillingDetails} />
          <CardBody>
            <Row>
              <CheckoutTableData />
              <ProductCheckout />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CheckOutContainer;
