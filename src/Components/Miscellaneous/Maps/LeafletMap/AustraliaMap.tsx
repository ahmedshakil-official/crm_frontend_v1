import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeafletAustraliaMap } from "@/Constant";
import { AustaliaMapData, AustraliaMapProps } from "@/Data/Miscellaneous/Maps/MapsData";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const AustraliaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={LeafletAustraliaMap} span={AustaliaMapData}/>
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} {...AustraliaMapProps}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AustraliaMap;
