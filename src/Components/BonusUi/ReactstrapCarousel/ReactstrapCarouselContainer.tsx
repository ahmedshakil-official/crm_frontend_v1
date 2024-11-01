"use client";
import { Container, Row } from "reactstrap";
import SlidesOnly from "./SlidesOnly";
import WithControls from "./WithControls";
import AutoPlayVariant from "./AutoPlayVariant";
import WithIndicators from "./WithIndicators";
import WithCaptions from "./WithCaptions";
import CrossFade from "./CrossFade";
import IndividualInterval from "./IndividualInterval";
import DisableTouchSwiping from "./DisableTouchSwiping";
import DarkVariant from "./DarkVariant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, ReactstrapCarousel } from "@/Constant";
import MouseWheelVariant from "./MouseWheelVariant";

const ReactstrapCarouselContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ReactstrapCarousel} parent={BonusUi} />
      <Container fluid>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <MouseWheelVariant />
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
      </Container>
    </>
  );
};

export default ReactstrapCarouselContainer;
