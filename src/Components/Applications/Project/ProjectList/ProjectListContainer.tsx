"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Project, ProjectLists } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import { ProjectListHead } from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectLists} parent={Project} />
      <Container fluid>
        <Row className="project-cards">
          <Col md="12" className="project-list">
            <ProjectListHead />
          </Col>
          <Col sm="12">
            <ProjectListTabContent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectListContainer;
