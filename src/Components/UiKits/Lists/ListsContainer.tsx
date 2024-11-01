"use client";
import { Container, Row } from "reactstrap";
import { ActiveList } from "./ActiveList/ActiveList";
import { ContextualClass } from "./ContextualClass/ContextualClass";
import { CustomList } from "./CustomList/CustomList";
import { DefaultList } from "./DefaultList/DefaultList";
import { DisableList } from "./DisableList/DisableList";
import { FlushList } from "./FlushList/FlushList";
import { HorizontalList } from "./HorizontalList/HorizontalList";
import { JsBehavior } from "./JsBehavior/JsBehavior";
import { ListWithCheckbox } from "./ListWithCheckbox/ListWithCheckbox";
import { ListWithNumber } from "./ListWithNumber/ListWithNumber";
import { ListWithRadio } from "./ListWithRadio/ListWithRadio";
import { NumberedBadgeList } from "./NumberedBadgeList/NumberedBadgeList";
import { ScrollableList } from "./ScrollableList/ScrollableList";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { ListsTitle, UiKits } from "@/Constant";

const ListsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ListsTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <DefaultList />
          <ActiveList />
          <FlushList />
          <ContextualClass />
          <HorizontalList />
          <CustomList />
          <ListWithCheckbox />
          <ListWithRadio />
          <ListWithNumber />
          <JsBehavior />
          <NumberedBadgeList />
          <DisableList />
          <ScrollableList />
        </Row>
      </Container>
    </>
  );
};
export default ListsContainer;
