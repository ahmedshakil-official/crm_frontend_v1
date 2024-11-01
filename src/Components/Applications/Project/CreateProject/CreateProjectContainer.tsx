"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Project, ProjectCreate } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CreateNewProjectForm from "./CreateNewProjectForm";

const CreateProjectContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreate} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewProjectForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateProjectContainer;
