import apiClient from "@/services/api-client";
import { CaseInfo } from "@/Types/Organization/CaseTypes";
import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Row, Table } from "reactstrap";
import "./ActivityStatus.css";
import ActivityStatusHeader from "./ActivityStatusHeader";
import DeleteCaseModal from "./Modals/DeleteCaseModal";

const ActivityStatusBody: React.FC<FetchLeadsProps> = ({
  isFetchedLead,
  setIsFetchedLead,
}) => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCase, setCurrentCase] = useState<CaseInfo | null>(null);
  // State for Delete Modal
  const [isDeleteCaseModalOpen, setIsDeleteCaseModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleDeleteCaseModal = () =>
    setIsDeleteCaseModalOpen(!isDeleteCaseModalOpen);

  const openDeleteCaseModal = (caseItem: CaseInfo) => {
    setCurrentCase(caseItem); // Set the case to be deleted
    toggleDeleteCaseModal(); // Open the modal
  };

  const handleCaseDeletion = async (caseAlias: string) => {
    setIsDeleting(true);
    try {
      await apiClient.delete(`/cases/${caseAlias}/`);
      // Refresh case list after deletion
      fetchCaseInfo();
      toggleDeleteCaseModal();
      toast.success("Case deleted successfully.");
    } catch (error) {
      console.error("Error deleting case:", error);
      toast.error("Failed to delete the case. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

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
        <ActivityStatusHeader
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
              <th>Applicant Type</th>
              <th>Case Status</th>
              <th>Case Stage</th>
              <th>Created By</th>
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
                      <Button
                        color="danger"
                        size="sm"
                        title="Delete Case"
                        onClick={() => openDeleteCaseModal(caseItem)}
                      >
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
        {/* Delete Modal */}
        <DeleteCaseModal
          isOpen={isDeleteCaseModalOpen}
          toggle={toggleDeleteCaseModal}
          caseData={currentCase} // Pass the case to delete
          isDeleting={isDeleting}
          onDelete={() => {
            if (currentCase) handleCaseDeletion(currentCase.alias);
          }}
        />
      </Row>
    </div>
  );
};

export default ActivityStatusBody;
