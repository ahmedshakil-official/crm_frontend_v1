'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { GoogleMap, Maps } from "@/Constant";
import { Container, Row } from "reactstrap";
import BasicMap from "./BasicMap";
import MarkerMapComp from "./MarkerMapComp";
import PolygonsComp from "./PolygonsComp";
import PolylineMapComp from "./PolylineMapComp";

const GoogleMapContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleMap} parent={Maps} />
      <Container fluid>
        <Row>
          <BasicMap />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylineMapComp />
        </Row>
      </Container>
    </>
  );
};

export default GoogleMapContainer;
