"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Blog, BlogSingle } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommentSection from "./CommentSection";
import { SingleBlogData } from "./SingleBlogData";

const BlogSingleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogSingle} parent={Blog} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="blog-single">
                  <SingleBlogData />
                  <CommentSection />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogSingleContainer;
