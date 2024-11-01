import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { AssignmentsHeading, ImagePath } from "@/Constant";
import { AssignmentsData } from "@/Data/General/Dashboard/Education/EducationData";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col, Table } from "reactstrap";

const Assignments = () => {
  return (
    <Col xxl="6" xl="7" md="6" className="order-xxl-0 order-xl-3 box-col-7 box-order-2">
      <Card>
        <DashboardCommonHeader title={AssignmentsHeading} />
        <CardBody className="pt-0 assignment-table">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone pt-0" id="assignment" style={{ width: "100%" }}>
              <thead>
                <tr><th>Customer</th><th>Subject</th><th>Start Date</th><th className="text-center">Status</th><th className="text-center">submit date</th></tr>
              </thead>
              <tbody>
                {AssignmentsData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 comman-round"><Image width={32} height={32} src={`${ImagePath}/${data.image}`} alt="Assignments" /></div>
                        <div className="flex-grow-1">
                          <Link href="/ecommerce/productpage"><h6>{data.title}</h6></Link>
                          <p>{data.year}</p>
                        </div>
                      </div>
                    </td>
                    <td><h6 className="f-w-600">{data.subject}</h6></td>
                    <td className="f-w-600">{data.date}</td>
                    <td className="text-end"><Button className={`bg-light-${data.color} border-light-${data.color} text-${data.color}`} color="">{data.status}</Button></td>
                    <td className="f-w-600 text-center">{data.submitDate}</td>
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

export default Assignments;
