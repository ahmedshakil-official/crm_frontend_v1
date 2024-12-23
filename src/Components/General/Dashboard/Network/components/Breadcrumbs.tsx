import { PropsTypes } from "@/Types/LayoutTypes";
import { SingleCaseProps } from "@/Types/Organization/CaseTypes";
import Link from "next/link";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";


const NetworkBreadcrumbs = () => {
  return (
    <Container fluid>
    <Row className="page-title">
      <Col sm="6">
        <h2>Network</h2>
        <p className="mb-0 text-title-gray">Welcome back! Let’s start from where you left.</p>
      </Col>
      <Col sm="6">
        <Breadcrumb className="justify-content-sm-end align-items-center">
          <BreadcrumbItem>
            <Link href={`/dashboard/default`}>
              <i className="iconly-Home icli svg-color" />
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
          <BreadcrumbItem className="active">Network</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  </Container>
  );
};

export default NetworkBreadcrumbs;
