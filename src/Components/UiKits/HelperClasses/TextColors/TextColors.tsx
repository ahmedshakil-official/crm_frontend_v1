import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TextColorsTitle } from "@/Constant";
import { BorderColorData, TextColorSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

export const TextColors = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={TextColorsTitle} span={TextColorSubTitle} />
        <CardBody>
          {BorderColorData &&
            BorderColorData.slice(0, 6).map((item, index) => (
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={`font-${item}`}>
                  {"This is a "} <b>{`font-${item}`}</b> {` text used class as .font-${item}`}
                </div>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
