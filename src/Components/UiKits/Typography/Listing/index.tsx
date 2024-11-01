import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListingTypography } from "@/Constant";
import { ListingSubTitle } from "@/Data/Uikits/Typography";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DescriptionList } from "./DescriptionList";
import { OrderList } from "./OrderList";
import UnorderList from "./UnorderList";

export const Listing = () => {
  return (
    <Col xl="12" className="listing">
      <Card>
        <CommonCardHeader title={ListingTypography} span={ListingSubTitle} />
        <CardBody>
          <Row className="g-3">
            <UnorderList />
            <OrderList />
            <DescriptionList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
