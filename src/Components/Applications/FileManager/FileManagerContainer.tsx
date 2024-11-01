"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { App, FileManagerHeading } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import FileContent from "./FileContent";
import FileSideBar from "./FileSideBar/FileSideBar";

const FileManagerContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FileManagerHeading} parent={App} />
      <Container fluid>
        <Row>
          <FileSideBar />
          <Col xl="9" md="12" className="box-col-12">
            <div className="file-content">
              <FileContent />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FileManagerContainer;
