import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { RoundedPaginationTitle, Href } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RoundedPaginationData } from "@/Data/BonusUi/Pagination";

const RoundedPagination = () => {
  const NextData: string[] = ["1", "2", "...", "20"];

  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={RoundedPaginationTitle} span={RoundedPaginationData} />
        <CardBody>
          <Pagination className="pagination-secondary pagination-dark pagin-border-dark">
            <PaginationItem>
              <PaginationLink className="rounded-circle me-2" href={Href} first></PaginationLink>
            </PaginationItem>
            {NextData.map((item, index) => (
              <PaginationItem key={index} active={index === 2 && true}>
                <PaginationLink className="rounded-circle me-2" href={Href}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink className="rounded-circle me-2" href={Href} last></PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedPagination;
