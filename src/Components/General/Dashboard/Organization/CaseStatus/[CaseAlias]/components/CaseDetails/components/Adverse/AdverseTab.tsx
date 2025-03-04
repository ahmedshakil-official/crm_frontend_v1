import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import AdverseTabContent from "./AdverseTabContent";

// Define the type for the applicant object
interface Applicant {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
}

// Define the type for the adverse data object
interface AdverseDataItem {
  alias: string;
  applicant: Applicant;
  status: "Pending" | "Approved" | "Rejected"; // Union type for specific status values
  date: string; // ISO date format (e.g., "2023-10-01")
}

// Define the type for the adverseData array
export type AdverseData = AdverseDataItem[];

const adverseData: AdverseData = [
  {
    alias: "applicant1",
    applicant: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
    },
    status: "Pending",
    date: "2023-10-01",
  },
  {
    alias: "applicant2",
    applicant: {
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Othertown, USA",
    },
    status: "Approved",
    date: "2023-09-25",
  },
  {
    alias: "applicant3",
    applicant: {
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
      address: "789 Oak St, Somewhere, USA",
    },
    status: "Rejected",
    date: "2023-09-30",
  },
  {
    alias: "applicant4",
    applicant: {
      first_name: "Bob",
      last_name: "Brown",
      email: "bob.brown@example.com",
      phone: "444-555-6666",
      address: "321 Pine St, Nowhere, USA",
    },
    status: "Pending",
    date: "2023-10-05",
  },
];

export const AdverseTab = () => {
  const [basicTab, setBasicTab] = useState<string | null>(
    adverseData[0]?.alias || null
  );

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {adverseData?.map((applicant) => (
                <NavItem key={applicant.alias}>
                  <NavLink
                    className={`${
                      basicTab === applicant.alias ? "active" : ""
                    }`}
                    onClick={() => setBasicTab(applicant.alias || null)}
                    style={{ cursor: "pointer" }}
                  >
                    {`${applicant?.applicant?.first_name} ${applicant?.applicant?.last_name}`}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <AdverseTabContent adverseData={adverseData} basicTab={basicTab} />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
