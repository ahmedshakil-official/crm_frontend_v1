import { DisplayHeadingTitle } from "@/Constant";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export const DisplayHeading = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeader className="card-no-border pb-0">
          <h4>{DisplayHeadingTitle}</h4>
          <p className="desc mb-0 mt-1">
            <span>{"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a"}</span>
            <code>{" display heading "}</code>
            <span>{"- a larger, slightly more opinionated heading style."}</span>
          </p>
        </CardHeader>
        <CardBody className="d-flex flex-column gap-2">
          {[...Array(4)].map((_, index) => (
            <h1 className={`display-${index+1}`} key={index}>{`Display ${index+1}`}</h1>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
