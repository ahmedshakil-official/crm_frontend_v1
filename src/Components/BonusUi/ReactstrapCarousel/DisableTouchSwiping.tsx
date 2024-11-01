import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisableTouchSwipingTitle } from "@/Constant";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/ReactstrapCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={DisableTouchSwipingTitle} span={DisableTouchData} />
        <CardBody>
          <CommonCarousel data={DisableTouchDataList} control/>
        </CardBody>
      </Card>
    </Col>
  )
};

export default DisableTouchSwiping;
