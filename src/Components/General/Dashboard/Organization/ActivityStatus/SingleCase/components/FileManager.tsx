import { Card, CardBody, CardHeader } from "reactstrap";

const FileManager = () => {
  return (
    <Card>
      <CardHeader className="p-2">
        <h4 className="text-primary opacity-75">File Manager</h4>
      </CardHeader>
      <CardBody className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h2 className="text-danger">Sorry!</h2>
          <p>This part is under development</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default FileManager;
