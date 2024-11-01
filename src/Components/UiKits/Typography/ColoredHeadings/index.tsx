import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Code, ColoredHeadingTitle, Heading } from "@/Constant";
import { HeadingSubTitle } from "@/Data/Uikits/Typography";
import { Card, CardBody, Col, Table } from "reactstrap";
import { ColoredHeadBody } from "./ColoredHeadBody";

export const ColoredHeadings = () => {
  return (
    <Col xxl="4" xl="12">
      <Card>
        <CommonCardHeader title={ColoredHeadingTitle} span={HeadingSubTitle} />
        <CardBody>
          <div className="table-responsive custom-scroll">
            <Table className="mb-0 typography-table">
              <thead>
                <tr>
                  <th className="pt-0">{Code}</th>
                  <th className="pt-0">{Heading}</th>
                </tr>
              </thead>
              <ColoredHeadBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
