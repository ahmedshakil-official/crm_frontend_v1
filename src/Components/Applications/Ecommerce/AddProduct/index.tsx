import React from "react";
import { AddProduct, ECommerce, ProductForm } from "@/Constant";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import ProductBody from "./ProductBody";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";


const AddProductContainer = () => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <>
      <Breadcrumbs mainTitle={AddProduct} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h3>{ProductForm}</h3>
              </CardHeader>
              <CardBody>
                <ProductBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProductContainer;
