import { ArticleDataTwo } from "@/Data/Miscellaneous/Faq/FaqData";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

const ArticleVideo2 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticleDataTwo.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <Media className="d-flex">
                  {item.iconClass}
                  <Media body className="flex-grow-1">
                    <h5 className="pb-2 f-w-600">{item.title}</h5>
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
export default ArticleVideo2;
