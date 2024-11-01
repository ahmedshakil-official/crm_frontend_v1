"use client";
import { Container, Row } from "reactstrap";
import ImagePreview from "./ImagePreview";
import SingleFileUpload from "./SingleFileUpload";
import MultiFileUpload from "./MultiFileUpload";
import DefaultDropzone from "./DefaultDropzone";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dropzone, BonusUi } from "@/Constant";

const DropzoneCOntainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Dropzone} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultDropzone />
          <ImagePreview />
          <SingleFileUpload />
          <MultiFileUpload />
        </Row>
      </Container>
    </>
  );
};

export default DropzoneCOntainer;
