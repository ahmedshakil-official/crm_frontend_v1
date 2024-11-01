import { Card, CardBody, Col, Table } from "reactstrap";
import { HeadingBody } from "./HeadingBody";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Code, FontSize, Heading, HeadingsTitle } from "@/Constant";
import { HeadingSubTitle } from "@/Data/Uikits/Typography";

export const Headings = () => {
  return (
    <Col xxl="8" xl="12">
      <Card>
        <CommonCardHeader title={HeadingsTitle} span={HeadingSubTitle} />
        <CardBody>
          <div className="table-responsive custom-scroll">
            <Table className="mb-0 typography-table">
              <thead>
                <tr>
                  <th className="pt-0">{Code}</th>
                  <th className="pt-0">{FontSize}</th>
                  <th className="pt-0">{Heading}</th>
                </tr>
              </thead>
              <HeadingBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
