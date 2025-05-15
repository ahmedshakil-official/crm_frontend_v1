import LoadingSpinner from "@/app/loading";
import { useGetSingleClientApplicationQuery } from "@/Redux/Reducers/Client/SingleCLientApplication/SingleCLientApplicationApi";
import { SingleClientApplicationProps } from "@/Types/Client/SingleClientApplicationTypes";
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

const MyApplications: React.FC = () => {
  const { data: applications, isLoading } =
    useGetSingleClientApplicationQuery(undefined);

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <Card className="mb-4">
      <CardHeader className="bg-primary text-white d-flex align-items-center">
        <i className="fa fa-file-text me-2"></i>
        <h5 className="mb-0">My Applications</h5>
      </CardHeader>
      <CardBody className="p-0">
        <div className="table-responsive">
          <Table hover bordered className="mb-0">
            <thead>
              <tr>
                <th>Case #</th>
                <th>Create Date</th>
                <th>Case Category</th>
                <th>Stage</th>
                <th>Lead</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((app: SingleClientApplicationProps) => (
                <tr key={app.name}>
                  <td>
                    <Link href={`client/${app.alias}`}>{app.name}</Link>
                  </td>
                  <td>
                    {new Date(app.created_at).toLocaleDateString("en-GB")}
                  </td>
                  <td>{app.case_category}</td>
                  <td>{app.case_stage}</td>
                  <td>
                    {app.lead_user.first_name + " " + app.lead_user.last_name}
                  </td>
                  <td>{app.lead_user.phone}</td>
                  <td>
                    <Link href={`client/${app.alias}`}>
                      <button className="btn btn-primary btn-sm">
                        Continue
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default MyApplications;
