import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SlideOnly } from "@/Constant";
import { SlidesOnlyData, SlidesOnlyDataList } from "@/Data/BonusUi/ReactstrapCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={SlideOnly} span={SlidesOnlyData} />
        <CardBody>
          <CommonCarousel data={SlidesOnlyDataList} interval="2000"  />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlidesOnly;
