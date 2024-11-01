import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ImagePath, UserStatusHeading } from "@/Constant";
import { UserStatusData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Progress, Table } from "reactstrap";

const UserStatus = () => {
  return (
    <Col xxl="4" xl="5" md="7" className="box-col-5">
      <Card>
        <DashboardCommonHeader title={UserStatusHeading} />
        <CardBody className="pt-0 user-status">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone" id="user-status" style={{ width: "100%" }}>
              <thead>
                <tr><th>Customer</th><th>country</th><th className="text-center">Popular</th></tr>
              </thead>
              <tbody>
                {UserStatusData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round">
                          <Image width={32} height={32} src={`${ImagePath}/${data.image}`} alt="User Status" />
                        </div>
                        <div className="flex-grow-1">
                          <Link href={"/ecommerce/product"}><h6>{data.title} <span>{data.text}</span></h6></Link>
                        </div>
                      </div>
                    </td>
                    <td><h3>{data.country}</h3></td>
                    <td><Progress color={data.color} className={`bg-light-${data.color} `} value={data.progress} /></td>
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

export default UserStatus;
