'use client'
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import SideBar from "./SideBar";
import BookmarksTabs from "./BookmarkTabs";
import { Apps, Bookmarks } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const BookmarkContainer = () => {
  return (
    <>
     <Breadcrumbs mainTitle={Bookmarks} parent={Apps} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <SideBar />
            <Col xl="9" md="12" className="box-col-12">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="ps-0">
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
    
  );
};

export default BookmarkContainer;
