"use client";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ECommerce, Wishlist } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { WishlistData } from "./WishlistData";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const WishlistContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={Wishlist} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={Wishlist} />
              <CardBody>
                <WishlistData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    
  );
};

export default WishlistContainer;
