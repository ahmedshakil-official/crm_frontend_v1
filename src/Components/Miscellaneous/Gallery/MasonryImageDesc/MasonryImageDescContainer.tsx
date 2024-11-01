"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Gallery, MasonryGalleryDescriptionCap, MasonryGalleryWithDescription } from "@/Constant";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryWithDescriptionCardBody } from "./MasonryGalleryWithDescriptionCardBody";

const MasonryImageDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGalleryWithDescription} parent={Gallery} />
      <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card>
            <CommonCardHeader title={MasonryGalleryDescriptionCap} />
            <MasonryGalleryWithDescriptionCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
    </>
   
  );
};

export default MasonryImageDescContainer;
