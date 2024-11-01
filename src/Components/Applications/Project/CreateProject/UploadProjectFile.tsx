import { UploadProjectFiles } from "@/Constant";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";
import { Col, FormGroup, Row } from "reactstrap";

const UploadProjectFile = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);

  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <Row>
      <Col>
        <FormGroup>
          <h5 className="f-w-600 mb-2">{UploadProjectFiles}</h5>
          <Dropzone onChange={updateFiles} className="dropzone" value={files} maxFiles={1} header={false} footer={false} minHeight="80px" label="Drag'n drop files here or click to Browse">
            {files.map((file: ExtFile) => (
              <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
            ))}
            {files.length === 0 && (
              <div className="dz-message needsclick">
                <i className="fa fa-cloud-upload"></i>
                <h6>Drop files here or click to upload.</h6>
                <span className="note needsclick">
                  (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                </span>
              </div>
            )}
          </Dropzone>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default UploadProjectFile;
