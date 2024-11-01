"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FormWidgets, Switch } from "@/Constant";
import { Container, Row } from "reactstrap";
import BordersWithIcons from "./BordersWithIcons";
import CustomSwitch from "./CustomSwitch";
import DisabledOutlineSwitch from "./DisabledOutlineSwitch";
import IconsSwitch from "./Iconsswitch";
import SwitchSizing from "./SwitchSizing";
import SwitchWithIcons from "./SwitchWithIcons";
import UncheckedSwitch from "./UncheckedSwitch";
import VariationOfSwitches from "./VariationOfSwitches";

const SwitchesContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Switch} parent={FormWidgets} />
      <Container fluid>
        <Row>
          <CustomSwitch />
          <IconsSwitch />
          <UncheckedSwitch />
          <BordersWithIcons />
          <DisabledOutlineSwitch />
          <VariationOfSwitches />
          <SwitchSizing />
          <SwitchWithIcons />
        </Row>
      </Container>
    </>

  );
};

export default SwitchesContainer;
