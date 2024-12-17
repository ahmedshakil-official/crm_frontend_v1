import apiClient from "@/services/api-client";
import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import ActivityStatusHeader from "./ActivityStatusHeader";
import { CaseInfo } from "@/Types/Organization/CaseTypes";


const ActivityStatusBody: React.FC<FetchLeadsProps> = ({
  isFetchedLead,
  setIsFetchedLead,
}) => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCaseInfo = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/cases/");
      const CaseData = Array.isArray(response.data)
        ? response.data
        : response.data.cases;
      setCaseInfo(CaseData || []);
    } catch (error) {
      console.error("Error Fetching Cases", error);
      setCaseInfo([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseInfo();
  }, []);

  const filteredCases = caseInfo.filter((caseItem) =>
    caseItem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container py-3">
      <ActivityStatusHeader
        setIsFetchedLead={setIsFetchedLead}
        isFetchedLead={isFetchedLead}
        fetchCaseInfo={fetchCaseInfo}
      />
      <Input
        type="text"
        placeholder="Search Case"
        className="mb-3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Table bordered hover responsive>
        <thead className="thead-light text-center">
          <tr>
            <th>Case Name</th>
            <th>Lead User</th>
            <th>Case Category</th>
            <th>Applicant Type</th>
            <th>Case Status</th>
            <th>Case Stage</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {isLoading ? (
            <tr>
              <td colSpan={9} className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </td>
            </tr>
          ) : filteredCases.length > 0 ? (
            filteredCases.slice(0, 5).map((caseItem, index) => (
              <tr key={index}>
                <td>
                  <Link href={`/dashboard/organization/${caseItem.alias}`}>
                    <span className="text-black custom-hover">
                      {caseItem.name}
                    </span>
                  </Link>
                </td>
                <td>
                  {caseItem.lead_user
                    ? `${caseItem.lead_user.first_name} ${caseItem.lead_user.last_name}`
                    : "N/A"}
                </td>
                <td>{caseItem.case_category}</td>
                <td>{caseItem.applicant_type}</td>
                <td>{caseItem.case_status}</td>
                <td>
                  <span
                    className={`rounded-4 px-2 text-white ${
                      caseItem.case_stage === "INQUIRY"
                        ? "bg-success"
                        : caseItem.case_stage === "FACT_FIND"
                        ? "bg-warning"
                        : caseItem.case_stage === "RESEARCH_COMPLIANCE_CHECK"
                        ? "bg-dark"
                        : caseItem.case_stage === "DECISION_IN_PRINCIPLE"
                        ? "bg-info"
                        : caseItem.case_stage === "FULL_MORTGAGE_APPLICATION"
                        ? "bg-light"
                        : caseItem.case_stage === "OFFER_FROM_BANK"
                        ? "bg-dark"
                        : caseItem.case_stage === "LEGAL"
                        ? "bg-warning"
                        : caseItem.case_stage === "COMPLETION"
                        ? "bg-primary"
                        : caseItem.case_stage === "FUTURE_OPPORTUNITY"
                        ? "bg-info"
                        : caseItem.case_stage === "NOT_PROCEED"
                        ? "bg-danger"
                        : "bg-secondary" // Default color for unknown stages
                    }`}
                  >
                    {caseItem.case_stage}
                  </span>
                </td>
                <td>
                  {caseItem.created_by.first_name}{" "}
                  {caseItem.created_by.last_name}
                </td>
                <td>{caseItem.updated_by?.first_name || "N/A"}</td>
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
            ))
          ) : (
            <tr>
              <td colSpan={10} className="text-center">
                No cases found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ActivityStatusBody;
