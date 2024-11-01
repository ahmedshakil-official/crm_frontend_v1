import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { FeatherIconsData } from "@/Data/Icons/FeatherIcons";
import IconMarkUp from "../IconMarkUp";

const FeatherIconCardBody = () => {
  const featherIcons = require("feather-icons");
  const [iTag, setITag] = useState<string | object>("");
  const [featherIcon, setFeatherIcon] = useState<string | object>("");

  const getItag = (tag: string) => {
    setITag({ iTag: '<i data-feather="' + tag + '"></i>' });
    setFeatherIcon({ featherIcon: tag });
  };

  return (
    <CardBody>
      <Row className="icon-lists icon-event iconly-icons">
        {FeatherIconsData.map((singleIcon: string, index) => (
          <Col xxl="2" lg="4" xs="12" md="6" className="icons-item" key={index} onClick={() => getItag(singleIcon)}>
            <Card className="d-flex align-items-center default-border m-0">
              <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[singleIcon].toSvg(singleIcon) }} />
              <h5 className="mt-0 me-2">{singleIcon}</h5>
            </Card>
          </Col>
        ))}
      </Row>
      <IconMarkUp iTag={iTag} icons={featherIcon} svg={false} />
    </CardBody>
  );
};

export default FeatherIconCardBody;
