import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GridOptionsTitle } from "@/Constant";
import { GridOptionsSubTitle } from "@/Data/Uikits/Grid";
import { Card, CardBody, Col, Table } from "reactstrap";
import { GridTableBody } from "./GridTableBody";
import { GridTableHead } from "./GridTableHead";

export const GridOptions = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridOptionsTitle} span={GridOptionsSubTitle} />
        <CardBody>
          <div className="table-responsive">
            <Table bordered striped>
              <GridTableHead />
              <GridTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
