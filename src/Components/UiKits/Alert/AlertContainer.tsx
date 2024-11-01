"use client";
import { Container, Row } from "reactstrap";
import { AdditionalAlert } from "./AdditionalAlert";
import { AlertWithIcons } from "./AlertWithIcons";
import { DismissingDarkAlert } from "./DismissingDarkAlert";
import { DismissingLightAlert } from "./DismissingLightAlert";
import { LeftBorderAlert } from "./LeftBorderAlert";
import { LinkDarkColor } from "./LinkDarkColor";
import { LinkLightColor } from "./LinkLightColor";
import { LiveAlert } from "./LiveAlert";
import { OutlineAlert } from "./OutlineAlert";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Alert, UiKits } from "@/Constant";

const AlertContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Alert} parent={UiKits} />
      <Container fluid>
        <Row>
          <LinkDarkColor />
          <LinkLightColor />
          <OutlineAlert />
          <AlertWithIcons />
          <DismissingDarkAlert />
          <DismissingLightAlert />
          <LiveAlert />
          <LeftBorderAlert />
          <AdditionalAlert />
        </Row>
      </Container>
    </>
  );
};
export default AlertContainer;
