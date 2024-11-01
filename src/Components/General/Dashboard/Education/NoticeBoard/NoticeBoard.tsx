import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ImagePath, NoticeBoardHeading } from "@/Constant";
import { NoticeBoardData } from "@/Data/General/Dashboard/Education/EducationData";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const NoticeBoard = () => {
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-5 box-order-1">
      <Card>
        <DashboardCommonHeader title={NoticeBoardHeading} />
        <CardBody className="notice-board">
          <ul>
            {NoticeBoardData.map((data, index) => (
              <li className="d-flex gap-2" key={index}>
                <div className="flex-shrink-0">
                  <Image width={47} height={33} className="img-fluid" src={`${ImagePath}/${data.image}`} alt="Notice Board" />
                </div>
                <div className="flex-grow-1">
                  <h6>{data.title}</h6>
                  <p className="text-truncate">{data.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NoticeBoard;
