import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { DefaultPaginationTitle, Href } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultPaginationData } from "@/Data/BonusUi/Pagination";

const DefaultPagination = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultPaginationTitle} span={DefaultPaginationData} />
        <CardBody>
          <Pagination className="pagination-primary pagin-border-primary">
            <PaginationItem><PaginationLink href={Href} previous>Previous</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href} next>Next</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultPagination;
