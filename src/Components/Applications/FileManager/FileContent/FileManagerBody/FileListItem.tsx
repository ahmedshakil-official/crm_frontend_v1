import { FileFolderItemProp } from "@/Types/FileManagerType";

const FileListItem: React.FC<FileFolderItemProp> = ({ item }) => {
  return (
    <li className="folder-box d-flex align-items-center">
      <div className="d-flex align-items-center files-list">
        <div className="flex-shrink-0 file-left">
          <i className={`fa-solid fa-${item.icon} fs-4`} />
        </div>
        <div className="flex-grow-1 ms-3">
          <h5 className="f-w-600">{item.name}</h5>
          <p>{item.size}</p>
        </div>
      </div>
    </li>
  );
};
export default FileListItem;
