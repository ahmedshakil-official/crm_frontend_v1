import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultBreadcrumbTitle, Href } from "@/Constant";
import { DefaultBreadcrumbSubTitle } from "@/Data/BonusUi/Breadcrumb";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

export const DefaultBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={DefaultBreadcrumbTitle} span={DefaultBreadcrumbSubTitle} />
        <CardBody>
          <Breadcrumb className="mb-2" listClassName="mb-0">
            <BreadcrumbItem href={Href}>{"Home"}</BreadcrumbItem>
            <BreadcrumbItem active>{"Ui Kits"}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="mb-0" listClassName="mb-0">
            <BreadcrumbItem href={Href}>{"Home"}</BreadcrumbItem>
            <BreadcrumbItem href={Href}>{"Ui Kits"}</BreadcrumbItem>
            <BreadcrumbItem active>{"Alert"}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};
