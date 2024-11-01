import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AlertWithIconsTitle } from "@/Constant";
import { AlertWithIconSubTitle } from "@/Data/Uikits/Alert";
import { Card, CardBody, Col } from "reactstrap";
import { HeartAlert } from "./HeartAlert";
import { TimeAlert } from "./TimeAlert";

export const AlertWithIcons = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={AlertWithIconsTitle} span={AlertWithIconSubTitle} />
        <CardBody className="text-dark">
          <TimeAlert />
          <HeartAlert />
        </CardBody>
      </Card>
    </Col>
  );
};
