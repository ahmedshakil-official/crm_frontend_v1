import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Href, ImagePath, TopUsersHeading } from "@/Constant";
import { TopUsersData } from "@/Data/General/Dashboard/Default/DefaultData";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col } from "reactstrap";

const TopUsers = () => {
  return (
    <Col xxl="3" xl="5" md="6" className="proorder-xxl-4 box-col-6">
      <Card>
        <DashboardCommonHeader title={TopUsersHeading} />
        <CardBody className="top-user pt-2">
          <ul>
            {TopUsersData.map((data, index) => (
              <li className="d-flex align-items-center justify-content-between gap-2" key={index}>
                <div className="d-flex gap-2">
                  <div className="flex-shrink-0 comman-round">
                    <Image width={31} height={31} src={`${ImagePath}/${data.image}`} alt="TopUsers" />
                  </div>
                  <div>
                    <Link href={Href}>
                      <h6>{data.title}</h6>
                    </Link>
                    <p>
                      <SvgIcon className="stroke-icon" iconId={data.icon} />
                      {data.text}
                    </p>
                  </div>
                </div>
                <Button className={`bg-light-${data.color} border-light-${data.color} text-${data.color}`} color="">
                  {data.button}
                </Button>
                <span>{data.price}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopUsers;
