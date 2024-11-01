"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Blog, BlogDetails } from "@/Constant";
import { Container, Row } from "reactstrap";
import BlogWithDetails from "./BlogWithDetails";
import BlogWithoutDetails from "./BlogWithoutDetails";
import MarkJencoBlog from "./MarkJencoBlog";

const BlogDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogDetails} parent={Blog} />
      <Container fluid>
        <Row>
          <MarkJencoBlog />
          <BlogWithDetails />
          <BlogWithoutDetails />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetailsContainer;
