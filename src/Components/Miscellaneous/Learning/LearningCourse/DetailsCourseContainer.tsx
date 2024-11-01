"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { DetailedCourse, Learning } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import CourseFilter from "../LearningList/CourseFilter";
import BlogSingle from "./BlogSingle";

const DetailsCourseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DetailedCourse} parent={Learning} />
      <Container fluid>
        <Row>
          <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12 learning-details">
            <BlogSingle />
          </Col>
          <Col xl="3" className="xl-40 box-col-12 learning-filter learning-card">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailsCourseContainer;
