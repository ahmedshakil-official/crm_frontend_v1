import { CourseBy, Href, UpcomingCoursesHeading } from "@/Constant";
import { UpcomingCourseData } from "@/Data/Miscellaneous/Learning/learningData";
import Link from "next/link";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, Col, Collapse, Media } from "reactstrap";
import CommonLearningHeader from "./Common/CommonLearningHeader";

const UpcomingCourses = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Col xl="12">
      <Card>
        <CommonLearningHeader heading={UpcomingCoursesHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="upcoming-course">
            {UpcomingCourseData.map((data, index) => (
              <Media className="common-space d-flex" key={index}>
                <Media body className="flex-grow-1">
                  <span className="f-w-700">{data.courseHeading}</span>
                  <span className="d-block">
                    {CourseBy} <Link href={Href}>{data.courseTeam}</Link>
                  </span>
                  <span className="d-block">
                    <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={17} />
                  </span>
                </Media>
                <div>
                  <h5 className="mb-0 font-primary">{data.courseDate}</h5>
                  <span className="d-block">{data.courseMonth}</span>
                </div>
              </Media>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default UpcomingCourses;
