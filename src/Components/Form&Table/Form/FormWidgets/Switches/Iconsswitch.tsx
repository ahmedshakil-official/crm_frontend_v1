import { Card, CardBody, Col, Label, Media } from "reactstrap";
import { IconsSwitches as IconsSwitches } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconSwitchData, IconSwitchDataList } from "@/Data/Form&Table/Form/FormWidgets";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const IconsSwitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={IconsSwitches} span={IconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {IconSwitchDataList.map(({ color, text }, index) => (
            <Media key={index} className="d-flex">
              <Media body className="text-end icon-state">
                <CommonSwitchSpan color={color} defaultChecked/>
              </Media>
              <Label className="m-l-10 ms-3" check>{text}</Label>
            </Media>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsSwitch;
