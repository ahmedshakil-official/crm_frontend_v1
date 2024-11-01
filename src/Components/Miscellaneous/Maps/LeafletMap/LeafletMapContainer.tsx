import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { LeafletMap, Maps } from "@/Constant";
import { Container, Row } from "reactstrap";
import AustraliaMap from "./AustraliaMap";
import IndiaMap from "./IndiaMap";
import USAMap from "./USAMap";
import WorldMap from "./WorldMap";

const LeafletMapContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LeafletMap} parent={Maps} />
      <Container fluid>
        <Row>
          <WorldMap />
          <USAMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </>
  );
};

export default LeafletMapContainer;
