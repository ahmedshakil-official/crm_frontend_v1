'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Gallery, MasonryGallery, MasonryGalleryCap } from "@/Constant";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryBody } from "./MasonryGalleryBody";

const MasonryGalleryContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGallery} parent={Gallery} />
      <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card className="pb-5">
            <CommonCardHeader title={MasonryGalleryCap} />
            <MasonryGalleryBody />
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default MasonryGalleryContainer;
