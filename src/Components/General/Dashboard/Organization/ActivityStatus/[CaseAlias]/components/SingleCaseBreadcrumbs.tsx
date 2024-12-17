import { PropsTypes } from "@/Types/LayoutTypes";
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
import { SingleCaseProps } from "../page";

const SingleCaseBreadcrumbs: React.FC<PropsTypes & SingleCaseProps> = ({
  mainTitle,
  parent,
  caseInfo,
  isLoading,
}) => {
  return (
    <Container fluid>
      <Row className="page-title">
        <Col sm="7">
          <h2>
            Case Details{" "}
            <span>
              {isLoading ? (
                <Spinner animation="border" role="status" className="ms-2" />
              ) : (
                <strong>({caseInfo?.name || "No Case Name"})</strong>
              )}
            </span>
          </h2>
          <p className="mb-0 text-title-gray">
            Welcome! Continue your journey.
          </p>
        </Col>
        <Col sm="5" className="mt-md-0 mt-2">
          <Breadcrumb className="justify-content-sm-end align-items-center">
            <BreadcrumbItem>
              <Link href={`/dashboard/default`}>
                <i className="iconly-Home icli svg-color" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{parent}</BreadcrumbItem>
            <BreadcrumbItem className="active">
              <Link href="/dashboard/organization" className="text-primary">
                {mainTitle}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">
              <Link
                href="/dashboard/organization/allcase"
                className="text-primary"
              >
                AllCase
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">case</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCaseBreadcrumbs;
