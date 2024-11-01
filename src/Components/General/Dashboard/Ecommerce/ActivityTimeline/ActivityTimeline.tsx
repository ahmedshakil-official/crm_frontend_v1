import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ActivityTimelineHeading, ImagePath } from "@/Constant";
import { ActivityTimelineData } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import Image from "next/image";
import { Badge, Card, CardBody, Col } from "reactstrap";

const ActivityTimeline = () => {
  return (
    <Col xxl="3" xl="5" sm="6" className="box-col-6">
      <Card>
        <DashboardCommonHeader title={ActivityTimelineHeading} />
        <CardBody className="timeline-card">
          <div className="activity-timeline">
            {ActivityTimelineData.map((data, index) => (
              <div className="d-flex align-items-start" key={index}>
                <div className="activity-line" />
                <div className={`activity-dot-${data.color}`} />
                <div className="flex-grow-1">
                  <p className="mt-0 todo-font">
                    <span className={`font-${data.color}`}>{data.date}</span>&nbsp;{data.day}
                    {data.badge && <Badge className={`ms-2`} color={data.color}>New</Badge>}
                  </p>
                  <span className="f-w-700">{data.title}</span>
                  <p className="mb-0 activity-text">{data.text}</p>
                  {data.badge && (
                    <ul className="img-wrapper">
                      <li>
                        <Image width={42} height={40} className="img-fluid" src={`${ImagePath}/dashboard-2/timeline/5.png`} alt="Activity Timeline" />
                      </li>
                      <li>
                        <Image width={43} height={39} className="img-fluid" src={`${ImagePath}/dashboard-2/timeline/6.png`} alt="Activity Timeline" />
                      </li>
                    </ul>
                  )}
                </div>
                <i className={`fa fa-circle circle-dot-${data.color} pull-right`} />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityTimeline;
