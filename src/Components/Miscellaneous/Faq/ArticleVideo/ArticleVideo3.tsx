import { ArticleDataThird } from "@/Data/Miscellaneous/Faq/FaqData";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

const ArticleVideo3 = () => {
  return (
    <Col xl="4">
      <Row>
        {ArticleDataThird.map((item, i) => (
          <Col xl="12" md="6" key={i}>
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
export default ArticleVideo3;
