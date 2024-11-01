import { CommonDropdown } from "@/Components/General/Common/DashboardCommonHeader/CommonDropdown";
import { ImagePath } from "@/Constant";
import { GraphicDesignData } from "@/Data/General/Dashboard/Education/EducationData";
import Image from "next/image";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const GraphicDesign = () => {
  return (
    <>
      {GraphicDesignData.map((data, index) => (
        <Col xxl="4" xl="4" md="4" key={index}>
          <Card className="graphic-design overflow-hidden">
            <CardHeader className="card-no-border pb-0">
              <div className="header-top">
                <div className="d-flex align-items-center gap-2">
                  <div className="flex-shrink-0">
                    <div className="icon">
                      <Image width={53} height={53} className="img-fluid" src={`${ImagePath}/${data.image}`} alt="chair" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>{data.title}</h5>
                    <p className="mb-0">{data.text}</p>
                  </div>
                </div>
                <CommonDropdown />
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <ul>
                <li><i className="iconly-Document fa fa-file-text-o me-1" /><h5>{data.lessons}</h5></li>
                <li><i className="iconly-Time-Square fa fa-clock-o me-1" /><h5>{data.hours}</h5></li>
                <li><i className="iconly-User3 fa fa-users me-1" /><h5>{data.students}</h5></li>
                <li><i className="iconly-Star fa fa-star-o me-1" /><h5>{data.value}</h5></li>
              </ul> 
              <div className="crypto-dashborad-chart"><ReactApexChart options={data.chart} series={data.chart.series} height={170} type="area" className={data.class} /></div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default GraphicDesign;
