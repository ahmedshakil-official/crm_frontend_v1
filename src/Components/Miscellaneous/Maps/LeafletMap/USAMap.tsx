import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletUSAMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UsaMapData, UsaMapProps } from "@/Data/Miscellaneous/Maps/MapsData";

const USAMap = () => {

  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={LeafletUSAMap} span={UsaMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} {...UsaMapProps}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default USAMap;
