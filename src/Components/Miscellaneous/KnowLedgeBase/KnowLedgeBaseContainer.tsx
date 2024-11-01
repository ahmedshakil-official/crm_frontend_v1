"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Knowledgebase } from "@/Constant";
import { Container, Row } from "reactstrap";
import ArticleVideo from "../Faq/ArticleVideo";
import Articles from "../Faq/Articles";
import FAQFeaturesTutorial from "../Faq/FAQFeaturesTutorial";
import CategoryData from "./CategoryData";
import KnowledgebaseHelp from "./KnowledgebaseHelp";

const KnowLedgeBaseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Knowledgebase} parent={Knowledgebase} />
      <Container fluid>
        <Row>
          <KnowledgebaseHelp />
          <Articles />
          <CategoryData />
          <FAQFeaturesTutorial />
          <ArticleVideo />
        </Row>
      </Container>
    </>
  );
};

export default KnowLedgeBaseContainer;
