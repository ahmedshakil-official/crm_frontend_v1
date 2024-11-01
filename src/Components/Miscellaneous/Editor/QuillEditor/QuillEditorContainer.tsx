import { Container, Row } from "reactstrap";
import { EditorTitle, QuillEditorTitle } from "@/Constant";
import { BubbleTheme } from "./BubbleTheme";
import { SnowTheme } from "./SnowTheme";
import { StandardEditor } from "./StandardEditor";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const QuillEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={QuillEditorTitle} parent={EditorTitle} />
      <Container fluid>
        <Row>
          <StandardEditor />
          <SnowTheme />
          <BubbleTheme />
        </Row>
      </Container>
    </>
  );
};
export default QuillEditorContainer;
