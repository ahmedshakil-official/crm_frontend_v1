import { Card, Col } from "reactstrap";
import { InverseTableWithPrimaryBackgrounds } from "@/Constant";
import { InverseTableWithBackgroundBody, InverseTableWithBackgroundData, InverseTableWithBackgroundHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTableData";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

export const InverseTablePrimary=()=> {
  return (
    <Col sm="12">
        <Card>
         <CommonCardHeader title={InverseTableWithPrimaryBackgrounds} span={InverseTableWithBackgroundData} />
         <CommonTable strip headData={InverseTableWithBackgroundHead} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' >
            {InverseTableWithBackgroundBody.map((data) => (
              <tr key={data.id} >
                <th className={data.class} scope="row">{data.id}</th>
                <td className={data.class}>{data.firstName}</td>
                <td className={data.class}>{data.lastName}</td>
                <td className={data.class}>{data.company}</td>
                <td className={data.class}>{data.salary}</td>
                <td className={data.class}>{data.email}</td>
                <td className={data.class}>{data.position}</td>
                <td className={data.class}>{data.country}</td>
              </tr>
            ))}
         </CommonTable>
        </Card>
    </Col>
  )
}