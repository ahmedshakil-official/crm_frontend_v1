import Link from "next/link";
import React from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

interface Application {
  caseAlias: string;
  caseId: string;
  createDate: string;
  propertyAddress: string;
  purchasePrice: string;
  loanAmount: string;
  stage: string;
}

const MyApplications: React.FC = () => {
  // Example data - replace with actual data from your API
  const applications: Application[] = [
    {
      caseAlias: "f84c8ecd-0e79-4215-b1c2-3c3f11681d09",
      caseId: "DIP01011256",
      createDate: "13/05/2025",
      propertyAddress: "",
      purchasePrice: "£0.00",
      loanAmount: "£0.00",
      stage: "Fact Find",
    },
  ];

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
                <th>Property Address</th>
                <th>Purchase Price</th>
                <th>Loan Amount</th>
                <th>Stage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.caseId}>
                  <td>
                    {" "}
                    <Link href={`client/${app.caseAlias}`}>{app.caseId}</Link>
                  </td>
                  <td>{app.createDate}</td>
                  <td>{app.propertyAddress}</td>
                  <td>{app.purchasePrice}</td>
                  <td>{app.loanAmount}</td>
                  <td>{app.stage}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Continue</button>
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
