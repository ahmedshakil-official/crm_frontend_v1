import { FilesListData } from "@/Data/Applications/FileSideBar/FileSideBar";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Card, CardHeader } from "reactstrap";
import AddUploadMedia from "./AddUploadMedia";
import FileManagerBody from "./FileManagerBody";
import FileListItem from "./FileManagerBody/FileListItem";
import SearchBar from "./SearchBar";

const FileContent = () => {
  const [searchFile, setSearchFile] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [myFile, setMyFile] = useState(FilesListData);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myFiles = [...myFile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myFile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModified}`,
        icon: "fa-solid fa-folder text-secondary fs-1",
        folderClass: "fa fa-folder f-44 text-warning",
        title: "Endless Admin",
        folderFiles: "100 files",
        folderTime: "2 Hour ago",
      });
      setMyFile(myFiles);
      toast.success("File Upload Successfully !");
    } else toast.error("Please Select at least one file !");
  };
  const fileList = myFile.filter((data) => searchFile === "" || data.name.toLowerCase().includes(searchFile.toLowerCase())).map((item, i) => <FileListItem key={i} item={item} />);
  return (
    <Card>
      <CardHeader className="d-md-block d-none">
        <div className="d-md-flex d-sm-block align-items-center">
          <SearchBar searchFile={searchFile} setSearchFile={setSearchFile} />
          <AddUploadMedia onFileChange={onFileChange} onFileUpload={onFileUpload} />
        </div>
      </CardHeader>
      {fileList.length ? <FileManagerBody myFile={myFile} fileList={fileList} searchFile={searchFile} /> : " Not Found "}
    </Card>
  );
};
export default FileContent;
