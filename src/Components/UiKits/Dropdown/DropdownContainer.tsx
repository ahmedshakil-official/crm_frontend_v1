"use client";
import { Container, Row } from "reactstrap";
import { BasicDropdown } from "./BasicDropdown/BasicDropdown";
import { RoundedDropdown } from "./RoundedDropdown/RoundedDropdown";
import { SplitDropdown } from "./SplitDropdown/SplitDropdown";
import { HeadingDropdown } from "./HeadingDropdown/HeadingDropdown";
import { DropdownWithInput } from "./DropdownWithInput/DropdownWithInput";
import { DarkDropdown } from "./DarkDropdown/DarkDropdown";
import { UniqueDropdown } from "./UniqueDropdown/UniqueDropdown";
import { JustifyContent } from "./JustifyContent/JustifyContent";
import { Alignments } from "./Alignments/Alignments";
import { HelperCard } from "./HelperCard/HelperCard";
import { DividerDropdown } from "./DividerDropdown/DividerDropdown";
import { DropdownSizing } from "./DropdownSizing/DropdownSizing";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { DropdownTitle, UiKits } from "@/Constant";

const DropdownContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DropdownTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicDropdown />
          <RoundedDropdown />
          <SplitDropdown /> 
          <HeadingDropdown />
          <DropdownWithInput />
          <DarkDropdown /> 
          <UniqueDropdown />
          <JustifyContent />
          <Alignments />
          <HelperCard /> 
          <DividerDropdown />
          <DropdownSizing /> 
        </Row>
      </Container>
    </>
  );
};
export default DropdownContainer;
