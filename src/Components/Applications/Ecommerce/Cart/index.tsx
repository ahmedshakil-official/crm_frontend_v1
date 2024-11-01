"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Cart, ECommerce } from "@/Constant";
import { Card, CardBody, Col, Container } from "reactstrap";
import { CartData } from "./CartData";

const CartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Cart} parent={ECommerce} />
      <Container fluid>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={Cart} />
            <CardBody>
              <CartData />
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default CartContainer;
