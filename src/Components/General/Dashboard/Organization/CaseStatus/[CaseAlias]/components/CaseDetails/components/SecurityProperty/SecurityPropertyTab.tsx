import { useGetPropertyDetailsQuery } from "@/Redux/Reducers/CaseDetails/SecurityPropertyDetails/SecurityPropertyDetailsApi";
import { SecurityPropertyDetailsProps } from "@/Types/Organization/CaseDetails/SecurityPropertyDetailsTypes";
import LoadingSpinner from "@/app/loading";
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
import SecurityPropertyContent from "./SecurityPropertyContent";

const SecurityPropertyTab: React.FC = () => {
  const [activeUser, setActiveUser] = useState<number | null>(null); // State for active user
  const [activeTab, setActiveTab] = useState<string | null>(null); // State for active property tab

  // Get case alias from URL params
  const params = useParams();
  const { casealias } = params;

  // Fetch data
  const { data: propertyDetails, isLoading } = useGetPropertyDetailsQuery({
    case_alias: casealias,
  });

  // Group property details by user ID
  const groupByUserId = (data: SecurityPropertyDetailsProps[]) => {
    const grouped: Record<number, SecurityPropertyDetailsProps[]> = {};
    data?.forEach((record) => {
      if (!grouped[record.user.id]) {
        grouped[record.user.id] = [];
      }
      grouped[record.user.id].push(record);
    });
    return grouped;
  };

  // Group property details by user ID
  const groupedData = groupByUserId(propertyDetails || []);

  // Set the first user and their first property as default when data is fetched
  useEffect(() => {
    if (propertyDetails && propertyDetails.length > 0) {
      const firstUserId = propertyDetails[0]?.user.id;
      setActiveUser(firstUserId);
      setActiveTab(propertyDetails[0]?.alias || null);
    }
  }, [propertyDetails]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          {/* Outer Navigation Tabs (Users) */}
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav
              className="nav-warning d-flex flex-wrap gap-2 justify-content-center"
              pills
            >
              {Object.keys(groupedData).map((userId) => {
                const user = groupedData[Number(userId)][0].user; // Get the first record's user info
                return (
                  <NavItem key={user.id}>
                    <NavLink
                      className={`${activeUser === user.id ? "active" : ""}`}
                      onClick={() => {
                        setActiveUser(user.id);
                        setActiveTab(groupedData[user.id][0]?.alias || null); // Set first property as active
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

          {/* Inner Navigation Tabs (Properties for the selected user) */}
          {activeUser && groupedData[activeUser] && (
            <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-3 pt-3 pb-0">
              <Nav
                tabs
                className="border-tab mb-0 d-flex flex-wrap gap-2 justify-content-center"
              >
                {groupedData[activeUser].map((property, index) => (
                  <NavItem key={property.alias}>
                    <NavLink
                      className={`nav-border text-info tab-info ${
                        activeTab === property.alias ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(property.alias || null)}
                      style={{ cursor: "pointer", fontSize: "0.7rem" }}
                    >
                      Security {index + 1}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </CardHeader>
          )}

          {/* Tab Content */}
          {activeTab && activeUser && (
            <SecurityPropertyContent
            activeTab={activeTab}
            activeUser={activeUser}
            groupedData={groupedData}
            />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SecurityPropertyTab;
