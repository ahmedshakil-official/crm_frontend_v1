"use client";
import { Container, Row } from "reactstrap";
import { JustifyTab } from "./JustifyTab/JustifyTab";
import { MaterialLeftStyleTab } from "./MaterialLeftStyleTab/MaterialLeftStyleTab";
import { MaterialStyleTab } from "./MaterialStyleTab/MaterialStyleTab";
import {BorderTabs} from "./BorderTabs/BorderTabs";
import { SimpleTab } from "./SimpleTab/SimpleTab";
import { IconTabs } from "./IconTabs/IconTabs";
import { VerticalTab } from "./VerticalTab/VerticalTab";
import { PillsTab } from "./PillsTab/PillsTab";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { TabBootstrapTitle, UiKits } from "@/Constant";

const TabsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TabBootstrapTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <SimpleTab />
          <IconTabs />
          <VerticalTab />
          <PillsTab />
          <JustifyTab />
          <MaterialLeftStyleTab />
          <MaterialStyleTab />
          <BorderTabs />
        </Row>
      </Container>
    </>
  );
};
export default TabsContainer;
