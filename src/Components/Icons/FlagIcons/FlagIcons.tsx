import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FlagIcon, Icons } from "@/Constant";
import { useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../IconMarkUp";
import FlagIconCardBody from "./FlagIconCardBody";

const FlagIconsContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = (tag: string) => {
    setITag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag + " fa-2x",
    });
  };

  return (
    <>
      <Breadcrumbs mainTitle={FlagIcon} parent={Icons} />
      <Container fluid>
        <Row className="icon-main">
          <Col xl="12">
            <Card>
              <CommonCardHeader title={FlagIcon} headClass="f-w-700" />
              <FlagIconCardBody getITag={getITag} />
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} svg={false} />
    </>
  );
};

export default FlagIconsContainer;
