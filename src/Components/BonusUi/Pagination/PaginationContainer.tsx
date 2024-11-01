"use client";
import { Container, Row } from "reactstrap";
import DefaultPagination from "./DefaultPagination";
import PaginationActiveAndDisabled from "./PaginationActiveAndDisabled";
import PaginationWithIcons from "./PaginationWithIcons";
import RoundedPagination from "./RoundedPagination";
import PaginationAlignment from "./PaginationAlignment";
import PaginationSizing from "./PaginationSizing";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, Pagination } from "@/Constant";
import WithDisabled from "./WithDisabled";
import WithOutline from "./WithOutline";

const PaginationContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Pagination} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultPagination />
          <WithDisabled />
          <PaginationWithIcons />
          <PaginationActiveAndDisabled />
          <WithOutline/>
          <RoundedPagination />
          <PaginationAlignment />
          <PaginationSizing />
        </Row>
      </Container>
    </>
  );
};

export default PaginationContainer;
