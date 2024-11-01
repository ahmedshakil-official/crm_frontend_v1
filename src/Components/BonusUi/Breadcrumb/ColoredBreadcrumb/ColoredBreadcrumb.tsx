import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColoredBreadcrumbTitle, Href } from "@/Constant";
import { ColorBreadcrumbSubTitle, ColoredBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

export const ColoredBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={ColoredBreadcrumbTitle} span={ColorBreadcrumbSubTitle} />
        <CardBody className="color-breadcrumb">
          {ColoredBreadcrumbData.map((data) => (
            <Breadcrumb className="mb-0" listClassName={`bg-${data.color}`} key={data.id}>
              {data.item.map((list, index) => ( 
                <BreadcrumbItem href={Href} key={index}>
                  {list}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
