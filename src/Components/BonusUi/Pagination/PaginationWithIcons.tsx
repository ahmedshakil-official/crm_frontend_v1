import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { PaginationWithIcon, Href } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationWithIcons = () => {
  const NextData: string[] = ["1", "2", "3"];

  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={PaginationWithIcon} span={IconPaginationData} />
        <CardBody>
          <Pagination className="pagination-success">
            <PaginationItem active>
              <PaginationLink href={Href} first></PaginationLink>
            </PaginationItem>
            {NextData.map((item, index) => (
              <PaginationItem key={index}>
                <PaginationLink href={Href}>{item}</PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink href={Href} last></PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationWithIcons;
