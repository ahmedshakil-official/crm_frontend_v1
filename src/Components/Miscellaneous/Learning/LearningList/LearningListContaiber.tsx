'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainLearningCards from "./MainLearningCards";
import SmallLearningCards from "./SmallLearningCards";
import CourseFilter from "./CourseFilter";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Learning, LearningList } from "@/Constant";

const LearningListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LearningList} parent={Learning} />
      <Container fluid>
      <Row>
        <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12 learning-card">
          <Row>
            <MainLearningCards />
            <SmallLearningCards />
          </Row>
        </Col>
        <Col xl="3" className="xl-40 box-col-4e learning-filter learning-card">
          <CourseFilter />
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default LearningListContainer;
