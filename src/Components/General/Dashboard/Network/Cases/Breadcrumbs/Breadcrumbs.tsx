import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

const Breadcrumbs = () => {
  return (
    <Container fluid>
      <Row className="page-title">
        <Col sm="6">
          <h2>Network Performance</h2>
          <p className="mb-0 text-title-gray">Hello there!</p>
        </Col>
        <Col sm="6">
          <Breadcrumb className="justify-content-sm-end align-items-center">
            <BreadcrumbItem>
              <Link href={`/dashboard/network`}>
                <i className="iconly-Home icli svg-color" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <BreadcrumbItem>Network</BreadcrumbItem>
            <BreadcrumbItem className="active">Cases</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default Breadcrumbs;
