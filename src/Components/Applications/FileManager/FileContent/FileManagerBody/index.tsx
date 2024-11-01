import { QuickAccessData } from "@/Data/Applications/FileSideBar/FileSideBar";
import { FileManagerBodyProps } from "@/Types/FileManagerType";
import React from "react";
import { CardBody } from "reactstrap";
import FolderListItem from "./FolderListItem";

const FileManagerBody: React.FC<FileManagerBodyProps> = ({ myFile, fileList, searchFile }) => {
  return (
    <CardBody className="file-manager">
      {!searchFile && (
        <>
          <h4 className="mb-2">{"Quick Access"}</h4>
          <ul className="quick-file d-flex">
            {QuickAccessData.map((item) => (
              <li key={item.id}>
                <div className="quick-box">
                  <i className={item.quickClass}></i>
                </div>
                <h6 className="mb-2">{item.quickTitle}</h6>
              </li>
            ))}
          </ul>
          <h4 className="mt-4 mb-2">{"Folders"}</h4>
          <ul className="folder ">
            {myFile.map((item) => (
              <FolderListItem key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
      <h4 className="mt-4 mb-2 mb-2 mb-2">{"Files"}</h4>
      <ul className="d-flex files-content">{fileList}</ul>
    </CardBody>
  );
};
export default FileManagerBody;
