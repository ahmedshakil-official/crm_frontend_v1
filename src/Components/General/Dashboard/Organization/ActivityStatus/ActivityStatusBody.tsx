import Link from "next/link";
import { Button, Input, Table } from "reactstrap";
import ActivityStatusHeader from "./ActivityStatusHeader";

const ActivityStatusBody = () => {
  return (
    <div className="container py-3">
      <ActivityStatusHeader />
      <Input type="text" placeholder="Search Case" className="mb-3" />
      <Table bordered hover responsive>
        <thead className="thead-light text-center">
          <tr>
            <th>Case name</th>
            <th>Case name</th>
            <th>Case name</th>
            <th>Case name</th>
            <th>Case name</th>
            <th>Case Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>
              <Link href="/dashboard/organization/case">
                <span className="text-black custom-hover">Name1</span>
              </Link>
            </td>
            <td>Case1</td>
            <td>Case1</td>
            <td>Case1</td>
            <td>Case1</td>
            <td>
              <span className="bg-success px-2 rounded-4">Active</span>
            </td>
            <td className="text-center">
              <div className="d-flex justify-content-center gap-2 align-items-center">
                <Link href="/dashboard/organization/case">
                  <Button color="primary" size="sm" title="View">
                    <i className="fa-regular fa-eye"></i>
                  </Button>
                </Link>
                <Button color="danger" size="sm" title="Delete Case">
                  <i className="icon-trash"></i>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ActivityStatusBody;
