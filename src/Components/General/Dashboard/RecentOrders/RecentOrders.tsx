import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ImagePath, RecentOrdersHeading } from "@/Constant";
import { RecentOrdersData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Progress, Table } from "reactstrap";

const RecentOrders = () => {
  return (
    <Col xxl="6" xl="7" className="box-col-12">
      <Card>
        <DashboardCommonHeader title={RecentOrdersHeading} />
        <CardBody className="pt-0 recent-order">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone mt-0" id="recent-order" style={{ width: "100%" }}>
              <thead>
                <tr><th>Customer</th><th>Product</th><th>amount</th><th>vendor</th><th>status</th><th className="text-center">rating</th></tr>
              </thead>
              <tbody>
                {RecentOrdersData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round"><Image width={32} height={32} src={`${ImagePath}/${data.image}`} alt="Recent Orders" /></div>
                        <div className="flex-grow-1">
                          <Link href={"/ecommerce/product"}><h6>{data.title}</h6></Link>
                          <p>{data.text}</p>
                        </div>
                      </div>
                    </td>
                    <td className="f-w-600">{data.product}</td>
                    <td className="font-primary f-w-600">{data.amount}</td>
                    <td className="f-w-600">{data.vendor}</td>
                    <td>
                      <div className="status-showcase"><p>{data.status}%</p><Progress value={data.status} className={`bg-light-${data.color}`} color={data.color} /></div>
                    </td>
                    <td className="text-end"><h6>{data.rating}<span>{data.votes}</span></h6></td>
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

export default RecentOrders;
