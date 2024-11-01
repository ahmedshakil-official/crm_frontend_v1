import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HTMLModeTitle } from "@/Constant";
import { HtmlData } from "@/Data/Miscellaneous/Editor/Editor";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";

export const HtmlMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HTMLModeTitle} />
        <CardBody>
          <AceEditor className="aceEditor w-auto" mode="html" theme="monokai" value={HtmlData} name="blah2" fontSize={14} setOptions={{ useWorker: false }} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
