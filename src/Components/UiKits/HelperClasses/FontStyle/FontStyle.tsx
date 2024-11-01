import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FontStyleTitle } from "@/Constant";
import { FontStyleData, FontStyleSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

export const FontStyle = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={FontStyleTitle} span={FontStyleSubTitle} />
        <CardBody className="helper-font">
          {FontStyleData &&
            FontStyleData.map((item) => (
              <p className={`${item.class} ${item.id !== 4 ? "mb-2" : ""}`} key={item.id}>
                {"This is a "} <b>{`.f-s-${item.text}`}</b> {" font-style"}
              </p>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
