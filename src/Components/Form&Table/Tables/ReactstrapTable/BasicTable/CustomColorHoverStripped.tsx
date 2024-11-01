import { Card, Col } from "reactstrap";
import { CustomColorHoverStrippedTitle } from "@/Constant";
import { CustomColorHoverBody, CustomColorHoverData, CustomColorHoverHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTableData";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

export const CustomColorHoverStripped=()=> {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomColorHoverStrippedTitle} span={CustomColorHoverData} />
        <CommonTable strip hover tableClass="bg-primary inverse-primary" headClass="tbl-strip-thad-bdr" headData={CustomColorHoverHead}>
          {CustomColorHoverBody.map((data) => (
            <tr key={data.id}>
              <th className={data.class} scope="row">{data.id}</th>
              <td className={data.class}>{data.title}</td>
              <td className={data.class}>{data.year}</td>
              <td className={data.class}>{data.studio}</td>
              <td className={data.class}>{data.budget}</td>
              <td className={data.class}>{data.boxOffice}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
}
