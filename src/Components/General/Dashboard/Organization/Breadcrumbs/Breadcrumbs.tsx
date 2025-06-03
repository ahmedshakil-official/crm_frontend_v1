import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

interface OrganizationBreadcrumbsProps {
  mainTitle: string;
  title: string;
  parent?: string;
  activePage?: string;
}

const OrganizationBreadcrumbs: React.FC<OrganizationBreadcrumbsProps> = ({
  mainTitle,
  title,
  activePage,
  parent,
}) => {
  return (
    <Container fluid>
      <Row className="page-title">
        <Col sm="6">
          <h2>{mainTitle}</h2>
          <p className="mb-0 text-title-gray">{title}</p>
        </Col>
        <Col sm="6">
          <Breadcrumb className="justify-content-sm-end align-items-center">
            <BreadcrumbItem>
              <Link href={`/dashboard/organization`}>
                <i className="iconly-Home icli svg-color" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            {parent && <BreadcrumbItem>{parent}</BreadcrumbItem>}
            {activePage && (
              <BreadcrumbItem className="active">{activePage}</BreadcrumbItem>
            )}
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default OrganizationBreadcrumbs;
