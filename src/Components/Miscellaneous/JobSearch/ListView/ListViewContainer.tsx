"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { JobSearch, ListView } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Common";
import CardsPagination from "../Common/CardsPagination";
import ListViewCard from "./ListViewCard";

const ListViewContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ListView} parent={JobSearch} />
      <Container fluid>
        <Row>
          <Col xl="3" className="xl-40 box-col-12">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xl="9" className="xl-60 box-col-12">
            <ListViewCard />
            <CardsPagination />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListViewContainer;
