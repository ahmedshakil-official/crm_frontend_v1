import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BlockquotesTitle } from "@/Constant";
import { BlockQuotesData, BlockQuotesSubTitle } from "@/Data/Uikits/Typography";
import { Card, CardBody, Col } from "reactstrap";

export const BlockQuotesCard = () => {
  return (
    <Col xl="12">
      <Card className="overflow-hidden">
        <CommonCardHeader title={BlockquotesTitle} span={BlockQuotesSubTitle} />
        <CardBody>
          {BlockQuotesData &&
            BlockQuotesData.map((item, index) => (
              <div key={index} className={`figure d-block dark-blockquote text-${item.class}`}>
                <blockquote className={`blockquote ${item.blockClass}`}>
                  <p className="mb-0 f-16">{item.text}</p>
                  <span className="blockquote-footer">{item.footer}</span>
                </blockquote>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
