import { Card, Col, Row } from "reactstrap";
import { ResponsiveLightBackgroundTitle } from "@/Constant";
import { ResponsiveLightBackgroundBody, ResponsiveLightBackgroundData, ResponsiveLightBackgroundHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTableData";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

export const ResponsiveLightBackground=()=> {
  return (
    <Col sm="12">
      <Card className="custom-light-background">
        <CommonCardHeader title={ResponsiveLightBackgroundTitle} span={ResponsiveLightBackgroundData} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable tableClass="light-card" headData={ResponsiveLightBackgroundHead}>
              {ResponsiveLightBackgroundBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.task}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.assign}</td>
                  <td>{data.date}</td>
                  <td>{data.price}</td> 
                  <td className={`font-${data.color}`}>{data.status}</td>
                  <td>{data.progress}</td> 
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
