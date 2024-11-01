import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Href, ImagePath, NewsAndUpdateHeading } from "@/Constant";
import { NewsAndUpdateData } from "@/Data/General/Dashboard/Default/DefaultData";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const NewsAndUpdate = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="proorder-xxl-10 box-col-6">
      <Card className="height-equal">
        <DashboardCommonHeader title={NewsAndUpdateHeading} />
        <CardBody className="news-update">
          <ul>
            {NewsAndUpdateData.map((data, index) => (
              <li className="d-flex gap-2" key={index}>
                <div className="flex-shrink-0">
                  <Image width={47} height={33} className="img-fluid" src={`${ImagePath}/${data.image}`} alt="NewsAndUpdate" />
                </div>
                <div className="flex-grow-1">
                  <Link href={Href}>
                    <h6>{data.title}</h6>
                  </Link>
                  <p className="text-truncate">{data.text}</p>
                </div>
                <span>{data.time}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewsAndUpdate;
