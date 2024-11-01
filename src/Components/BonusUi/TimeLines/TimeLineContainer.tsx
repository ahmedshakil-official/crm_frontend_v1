"use client";
import { Container, Row } from "reactstrap";
import BasicTimeline from "./BasicTimeline";
import HoveringTimeline from "./HoveringTimeline";
import VariationTimeline from "./VariationTimeline";
import HorizontalTimeline from "./HorizontalTimeline";
import Timelines from "./Timelines";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, TimelineTitle } from "@/Constant";

const TimelineContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TimelineTitle} parent={BonusUi} />
      <Container fluid>
      <Row>
        <BasicTimeline />
        <HoveringTimeline />
        <VariationTimeline />
        <HorizontalTimeline />
        <Timelines />
      </Row>
    </Container>
    </>
   
  );
};

export default TimelineContainer;