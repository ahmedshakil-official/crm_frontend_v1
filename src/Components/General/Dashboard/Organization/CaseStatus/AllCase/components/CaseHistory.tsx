import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";

const CaseHistory = () => {
  return (
    <Col xxl="5" xl="4" lg="12" className="proorder-xxl-8 box-col-7">
      <Card>
        <CardHeader>
          <h3>Employees Completed Case</h3>
        </CardHeader>
        <CardBody className=" pt-2">
          <Table responsive bordered>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Successful Case</th>
                <th>Unuccessful Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name 1</td>
                <td>3</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CaseHistory;
