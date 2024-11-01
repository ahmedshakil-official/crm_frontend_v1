import { ArticleData } from "@/Data/Miscellaneous/Faq/FaqData";
import { Card, CardBody, Col, Media } from "reactstrap";

const Articles = () => {
  return (
    <>
      {ArticleData.map((item) => (
        <Col xl="4" sm={item.sm} className={`"box-col-${item.box}`} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <Media className="faq-widgets d-flex">
                <Media body className="flex-grow-1">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                </Media>
                {item.icon}
              </Media>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default Articles;
