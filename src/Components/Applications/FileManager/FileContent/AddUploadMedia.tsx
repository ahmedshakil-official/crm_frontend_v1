import React from "react";
import { Button, Form, Input } from "reactstrap";
import { PlusSquare, Upload } from "react-feather";
import { AddUploadMediaProps } from "@/Types/FileManagerType";
const AddUploadMedia: React.FC<AddUploadMediaProps> = ({ onFileChange, onFileUpload }) => {
  const getFile = () => {
    const fileInput = document.getElementById("UpFile") as HTMLInputElement | null;
    if (fileInput) fileInput.click();
  };
  return (
    <div className="flex-grow-1 text-end">
      <Form className="d-inline-flex">
        <Button color="primary" className="plus-square" onClick={getFile}>
          <PlusSquare /> {"Add New"}
        </Button>
        <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
          <Input id="UpFile" multiple type="file" onChange={(event) => onFileChange(event)} />
        </div>
      </Form>
      <Button color="primary" className="ms-2 upload" outline onClick={onFileUpload}>
        <Upload /> {"Upload"}
      </Button>
    </div>
  );
};
export default AddUploadMedia;
