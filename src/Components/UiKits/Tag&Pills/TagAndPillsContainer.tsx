"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { TagPillsTitle, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BadgeButton } from "./BadgeButton/BadgeButton";
import { BadgeHeading } from "./BadgeHeading/BadgeHeading";
import { BadgeWithIcon } from "./BadgeWithIcon/BadgeWithIcon";
import { BadgesContextual } from "./BadgesContextual/BadgesContextual";
import { NumberBadges } from "./NumberBadges/NumberBadges";
import { NumberPills } from "./NumberPills/NumberPills";
import { PillsContextual } from "./PillsContextual/PillsContextual";
import { PillsIcon } from "./PillsIcon/PillsIcon";

const TagAndPillsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TagPillsTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <BadgesContextual />
          <PillsContextual />
          <NumberBadges />
          <NumberPills />
          <BadgeWithIcon />
          <PillsIcon />
          <BadgeHeading />
          <BadgeButton />
        </Row>
      </Container>
    </>
  );
};
export default TagAndPillsContainer;
