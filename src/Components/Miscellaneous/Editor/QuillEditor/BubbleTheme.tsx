import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BubbleThemeTitle } from "@/Constant";
import { BubbleThemeContent } from "@/Data/Miscellaneous/Editor/Editor";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Col, Row } from "reactstrap";

export const BubbleTheme = () => {
  const [value, setValue] = useState(BubbleThemeContent);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonCardHeader title={BubbleThemeTitle} />
          <CardBody>
            <ReactQuill theme="bubble" value={value} onChange={setValue} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
