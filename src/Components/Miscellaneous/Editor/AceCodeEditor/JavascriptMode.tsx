import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavascriptModeTitle } from "@/Constant";
import { JavascriptData } from "@/Data/Miscellaneous/Editor/Editor";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";

export const JavascriptMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={JavascriptModeTitle} />
        <CardBody>
          <AceEditor className="aceEditor w-auto" mode="javascript" theme="monokai" value={JavascriptData} name="blah2" setOptions={{ useWorker: false }} fontSize={14} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
