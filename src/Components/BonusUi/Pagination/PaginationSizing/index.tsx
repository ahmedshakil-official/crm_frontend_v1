import { Card, CardBody, Col } from "reactstrap";
import { PaginationSizings } from "@/Constant";
import { DynamicPaginationSizing } from "./DynamicPaginationSizing";
import { StaticPaginationSizing } from "./StaticPaginationSizing";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizingPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationSizing = () => {
  return (
    <Col xl="6">
      <Card className="height-equal pagination-sizing">
        <CommonCardHeader title={PaginationSizings} span={SizingPaginationData} />
        <CardBody className="pb-4">
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
