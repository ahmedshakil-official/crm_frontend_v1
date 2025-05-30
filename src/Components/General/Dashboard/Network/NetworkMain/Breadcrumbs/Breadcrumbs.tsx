import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

const NetworkBreadcrumbs = () => {
  return (
    <Container fluid>
      <Row className="page-title">
        <Col sm="6">
          <h2>Company Performance</h2>
          <p className="mb-0 text-title-gray">
          Here are your company stats for the period
          </p>
        </Col>
        <Col sm="6">
          <Breadcrumb className="justify-content-sm-end align-items-center">
            <BreadcrumbItem>
              <Link href={`/dashboard/network`}>
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
