import { FileSearchBarProps } from "@/Types/FileManagerType";
import { ChangeEvent } from "react";
import { Form, Input } from "reactstrap";

const SearchBar: React.FC<FileSearchBarProps> = ({ searchFile, setSearchFile }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchFile(e.target.value);
  };
  return (
    <Form className="form-inline basic-form">
      <div className="form-group mb-0 d-flex align-items-center">
        <i className="fa-solid fa-magnifying-glass" />
        <Input type="text" placeholder="Search..." plaintext onChange={handleChange} value={searchFile} />
      </div>
    </Form>
  );
};
export default SearchBar;
