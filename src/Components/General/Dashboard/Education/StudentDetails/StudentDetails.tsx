import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ImagePath, StudentDetailsHeading } from "@/Constant";
import { StudentDetailsData } from "@/Data/General/Dashboard/Education/EducationData";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col, Table } from "reactstrap";

const StudentDetails = () => {
  return (
    <Col xxl="6" xl="7" sm="6" className="order-xxl-0 order-xl-1 box-col-12">
      <Card>
        <DashboardCommonHeader title={StudentDetailsHeading} />
        <CardBody className="pt-0 details-table">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone mt-0" id="student-detail" style={{ width: "100%" }}>
              <thead>
                <tr><th>Customer</th><th>Product</th><th>QTY</th><th>Attendance</th><th className="text-center">rating</th></tr>
              </thead>
              <tbody>
                {StudentDetailsData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round">
                          <Image width={32} height={32} src={`${ImagePath}/${data.image}`} alt="Student Details" />
                        </div>
                        <div className="flex-grow-1"><Link href={"/ecommerce/product"}><h6>{data.title}</h6></Link>
                          <p>{data.year}</p>
                        </div>
                      </div>
                    </td>
                    <td><h6 className="f-w-600">{data.product}</h6></td>
                    <td className="f-w-600">{data.qty}</td>
                    <td className="f-w-600 text-center">{data.attendance}</td>
                    <td className="text-end">
                      <Button className={`bg-light-${data.color} border-light-${data.color} text-${data.color}`} color="">{data.rating}</Button>
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

export default StudentDetails;
