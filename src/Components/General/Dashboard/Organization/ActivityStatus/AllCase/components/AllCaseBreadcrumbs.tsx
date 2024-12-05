import { PropsTypes } from "@/Types/LayoutTypes";
import Link from "next/link";
import React from "react";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

const AllCaseBreadcrumbs: React.FC<PropsTypes> = ({ mainTitle, parent }) => {
  return (
    <Container fluid>
      <Row className="page-title">
        <Col sm="6">
          <h2>All Case</h2>
          <p className="mb-0 text-title-gray">
            Welcome! Continue your journey.
          </p>
        </Col>
        <Col sm="6">
          <Breadcrumb className="justify-content-sm-end align-items-center">
            <BreadcrumbItem>
              <Link href={`/dashboard/default`}>
                <i className="iconly-Home icli svg-color" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{parent}</BreadcrumbItem>
            <BreadcrumbItem className="active">{mainTitle}</BreadcrumbItem>
            <BreadcrumbItem className="active">Allcase</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default AllCaseBreadcrumbs;
