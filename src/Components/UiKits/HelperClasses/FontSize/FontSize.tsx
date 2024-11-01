import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FontSizeTitle } from "@/Constant";
import { FontSizeData, FontSizeSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

export const FontSize = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={FontSizeTitle} span={FontSizeSubTitle} />
        <CardBody>
          <div className="gradient-border">
            {FontSizeData &&
              FontSizeData.map((item, index) => (
                <div className="font-wrapper border" key={index}>
                  <div className={`fs-${item}`}>{`Font-size .fs-${item}`}</div>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
