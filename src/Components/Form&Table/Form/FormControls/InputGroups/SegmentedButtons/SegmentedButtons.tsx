import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Info, Secondary, SegmentedButtonsTitle } from "@/Constant";
import { SegmentedButtonsData1, SegmentedButtonsData2, SegmentedButtonsSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import ButtonDropdownList from "../ButtonsWithDropdowns/ButtonDropdownList";

export const SegmentedButtons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SegmentedButtonsTitle} span={SegmentedButtonsSubTitle} />
        <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
          <InputGroup>
            <Button color="info" outline>
              {Info}
            </Button>
            <ButtonDropdownList color="info" split={true} span={true} divider={true} options={SegmentedButtonsData1} />
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <Button color="secondary" outline>
              {Secondary}
            </Button>
            <ButtonDropdownList color="secondary" split={true} span={true} divider={true} options={SegmentedButtonsData2} />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
