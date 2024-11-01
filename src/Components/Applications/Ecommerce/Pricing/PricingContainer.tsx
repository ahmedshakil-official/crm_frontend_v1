'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import BecomeMember from "./BecomeMember";
import SimplePricingCard from "./SimplePricingCard";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { ECommerce, Pricing } from "@/Constant";

const PricingContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={Pricing} parent={ECommerce}/>
      <Container fluid>
        <Row>
          <Col sm="12">
            <BecomeMember />
            <SimplePricingCard />
          </Col>
        </Row>
      </Container>
    </>
   
  );
};

export default PricingContainer;
