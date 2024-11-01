"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, ScrollableTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BadgesScrollbar } from "./BadgesScrollbar/BadgesScrollbar";
import { BothSideScrollbar } from "./BothSideScrollbar/BothSideScrollbar";
import { CustomScrollbar } from "./CustomScrollbar/CustomScrollbar";
import { HorizontalScrollbar } from "./HorizontalScrollbar/HorizontalScrollbar";
import { ProfileScrollable } from "./ProfileScrollable/ProfileScrollable";
import { ScrollableContent } from "./ScrollableContent/ScrollableContent";
import { SmallSizeScroll } from "./SmallSizeScroll/SmallSizeScroll";

const ScrollableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ScrollableTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <CustomScrollbar />
          <SmallSizeScroll />
          <BadgesScrollbar />
          <ProfileScrollable />
          <ScrollableContent />
          <HorizontalScrollbar />
          <BothSideScrollbar />
        </Row>
      </Container>
    </>
  );
};

export default ScrollableContainer;
