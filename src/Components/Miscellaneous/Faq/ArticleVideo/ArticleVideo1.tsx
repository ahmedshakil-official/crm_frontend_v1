import { ArticleDataOne } from "@/Data/Miscellaneous/Faq/FaqData";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

export const ArticleVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticleDataOne.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <Media className="d-flex">
                  {item.iconClass}
                  <Media body className="flex-grow-1">
                    <h5 className="mb-2 f-w-600">{item.title}</h5>
                    <p>{item.description}</p>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
