import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { RecentOrdersData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import Link from "next/link";

import { Card, CardBody, Col, Progress, Table } from "reactstrap";

const MeetingHistory = () => {
  return (
    <Col lg="6" sm="12" className="box-col-12">
      <Card>
        <DashboardCommonHeader title="Meeting History" />
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
                {RecentOrdersData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round">
                          <h3 className="bg-success rounded-start-circle p-2">AA</h3>
                        </div>
                        <div className="flex-grow-1">
                          <Link href={"/ecommerce/product"}>
                            <h6>{data.title}</h6>
                          </Link>
                          <p>{data.text}</p>
                        </div>
                      </div>
                    </td>
                    <td className="f-w-600">{data.product}</td>
                    <td className="font-primary f-w-600">{data.amount}</td>
                    <td className="f-w-600">{data.vendor}</td>
                    <td>
                      <div className="status-showcase">
                        <p>{data.status}%</p>
                        <Progress
                          value={data.status}
                          className={`bg-light-${data.color}`}
                          color={data.color}
                        />
                      </div>
                    </td>
                    <td className="text-end">
                      <h6>
                        {data.rating}
                        <span>{data.votes}</span>
                      </h6>
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
