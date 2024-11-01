import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { AuditLogHeading, Href, ImagePath } from "@/Constant";
import { AuditLogData } from "@/Data/General/Dashboard/Default/DefaultData";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const AuditLog = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="proorder-xxl-9 box-col-5">
      <Card>
        <DashboardCommonHeader title={AuditLogHeading} />
        <CardBody className="audit-log">
          <ul>
            {AuditLogData.map((data, index) => (
              <li className="d-flex align-items-center gap-2" key={index}>
                <div className={`flex-shrink-0 bg-${data.bgColor}`}>
                  <Image width={16} height={16} src={`${ImagePath}/${data.icon}`} alt="AuditLog" />
                </div>
                <div className="flex-grow-1">
                  <Link href={Href}>
                    <h6>{data.title}</h6>
                  </Link>
                  <p>{data.name}</p>
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

export default AuditLog;
