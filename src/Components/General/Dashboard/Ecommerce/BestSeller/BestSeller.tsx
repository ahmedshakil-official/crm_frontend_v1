import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { BestSellerHeading, ImagePath } from "@/Constant";
import { BestSellerData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col, Table } from "reactstrap";

const BestSeller = () => {
  return (
    <Col xxl="6" xl="7" className="order-xl-1 order-xxl-0 box-col-12">
      <Card className="best-sell">
        <DashboardCommonHeader title={BestSellerHeading} />
        <CardBody className="pt-0">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone mt-0" id="best-sell" style={{ width: "100%" }}>
              <thead>
                <tr><th>Customer</th><th>Date</th><th>Product</th><th>Country</th><th>Total</th><th className="text-center">Status</th></tr>
              </thead>
              <tbody>
                {BestSellerData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round"><Image width={32} height={32} src={`${ImagePath}/${data.image}`} alt="BestSeller" /></div>
                        <div className="flex-grow-1">
                          <Link href={"/ecommerce/product"}><h6>{data.title}</h6></Link>
                          <p>{data.year}</p>
                        </div>
                      </div>
                    </td>
                    <td>{data.date}</td>
                    <td>{data.product}</td>
                    <td><img className="img-fluid" src={`${ImagePath}/${data.countryImage}`} alt="BestSeller" /></td>
                    <td>{data.total}</td>
                    <td className="text-end"><Button className={`bg-light-${data.color} border-light-${data.color} text-${data.color}`} color="">{data.status}</Button></td>
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

export default BestSeller;
