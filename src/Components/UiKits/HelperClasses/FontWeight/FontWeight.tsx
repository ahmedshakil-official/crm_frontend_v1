import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FontWeightTitle } from "@/Constant";
import { FontWeightData, FontWeightSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

export const FontWeight = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FontWeightTitle} span={FontWeightSubTitle} />
        <CardBody>
          {FontWeightData &&
            FontWeightData.map((item) => (
              <div className={`d-flex align-items-center gap-2 ${item.id !== 6 ? "mb-2" : ""}`} key={item.id}>
                <div className={`f-w-${item.class}`}>
                  <span>{`You can set ${item.text} font weight heading .f-w-${item.class}`}</span>
                </div>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
