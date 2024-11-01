"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Common";
import JobApply from "./JobApply";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Apply, JobSearch } from "@/Constant";

const JobApplyContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Apply} parent={JobSearch} />
      <Container fluid>
        <Row>
          <Col xl="3" className="xl-40 box-col-12">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xl="9" className="xl-60 box-col-12">
            <JobApply />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobApplyContainer;
