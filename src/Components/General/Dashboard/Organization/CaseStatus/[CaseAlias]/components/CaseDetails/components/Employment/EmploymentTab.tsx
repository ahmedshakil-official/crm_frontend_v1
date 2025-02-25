import apiClient from "@/services/api-client";
import { EmploymentDetailsProps } from "@/Types/Organization/CaseDetails/EmploymentTypes";
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
import { EmploymentTabContent } from "./EmploymentTabContent"; // Import the new component

export const EmploymentTab = () => {
  // State for active user, active tab, and employment data
  const [activeUser, setActiveUser] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [employmentData, setEmploymentData] = useState<
    EmploymentDetailsProps[]
  >([]);

  // UseParams with type assertion
  const params = useParams();
  const { casealias } = params;

  // Helper function to group employment data by user ID
  const groupByUserId = (data: EmploymentDetailsProps[]) => {
    const grouped: Record<number, EmploymentDetailsProps[]> = {};
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
      const response = await apiClient.get<EmploymentDetailsProps[]>(
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
            <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-3 pt-3 pb-0">
              <Nav tabs className="border-tab mb-0">
                {groupedData[activeUser].map((employment) => (
                  <NavItem key={employment.alias}>
                    <NavLink
                      className={`nav-border text-info tab-info ${
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
          <EmploymentTabContent
            activeTab={activeTab}
            activeUser={activeUser}
            groupedData={groupedData}
          />
        </CardBody>
      </Card>
    </Col>
  );
};
