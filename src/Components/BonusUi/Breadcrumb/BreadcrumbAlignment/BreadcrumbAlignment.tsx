import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BreadcrumbAlignmentTitle } from "@/Constant";
import { BreadcrumbAlignmentData, BreadcrumbAlignmentSubTitle } from "@/Data/BonusUi/Breadcrumb";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

export const BreadcrumbAlignment = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={BreadcrumbAlignmentTitle} span={BreadcrumbAlignmentSubTitle} />
        <CardBody>
          {BreadcrumbAlignmentData.map((item) => (
            <Breadcrumb key={item.id} className="mb-0" listClassName={`justify-content-${item.align} breadcrumb-${item.color} mb-1`}>
              <BreadcrumbItem>{"Home"}</BreadcrumbItem>
              <BreadcrumbItem>{"Ui Kits"}</BreadcrumbItem>
              <BreadcrumbItem>{"Grid"}</BreadcrumbItem>
            </Breadcrumb>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
