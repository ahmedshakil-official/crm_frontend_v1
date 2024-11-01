"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FAQ } from "@/Constant";
import { Container, Row } from "reactstrap";
import ArticleVideo from "./ArticleVideo";
import Articles from "./Articles";
import FAQFeaturesTutorial from "./FAQFeaturesTutorial";
import Questions from "./Questions";

const FaqContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FAQ} parent={FAQ} />
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <Articles />
            <Questions />
            <FAQFeaturesTutorial />
            <ArticleVideo />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FaqContainer;
