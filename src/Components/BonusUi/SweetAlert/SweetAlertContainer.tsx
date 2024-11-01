"use client";
import { Container, Row } from "reactstrap";
import { AdvanceAlert } from "./AdvanceAlert/AdvanceAlert";
import { BasicAlert } from "./BasicAlert/BasicAlert";
import { DangerAlert } from "./DangerAlert/DangerAlert";
import { DirectionSweetalert } from "./DirectionSweetalert/DirectionSweetalert";
import { GithubAvatar } from "./GithubAvatar/GithubAvatar";
import { InputSweetalert } from "./InputSweetalert/InputSweetalert";
import { RtlSupport } from "./RtlSupport/RtlSupport";
import { SuccessMessage } from "./SuccessMessage/SuccessMessage";
import { UniqueSweetalert } from "./UniqueSweetalert/UniqueSweetalert";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, SweetalertTitle } from "@/Constant";

const SweetAlertContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SweetalertTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicAlert />
          <AdvanceAlert />
          <UniqueSweetalert />
          <DirectionSweetalert />
          <InputSweetalert />
          <GithubAvatar />
          <RtlSupport />
          <SuccessMessage />
          <DangerAlert />
        </Row>
      </Container>
    </>
  );
};
export default SweetAlertContainer;
