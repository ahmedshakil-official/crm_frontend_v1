"use client";
import React from "react";
import { ActiveButtonTitle, BoldButtonTitle, ButtonsTitle, DefaultButtonTitle, DisabledButtonTitle, EdgeButtonTitle, FlatButtonTitle, LargeButtonTitle, OutlineButtonTitle, SmallButtonTitle } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import { CommonButtons } from "./Common/CommonButtons";
import { ActiveButtonsData, ActiveButtonsSubTitle, BoldButtonsSubTitle, BoldOutlineButtonsData, DefaultButtonsData, DefaultButtonsSubTitle, DisabledButtonsData, DisabledButtonsSubTitle, EdgeButtonsData, EdgeButtonsSubTitle, FlatButtonsData, FlatButtonsSubTitle, LargeButtonsData, LargeButtonsSubTitle, OutlineButtonsData, OutlineButtonsSubTitle, SmallButtonsData, SmallButtonsSubTitle } from "@/Data/Buttons/ButtonsData";
import ButtonsGroup from "./ButtonsGroup";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

export default function ButtonsContainer() {
  return (
    <>
      <Breadcrumbs mainTitle={ButtonsTitle} parent={ButtonsTitle} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonTitle} subTitle={DefaultButtonsSubTitle} />
            <CommonButtons commonButtonsData={FlatButtonsData} title={FlatButtonTitle} subTitle={FlatButtonsSubTitle} />
            <CommonButtons commonButtonsData={EdgeButtonsData} title={EdgeButtonTitle} subTitle={EdgeButtonsSubTitle} />
            <ButtonsGroup />
            <CommonButtons commonButtonsData={LargeButtonsData} title={LargeButtonTitle} subTitle={LargeButtonsSubTitle} />
            <CommonButtons commonButtonsData={SmallButtonsData} title={SmallButtonTitle} subTitle={SmallButtonsSubTitle} />
            <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonTitle} subTitle={ActiveButtonsSubTitle} />
            <CommonButtons commonButtonsData={DisabledButtonsData} title={DisabledButtonTitle} subTitle={DisabledButtonsSubTitle} />
            <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonTitle} subTitle={OutlineButtonsSubTitle} />
            <CommonButtons commonButtonsData={BoldOutlineButtonsData} title={BoldButtonTitle} subTitle={BoldButtonsSubTitle} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
