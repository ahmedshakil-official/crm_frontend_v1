"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Avatars, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { AvatarInitial } from "./AvatarInitial";
import { AvatarPing } from "./AvatarPing";
import { AvatarProfile } from "./AvatarProfile";
import { AvatarSizes } from "./AvatarSizes";
import { Grouping } from "./Grouping";
import { Ratio } from "./Ratio";
import { Shapes } from "./Shapes";
import { StatusIndicator } from "./StatusIndicator";

const AvatarsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Avatars} parent={UiKits} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <AvatarSizes />
            <StatusIndicator />
            <Shapes />
            <Ratio />
            <Grouping />
            <AvatarInitial />
            <AvatarPing />
            <AvatarProfile />
          </Row>
        </div>
      </Container>
    </>
  );
};
export default AvatarsContainer;
