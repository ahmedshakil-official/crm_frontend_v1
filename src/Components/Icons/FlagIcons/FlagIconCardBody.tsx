import { Card, CardBody, Col, Row } from "reactstrap";
import { FlagIconData } from "@/Data/Icons/FlagIcons";
import { FlagIconType } from "@/Types/IconsTypes";

const FlagIconCardBody: React.FC<FlagIconType> = ({ getITag }) => {
  return (
    <CardBody>
      <Row className="icon-event iconly-icons icon-lists">
        {FlagIconData.map((icon, index) => (
          <Col xxl="2" lg="4" xs="12" md="6" className="icons-item" key={index} onClick={() => getITag(icon.abbrivation)}>
            <Card className="d-flex align-items-center default-border m-0">
              <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
              <h5 className="mt-0 me-2">{`flag-icon flag-icon-${icon.abbrivation}`}</h5>
            </Card>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};

export default FlagIconCardBody;
