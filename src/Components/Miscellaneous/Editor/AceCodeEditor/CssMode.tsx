import AceCodeEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CssModeTitle } from "@/Constant";
import { CssData } from "@/Data/Miscellaneous/Editor/Editor";

export const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CssModeTitle} />
        <CardBody>
          <AceCodeEditor className="aceEditor w-auto" mode="css" theme="monokai" value={CssData} name="blah2" setOptions={{ useWorker: false }} fontSize={14} showPrintMargin={true} showGutter={true} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
