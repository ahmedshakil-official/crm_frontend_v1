import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ImagePath, NewCoursesHeading } from "@/Constant";
import { NewCoursesData } from "@/Data/General/Dashboard/Education/EducationData";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col, Table } from "reactstrap";

const NewCourses = () => {
  return (
    <Col xxl="3" xl="6" lg="6" md="7" className="order-xxl-0 order-xl-4 box-col-6">
      <Card>
        <DashboardCommonHeader title={NewCoursesHeading} />
        <CardBody className="course-table pt-0">
          <div className="table-responsive">
            <Table className="table-bordernone">
              <tbody>
                {NewCoursesData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0 comman-round">
                          <div className="icon">
                            <Image width={31} height={31} className="img-fluid" src={`${ImagePath}/${data.image}`} alt="chair" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <Link href="/ecommerce/productpage">
                            <h5>{data.title}</h5>
                          </Link>
                          <p>{data.text}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>{data.class}</h5>
                      <p>{data.hours}</p>
                    </td>
                    <td>{data.day}</td>
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

export default NewCourses;
