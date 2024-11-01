"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Gallery, ImageHoverEffects } from "@/Constant";
import { HoverData } from "@/Data/Miscellaneous/Gallery/Gallery";
import { Card, Col, Container, Row } from "reactstrap";
import { ImageHoverEffectsCardBody } from "./ImageHoverEffectsCardBody";

const HoverEffectContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageHoverEffects} parent={Gallery} />
      <Container fluid>
        {HoverData.map((data, index) => (
          <Row key={index}>
            <Col sm="12">
              <Card>
                <CommonCardHeader title={`Hover Effect ${data}`} />
                <ImageHoverEffectsCardBody data={data} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default HoverEffectContainer;
