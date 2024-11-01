"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, BreadcrumbTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BreadcrumbAlignment } from "./BreadcrumbAlignment/BreadcrumbAlignment";
import { ColoredBreadcrumb } from "./ColoredBreadcrumb/ColoredBreadcrumb";
import { DefaultBreadcrumb } from "./DefaultBreadcrumb/DefaultBreadcrumb";
import { DividerBreadcrumb } from "./DividerBreadcrumb/DividerBreadcrumb";
import { SimpleBreadcrumb } from "./SimpleBreadcrumb/SimpleBreadcrumb";
import { WithIconBreadcrumb } from "./WithIconBreadcrumb/WithIconBreadcrumb";

const BreadcrumbContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BreadcrumbTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultBreadcrumb />
          <DividerBreadcrumb />
          <WithIconBreadcrumb />
          <SimpleBreadcrumb />
          <BreadcrumbAlignment />
          <ColoredBreadcrumb />
        </Row>
      </Container>
    </>
  );
};
export default BreadcrumbContainer;
