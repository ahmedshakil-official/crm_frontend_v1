import { useGetCaseDetailsQuery } from "@/Redux/Reducers/Organization/Cases/CaseDetailsApi";
import { CaseInfo } from "@/Types/Organization/CaseTypes";
import { formatDateToDMYAndTime } from "@/utils/dateAndTimeFormatter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Row, Spinner, Table } from "reactstrap";
import "./CaseStatus.css";
import CaseStatusHeader from "./CaseStatusHeader";

const CaseStatusBody: React.FC = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: caseData, isLoading } = useGetCaseDetailsQuery({
    search: searchQuery,
  });

  useEffect(() => {
    if (caseData) {
      const casesArray = Array.isArray(caseData) ? caseData : caseData.cases;
      setCaseInfo(casesArray || []);
    }
  }, [caseData]);

  return (
    <div className="container pb-3">
      <Row className="mb-3">
        <CaseStatusHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Row>
      <Row className="my-3">
        <Table hover responsive>
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
                <td colSpan={8} className="text-center">
                  <Spinner color="primary" />
                </td>
              </tr>
            ) : caseInfo.length > 0 ? (
              caseInfo.slice(0, 5).map((caseItem, index) => (
                <tr key={index}>
                  <td>
                    <Link
                      className="custom-hover"
                      href={`/dashboard/organization/${caseItem?.alias}`}
                    >
                      {caseItem?.name}
                    </Link>
                  </td>
                  <td>
                    {caseItem?.lead_user
                      ? `${caseItem?.lead_user.first_name} ${caseItem?.lead_user.last_name}`
                      : "N/A"}
                  </td>
                  <td>{caseItem?.lead_user.phone || "N/A"}</td>
                  <td>
                    {caseItem?.case_category
                      .split("_")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>
                    {caseItem?.case_stage
                      .split("_")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>{formatDateToDMYAndTime(caseItem?.created_at)}</td>
                  <td>
                    {caseItem?.created_by.first_name}{" "}
                    {caseItem?.created_by.last_name}
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      <Link href={`/dashboard/organization/${caseItem?.alias}`}>
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
