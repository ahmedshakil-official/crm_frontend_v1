import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SnowThemeTitle } from "@/Constant";
import { SnowThemeContent } from "@/Data/Miscellaneous/Editor/Editor";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Col, Row } from "reactstrap";

export const SnowTheme = () => {
  const [value, setValue] = useState(SnowThemeContent);
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonCardHeader title={SnowThemeTitle} />
          <CardBody>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
