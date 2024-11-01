import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgeHeadingsTitle } from "@/Constant";
import { BadgeHeadingSubTitle } from "@/Data/Uikits/Tag&Pills";
import { Badge, Card, CardBody, Col } from "reactstrap";

export const BadgeHeading = () => {
  return (
    <Col sm="12" xl="6" className="mb-lg-3 mb-0">
      <Card>
        <CommonCardHeader title={BadgeHeadingsTitle} span={BadgeHeadingSubTitle} />
        <CardBody className="bage-heading">
          <h1 className="pb-2 d-flex gap-2 flex-wrap align-items-center">
            {"Badge Heading 1"}
            <Badge className="btn-primary">{"Latest"}</Badge>
          </h1>
          <h2 className="pb-2 d-flex gap-2 flex-wrap align-items-center">
            {"Badge Heading 2"}
            <Badge className="btn-secondary">{"Trending"}</Badge>
          </h2>
          <h3 className="pb-2 d-flex gap-2 flex-wrap align-items-center">
            {"Badge Heading 3"}
            <Badge className="btn-success">{"Checkout"}</Badge>
          </h3>
          <h4 className="pb-2 d-flex gap-2 flex-wrap align-items-center">
            {"Badge Heading 4"}
            <Badge className="btn-warning">{"Inbox"}</Badge>
          </h4>
          <h5 className="pb-2 d-flex gap-2 flex-wrap align-items-center">
            {"Badge Heading 5"}
            <Badge className="btn-danger">{"Login"}</Badge>
          </h5>
          <h6 className="pb-2 d-flex gap-2 flex-wrap align-items-center">
            {"Badge Heading 6"}
            <Badge className="btn-dark">{"Logout"}</Badge>
          </h6>
        </CardBody>
      </Card>
    </Col>
  );
};
