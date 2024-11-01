"use client";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BonusUi, ImageCropper } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ImageCropperBody from "./ImageCropperBody";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const ImageCropperContainer=()=> {
  return (
    <>
      <Breadcrumbs mainTitle={ImageCropper} parent={BonusUi} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={ImageCropper} />
              <CardBody>
                <ImageCropperBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ImageCropperContainer;