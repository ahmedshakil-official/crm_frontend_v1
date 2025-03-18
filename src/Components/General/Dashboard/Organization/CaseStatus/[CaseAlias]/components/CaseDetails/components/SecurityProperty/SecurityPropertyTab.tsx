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
  const [basicTab, setBasicTab] = useState<string | null>(null);

  // Get case alias from URL params
  const params = useParams();
  const { casealias } = params;

  // Fetch applicants data
  const { data: propertyDetails, isLoading } = useGetPropertyDetailsQuery({
    case_alias: casealias,
  });

  // Set the first applicant's alias as default when data is available
  useEffect(() => {
    if (propertyDetails?.length > 0 && !basicTab) {
      setBasicTab(propertyDetails[0]?.alias || null);
    }
  }, [propertyDetails, basicTab]);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Col xxl="12" className="px-5">
      <Card>
        <CardBody>
          <CardHeader className="d-flex justify-content-center align-items-center flex-wrap gap-2 pb-2 p-0">
            <Nav className="nav-warning" pills>
              {propertyDetails?.map(
                (property: SecurityPropertyDetailsProps) => (
                  <NavItem key={property.alias}>
                    <NavLink
                      className={`cursor-pointer ${
                        basicTab === property.alias ? "active" : ""
                      }`}
                      onClick={() => setBasicTab(property.alias || null)}
                    >
                      {`${property?.user?.first_name} ${property?.user?.last_name}`}
                    </NavLink>
                  </NavItem>
                )
              )}
            </Nav>
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <SecurityPropertyContent
              propertyDetails={propertyDetails}
              basicTab={basicTab}
            />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SecurityPropertyTab;
