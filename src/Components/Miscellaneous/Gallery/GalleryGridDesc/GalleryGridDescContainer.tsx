"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Gallery, GalleryGridWithDescription, GalleryGridWithDescriptionCap } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { DescriptionMyGallery } from "./DescriptionMyGallery";

const GalleryGridDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GalleryGridWithDescription} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={GalleryGridWithDescriptionCap} />
              <CardBody className="my-gallery gallery-with-description">
                <Row>
                  <DescriptionMyGallery />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryGridDescContainer;
