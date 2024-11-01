"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Gallery, ImageGallery } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { MyGallery } from "./MyGallery";

const GalleryGridContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Gallery} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={ImageGallery} />
              <CardBody className="gallery my-gallery">
                <Row>
                  <MyGallery />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryGridContainer;
