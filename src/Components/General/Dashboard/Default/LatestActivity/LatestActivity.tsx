import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Href, LatestActivityHeading } from "@/Constant";
import { LatestActivityData } from "@/Data/General/Dashboard/Default/DefaultData";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const LatestActivity = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="proorder-xxl-12 box-col-6">
      <Card>
        <DashboardCommonHeader title={LatestActivityHeading} />
        <CardBody className="latest-activity">
          <ul>
            {LatestActivityData.map((item, index) => (
              <li className="d-flex align-items-center gap-2" key={index}>
                <div className={`flex-shrink-0 bg-light-${item.color} border-light-${item.color}`}>
                  <SvgIcon iconId={item.icon} className={`stroke-icon stroke-${item.color}`} />
                </div>
                <div className="flex-grow-1">
                  <Link href={Href}>
                    <h6>{item.title}</h6>
                  </Link>
                  <p>{item.text}</p>
                </div>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestActivity;
