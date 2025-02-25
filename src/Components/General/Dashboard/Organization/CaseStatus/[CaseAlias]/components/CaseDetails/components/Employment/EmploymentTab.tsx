import apiClient from "@/services/api-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// Type for URL params
interface Params {
  casealias: string;
}

// Type for Employment Details
export interface EmploymentDetails {
  alias: string;
  user: {
    id: number;
    alias: string;
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    profile_image: string | null;
    user_type: string;
  };
  employment_status: string;
  employment_type: string | null;
  occupation: string | null;
  industry: string | null;
  employer_name: string | null;
  employer_telephone: string | null;
  employer_email_for_reference: string | null;
  employer_postcode: string | null;
  employer_house_name_or_number: string | null;
  employer_address_line_1: string | null;
  employer_city: string | null;
  employer_county: string | null;
  employer_country: string | null;
  employment_commenced: string | null;
  employment_ended: string | null;
  gross_annual_income: number | null;
  net_annual_income: number | null;
  is_probationary_period: boolean;
  is_income_in_foreign_currency: boolean;
  bonus: number | null;
  is_bonus_guaranteed: boolean;
  bonus_frequency: string | null;
  overtime: number | null;
  is_overtime_guaranteed: boolean;
  overtime_frequency: string | null;
  allowance: number | null;
  is_allowance_guaranteed: boolean;
  allowance_frequency: string | null;
  created_at: string;
  updated_at: string;
}

export const EmploymentTab = () => {
  // State for active user, active tab, and employment data
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [employmentData, setEmploymentData] = useState<EmploymentDetails[]>([]);

  // UseParams with type assertion
  const params = useParams() as unknown as Params;
  const { casealias } = params;

  // Helper function to group employment data by user ID
  const groupByUserId = (data: EmploymentDetails[]) => {
    const grouped: Record<number, EmploymentDetails[]> = {};
    data.forEach((record) => {
      if (!grouped[record.user.id]) {
        grouped[record.user.id] = [];
      }
      grouped[record.user.id].push(record);
    });
    return grouped;
  };

  // Fetch employment details
  const fetchEmploymentDetails = async () => {
    try {
      const response = await apiClient.get<EmploymentDetails[]>(
        `/cases/${casealias}/employment/details/`
      );
      setEmploymentData(response.data);

      // Set the first user and their first employment record as default
      if (response.data.length > 0) {
        const firstUserId = response.data[0].user.id;
        setActiveUser(firstUserId);
        setActiveTab(response.data[0]?.alias || null);
      }
    } catch (error) {
      console.error("Error fetching employment details:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchEmploymentDetails();
  }, []);

  // Group employment data by user ID
  const groupedData = groupByUserId(employmentData);

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          {/* Outer Navigation Tabs (Users) */}
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {Object.keys(groupedData).map((userId) => {
                const user = groupedData[Number(userId)][0].user; // Get the first record's user info
                return (
                  <NavItem key={user.id}>
                    <NavLink
                      className={`${activeUser === user.id ? "active" : ""}`}
                      onClick={() => {
                        setActiveUser(user.id);
                        setActiveTab(groupedData[user.id][0]?.alias || null); // Set first employment as active
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {`${user.first_name} ${user.last_name}`}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </CardHeader>

          {/* Inner Navigation Tabs (Employment Records) */}
          {activeUser && (
            <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-3 py-2 p-0">
              <Nav className="nav-info" pills>
                {groupedData[activeUser].map((employment) => (
                  <NavItem key={employment.alias}>
                    <NavLink
                      className={`${
                        activeTab === employment.alias ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(employment.alias || null)}
                      style={{ cursor: "pointer" }}
                    >
                      {employment.employment_status}(
                      {employment.alias.slice(0, 8)})
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </CardHeader>
          )}

          {/* Tab Content */}
          <CardBody className="px-0 pb-0">
            {activeTab &&
              activeUser !== null && // Ensure activeUser is not null
              groupedData[activeUser] // Safe to access groupedData[activeUser]
                ?.filter((employment: any) => employment.alias === activeTab)
                .map((employment: any) => (
                  <div key={employment.alias}>
                    <h4>Employment Details</h4>
                    <p>
                      <strong>Name:</strong> {employment.user.first_name}{" "}
                      {employment.user.last_name}
                    </p>
                    <p>
                      <strong>ID:</strong> {employment.user.id}
                    </p>
                    <p>
                      <strong>Email:</strong> {employment.user.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {employment.user.phone}
                    </p>
                    <p>
                      <strong>Employment Status:</strong>{" "}
                      {employment.employment_status}
                    </p>
                    <p>
                      <strong>Employer Name:</strong>{" "}
                      {employment.employer_name || "N/A"}
                    </p>
                    <p>
                      <strong>Gross Annual Income:</strong>{" "}
                      {employment.gross_annual_income
                        ? `£${employment.gross_annual_income}`
                        : "N/A"}
                    </p>
                    <p>
                      <strong>Net Annual Income:</strong>{" "}
                      {employment.net_annual_income
                        ? `£${employment.net_annual_income}`
                        : "N/A"}
                    </p>
                    <p>
                      <strong>Bonus:</strong>{" "}
                      {employment.bonus ? `£${employment.bonus}` : "N/A"}{" "}
                      {employment.is_bonus_guaranteed ? "(Guaranteed)" : ""}
                    </p>
                  </div>
                ))}
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
