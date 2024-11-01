'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FormWidgets, Touchspin } from "@/Constant";
import { Container, Row } from "reactstrap";
import ButtonsWithPrefixAndPostfix from "./ButtonsWithPrefixAndPostfix";
import DefaultTouchspin from "./DefaultTouchspin";
import IconsWithPrefixAndPostfix from "./IconsWithPrefixAndPostfix";
import OutlinedTouchspin from "./OutlinedTouchspin";
import RoundedTouchspins from "./RoundedTouchspin";

const TouchSpinContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Touchspin} parent={FormWidgets} />
      <Container fluid>
      <div className="bootstrap-touchspin">
        <Row>
          <DefaultTouchspin />
          <OutlinedTouchspin />
          <IconsWithPrefixAndPostfix />
          <ButtonsWithPrefixAndPostfix />
          <RoundedTouchspins />
        </Row>
      </div>
    </Container>
    </>
    
  );
};

export default TouchSpinContainer;
