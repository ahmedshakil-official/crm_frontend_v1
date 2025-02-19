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
import ApplicantsDetailsTabContent from "./ApplicantsDetailsTabContent";

export interface ApplicantsUsersProps {
  alias: string;
  first_name: string;
  last_name: string;
}

export const ApplicantsDetailsTab = () => {
  const [basicTab, setBasicTab] = useState<string | null>(null);
  const [applicants, setApplicants] = useState<ApplicantsUsersProps[]>([]);
  const params = useParams();
  const { casealias } = params;

  const fetchApplicants = async () => {
    try {
      const response = await apiClient.get(`/cases/${casealias}/user/list/`);
      setApplicants(response.data);
      if (response.data.length > 0) {
        setBasicTab(response.data[0].alias); // Set the first tab as active initially
      }
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {applicants.map((applicant) => (
                <NavItem key={applicant.alias}>
                  <NavLink
                    className={`${
                      basicTab === applicant.alias ? "active" : ""
                    }`}
                    onClick={() => setBasicTab(applicant.alias)}
                    style={{ cursor: "pointer" }}
                  >
                    {`${applicant.first_name} ${applicant.last_name}`}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            {basicTab && <div>Selected Applicant: {basicTab}</div>}
            <ApplicantsDetailsTabContent />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
