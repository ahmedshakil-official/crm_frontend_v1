import apiClient from "@/services/api-client";
import { CaseInfo } from "@/Types/Organization/CaseTypes";
import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import formatDateToDMY from "@/utils/dateFormatter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Row, Table } from "reactstrap";
import "./CaseStatus.css";
import CaseStatusHeader from "./CaseStatusHeader";

const CaseStatusBody: React.FC<FetchLeadsProps> = ({
  isFetchedLead,
  setIsFetchedLead,
}) => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCaseInfo = async (searchQuery: string = "") => {
    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        search: searchQuery, // Add the search query to the API call
      });
      const response = await apiClient.get(`/cases?${queryParams.toString()}`);
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
    const debounceFetch = setTimeout(() => {
      fetchCaseInfo(searchQuery);
    }, 300);
    return () => clearTimeout(debounceFetch);
  }, [searchQuery]);

  return (
    <div className="container pb-3">
      <Row className="mb-3">
        <CaseStatusHeader
          setIsFetchedLead={setIsFetchedLead}
          isFetchedLead={isFetchedLead}
          fetchCaseInfo={fetchCaseInfo}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Row>
      <Row className="my-3">
        <Table bordered hover responsive>
          <thead className="thead-light text-center">
            <tr>
              <th>Case Name</th>
              <th>Lead User</th>
              <th>Phone</th>
              <th>Case Category</th>
              <th>Case Stage</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>View</th>
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
            ) : caseInfo.length > 0 ? (
              caseInfo.slice(0, 5).map((caseItem, index) => (
                <tr key={index}>
                  <td>
                    <Link
                      className="custom-hover"
                      href={`/dashboard/organization/${caseItem.alias}`}
                    >
                      {caseItem.name}
                    </Link>
                  </td>
                  <td>
                    {caseItem.lead_user
                      ? `${caseItem.lead_user.first_name} ${caseItem.lead_user.last_name}`
                      : "N/A"}
                  </td>
                  <td>{caseItem.lead_user.phone}</td>
                  <td>{caseItem.case_category}</td>
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
                          ? "bg-dark"
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
                  <td>{formatDateToDMY(caseItem.created_at)}</td>
                  <td>
                    {caseItem.created_by.first_name}{" "}
                    {caseItem.created_by.last_name}
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      <Link href={`/dashboard/organization/${caseItem.alias}`}>
                        <Button color="primary" size="sm" title="View">
                          <i className="fa-regular fa-eye"></i>
                        </Button>
                      </Link>
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
      </Row>
    </div>
  );
};

export default CaseStatusBody;
