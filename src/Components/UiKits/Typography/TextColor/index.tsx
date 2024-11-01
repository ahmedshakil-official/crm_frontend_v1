import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TextColorTitle } from "@/Constant";
import { TextColorData, TextColorSubTitle } from "@/Data/Uikits/Typography";
import { Card, CardBody, Col } from "reactstrap";

export const TextColor = () => {
  return (
    <Col xl="12" xxl="6">
      <Card>
        <CommonCardHeader title={TextColorTitle} span={TextColorSubTitle} />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            {TextColorData &&
              TextColorData.map((item, index) => (
                <p key={index} className={`mb-0 text-${item.class}`}>
                  {item.text}
                  <code>{`.text-${item.class}`}</code> {"class."}
                </p>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
