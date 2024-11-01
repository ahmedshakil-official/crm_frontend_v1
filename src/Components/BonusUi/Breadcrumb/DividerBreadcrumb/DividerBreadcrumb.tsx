import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DividerBreadcrumbTitle, Href } from "@/Constant";
import { DividerBreadcrumbSubTitle } from "@/Data/BonusUi/Breadcrumb";
import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

export const DividerBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={DividerBreadcrumbTitle} span={DividerBreadcrumbSubTitle} />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon mb-2" listClassName="breadcrumb-style2 mb-0">
            <BreadcrumbItem href={Href}>{"Home"}</BreadcrumbItem>
            <BreadcrumbItem active>{"Bonus Ui"}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="mb-0 breadcrumb-icon" listClassName="breadcrumb-style2 mb-0">
            <BreadcrumbItem href={Href}>{"Home"}</BreadcrumbItem>
            <BreadcrumbItem href={Href}>{"Ui Kits"}</BreadcrumbItem>
            <BreadcrumbItem active>{"Grid"}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};
