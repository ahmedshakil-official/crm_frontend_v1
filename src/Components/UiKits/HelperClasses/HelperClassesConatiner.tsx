"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { HelperClassTitle, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BackgroundColors } from "./BackgroundColors/BackgroundColors";
import { BorderColor } from "./BorderColor/BorderColor";
import { BorderStyles } from "./BorderStyles/BorderStyles";
import { Borders } from "./Borders/Borders";
import { FontSize } from "./FontSize/FontSize";
import { FontStyle } from "./FontStyle/FontStyle";
import { FontWeight } from "./FontWeight/FontWeight";
import { ImageSize } from "./ImageSize/ImageSize";
import { TextColors } from "./TextColors/TextColors";

const HelperClassContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={HelperClassTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <Borders />
          <BorderStyles />
          <BackgroundColors />
          <BorderColor />
          <ImageSize />
          <FontStyle />
          <FontWeight />
          <TextColors />
          <FontSize />
        </Row>
      </Container>
    </>
  );
};
export default HelperClassContainer;
