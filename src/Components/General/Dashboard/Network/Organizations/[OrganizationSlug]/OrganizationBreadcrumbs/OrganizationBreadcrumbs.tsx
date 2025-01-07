import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

const OrganizationBreadcrumbs = () => {
  return (
    <Container fluid>
      <Row className="page-title">
        <Col sm="7">
          <h2>Organization Details</h2>
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
            <BreadcrumbItem className="active">
              <span className="fw-semibold">Dashboard</span>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">
              <Link href="/dashboard/network" className="text-primary">
                Network
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">Organization</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default OrganizationBreadcrumbs;
