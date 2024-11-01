import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderColorTitle } from "@/Constant";
import { BorderColorSubTitle, BorderSideColorData } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

export const BorderColor = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BorderColorTitle} span={BorderColorSubTitle} />
        <CardBody>
          <div className="gradient-border">
            {BorderSideColorData &&
              BorderSideColorData.map((item, index) => (
                <div className="helper-common-box" key={index}>
                  <div className={`helper-box b-${item} border fill-wrapper`} />
                  <span>{`b-${item}`}</span>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
