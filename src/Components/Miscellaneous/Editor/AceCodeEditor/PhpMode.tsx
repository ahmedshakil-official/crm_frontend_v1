import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PhpModeTitle } from "@/Constant";
import { PhpData } from "@/Data/Miscellaneous/Editor/Editor";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/theme-monokai";
import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";

export const PhpMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={PhpModeTitle} />
        <CardBody>
          <AceEditor className="aceEditor w-auto" mode="php" theme="monokai" value={PhpData} name="blah2" fontSize={14} setOptions={{ useWorker: false }} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
