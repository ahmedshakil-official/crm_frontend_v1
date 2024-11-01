import SvgIcon from "@/CommonComponent/SVG/IconSvg";
import { DragFilesHere } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/Ecommerce/AddProductSlice";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";
import { Form } from "reactstrap";

const ProductGallery = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const dispatch = useAppDispatch()
  
  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
    dispatch(setFormValue({name:"fileName1",value:incomingFiles[0].file?.name}))
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <div className="product-upload">
      <p>Product Gallery<span className="text-danger"> *</span></p>
      <Dropzone onChange={(files)=>updateFiles(files)} value={files} maxFiles={1} header={false} footer={false} minHeight="80px" name="fileName1">
        {files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
        {files.length === 0 && (
          <Form className="dropzone dropzone-light dz-clickable py-5">
            <div className="dz-message needsclick">
              <SvgIcon iconId="file-upload1" />
              <h6>{DragFilesHere}</h6>
              <span className="note needsclick">Add Product Gallery Images</span>
            </div>
          </Form>
        )}
      </Dropzone>
    </div>
  );
};

export default ProductGallery;
