import { ImagePath } from "@/Constant";
import { JobData } from "@/Data/Miscellaneous/JobSearch/JobSearchData";
import { SimilarJobsCardsType } from "@/Types/MiscellaneousType";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

const SimilarJobsCards:React.FC<SimilarJobsCardsType> = ({limit,jobClass,ribbon: ribbon,column}) => {
  return (
    <Row>
      {JobData.slice(0, 5).map((item) => (
        <Col
          className={`col-auto ${limit === item.id && column? "col-xl-12 xl-100": jobClass}`} key={item.id}>
          <Card className={`${item.ribbons && ribbon ? "ribbon-vertical-left-wrapper" : ""}`}>
            {item.ribbons ? (
              <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbon && "d-none"}`}>
                <i className="icofont icofont-love"></i>
              </div>
            ) : (" ")}
            <div className="job-search">
              <CardBody>
                <div className="d-flex">
                  <Image width={40} height={40} className="img-40 b-r-0 img-fluid m-r-20" src={`${ImagePath}/${item.logo}`} alt=""/>
                  <div className="flex-grow-1">
                    <h5>
                      <Link className="f-w-700" href={`/job_search/job_detail`}>{item.job_name}</Link>
                      {item.type === "new" ? (<Badge color="primary" className="pull-right">{item.badgeValue}</Badge>) : 
                      (<span className="pull-right">{item.type}</span>)}
                    </h5>
                    <p>
                      {item.job_area}, {item.job_city}
                      <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={14}/>
                    </p>
                  </div>
                </div>
                <p>{item.Job_description}</p>
              </CardBody>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SimilarJobsCards;
