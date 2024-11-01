import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeafletIndiaMap } from "@/Constant";
import { IndiaMapProps, IndianMapData } from "@/Data/Miscellaneous/Maps/MapsData";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const IndiaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={LeafletIndiaMap} span={IndianMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} {...IndiaMapProps}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IndiaMap;
