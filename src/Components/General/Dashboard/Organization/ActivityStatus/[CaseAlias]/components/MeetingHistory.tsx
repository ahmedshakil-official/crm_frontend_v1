import { RecentOrdersData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";

import { Button, Card, CardBody, CardHeader, Col, Table } from "reactstrap";

const MeetingHistory = () => {
  return (
    <Col lg="6" sm="12" className="box-col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <h3 className="mb-2">Meeting History</h3>
          {/* <Button color="primary">Add Joint User</Button> */}
        </CardHeader>
        <CardBody className="pt-0 recent-order">
          <div className="table-responsive theme-scrollbar">
            <Table
              className="display table-bordernone mt-0"
              id="recent-order"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>amount</th>
                  <th>vendor</th>
                  <th>status</th>
                  <th className="text-center">rating</th>
                </tr>
              </thead>
              <tbody>
                {RecentOrdersData.slice(0, 4).map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round">
                          <h3 className="bg-success rounded-circle p-2">AA</h3>
                        </div>
                        <div className="flex-grow-1">
                          <h6>{data.title}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="f-w-600">{data.product}</td>
                    <td className="font-primary f-w-600">{data.amount}</td>
                    <td className="f-w-600">{data.vendor}</td>
                    <td>
                      <div className="status-showcase">
                        <p>{data.status}%</p>
                      </div>
                    </td>
                    <td className="text-end">
                      <h6>{data.rating}</h6>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MeetingHistory;
