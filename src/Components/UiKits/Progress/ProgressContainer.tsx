"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { ProgressBarTitle, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { AnimatedProgress } from "./AnimatedProgress/AnimatedProgress";
import { BasicProgress } from "./BasicProgress/BasicProgress";
import { CustomProgress } from "./CustomProgress/CustomProgress";
import { CustomSizes } from "./CustomSizes/CustomSizes";
import { LargeProgress } from "./LargeProgress/LargeProgress";
import { MultipleBars } from "./MultipleBars/MultipleBars";
import { SmallProgress } from "./SmallProgress/SmallProgress";
import { StepsBar } from "./StepsBar/StepsBar";
import { StripedProgress } from "./StripedProgress/StripedProgress";

const ProgressContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProgressBarTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicProgress />
        </Row>
        <Row>
          <StripedProgress />
          <AnimatedProgress />
        </Row>
        <Row>
          <MultipleBars />
          <StepsBar />
        </Row>
        <CustomProgress />
        <Row>
          <SmallProgress />
          <LargeProgress />
        </Row>
        <CustomSizes />
      </Container>
    </>
  );
};
export default ProgressContainer;
