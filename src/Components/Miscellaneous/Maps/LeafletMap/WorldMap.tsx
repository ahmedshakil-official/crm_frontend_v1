import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletWorldMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WorldMapData, WorldMapProps } from "@/Data/Miscellaneous/Maps/MapsData";

const WorldMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={LeafletWorldMap} span={WorldMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height custom-map" {...WorldMapProps} style={{ height: 389 }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WorldMap;
