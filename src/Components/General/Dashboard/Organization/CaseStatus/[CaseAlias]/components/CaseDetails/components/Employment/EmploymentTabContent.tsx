import { EmploymentDetailsProps } from "@/Types/Organization/CaseDetails/EmploymentTypes";
import React from "react";
import { CardBody } from "reactstrap";
// Import the type from the parent component

interface EmploymentTabContentProps {
  activeTab: string | null; // The currently active tab (employment alias)
  activeUser: number | null; // The currently active user ID
  groupedData: Record<number, EmploymentDetailsProps[]>; // Employment data grouped by user ID
}

export const EmploymentTabContent: React.FC<EmploymentTabContentProps> = ({
  activeTab,
  activeUser,
  groupedData,
}) => {
  // Ensure activeUser is not null before rendering
  if (!activeTab || activeUser === null) {
    return <div>No employment data available.</div>;
  }

  // Get the employment records for the active user
  const userEmploymentRecords = groupedData[activeUser];

  // Filter the employment record corresponding to the active tab
  const activeEmploymentRecord = userEmploymentRecords?.find(
    (employment) => employment.alias === activeTab
  );

  // If no matching employment record is found, show a fallback message
  if (!activeEmploymentRecord) {
    return <div>No matching employment record found.</div>;
  }

  return (
    <CardBody className="px-0 pb-0">
      <div>
        <h4>Employment Details</h4>
        <p>
          <strong>Name:</strong> {activeEmploymentRecord.user.first_name}{" "}
          {activeEmploymentRecord.user.last_name}
        </p>
        <p>
          <strong>ID:</strong> {activeEmploymentRecord.user.id}
        </p>
        <p>
          <strong>Email:</strong> {activeEmploymentRecord.user.email}
        </p>
        <p>
          <strong>Phone:</strong> {activeEmploymentRecord.user.phone}
        </p>
        <p>
          <strong>Employment Status:</strong>{" "}
          {activeEmploymentRecord.employment_status}
        </p>
        <p>
          <strong>Employer Name:</strong>{" "}
          {activeEmploymentRecord.employer_name || "N/A"}
        </p>
        <p>
          <strong>Gross Annual Income:</strong>{" "}
          {activeEmploymentRecord.gross_annual_income
            ? `£${activeEmploymentRecord.gross_annual_income}`
            : "N/A"}
        </p>
        <p>
          <strong>Net Annual Income:</strong>{" "}
          {activeEmploymentRecord.net_annual_income
            ? `£${activeEmploymentRecord.net_annual_income}`
            : "N/A"}
        </p>
        <p>
          <strong>Bonus:</strong>{" "}
          {activeEmploymentRecord.bonus
            ? `£${activeEmploymentRecord.bonus}`
            : "N/A"}{" "}
          {activeEmploymentRecord.is_bonus_guaranteed ? "(Guaranteed)" : ""}
        </p>
      </div>
    </CardBody>
  );
};
