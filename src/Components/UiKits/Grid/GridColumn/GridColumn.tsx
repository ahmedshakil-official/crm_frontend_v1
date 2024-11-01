import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GridColumnTitle } from "@/Constant";
import { GridColumnData, GridColumnSubTitle } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

export const GridColumn = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridColumnTitle} span={GridColumnSubTitle} />
        <CardBody className="grid-showcase">
          <Row>
            {GridColumnData &&
              GridColumnData.map((item, index) => (
                <Col md={item} className="text-center" key={index}>
                  <span>{`col-md-${item}`}</span>
                </Col>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
