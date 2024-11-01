import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FontAwesomeIcons, Icons } from "@/Constant";
import { useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeData } from "@/Data/Icons/FontAwesome";
import IconMarkUp from "../IconMarkUp";
import FontAwesomeCard from "./FontAwesomeCard";

const FontAwesomeIconContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");
  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="' + tag + '"></i>',
    });
    setIcon({
      icon: tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={FontAwesomeIcons} parent={Icons} />
      <Container fluid>
        {FontAwesomeData.map((icons, index) => (
          <Row key={index} className="icon-main">
            <Col xl="12">
              <FontAwesomeCard iconType={icons.data} title={icons.title} parentCallback={callback} />
            </Col>
          </Row>
        ))}
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} svg={false} />
    </>
  );
};

export default FontAwesomeIconContainer;
