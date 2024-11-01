import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactQuill from "react-quill";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StandardEditorTitle } from "@/Constant";
import { StandardQuillText } from "@/Data/Miscellaneous/Editor/Editor";

export const StandardEditor = () => {
  const [value, setValue] = useState(StandardQuillText);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonCardHeader title={StandardEditorTitle} />
          <CardBody>
            <ReactQuill value={value} onChange={setValue} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
