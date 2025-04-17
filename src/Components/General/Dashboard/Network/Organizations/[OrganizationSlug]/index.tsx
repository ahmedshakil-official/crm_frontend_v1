import { useGetSingleOrganizationQuery } from "@/Redux/Reducers/Network/Organization/SingleOrganization/SingleOrganizationApi";
import { OrganizationsProps } from "@/Types/Network/OrganizationsTypes";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import DangerZone from "./DangerZone/DangerZone";
import Employee from "./Employee/Employee";
import OrganizationBreadcrumbs from "./OrganizationBreadcrumbs/OrganizationBreadcrumbs";
import OrganizationBanner from "./OrganizationProfile/OrganizationBanner";

const OrganizationContainer: React.FC = () => {
  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationsProps>();
  const { organizationslug } = useParams();
  // rtk hooks
  const { data: organizationData, isLoading } = useGetSingleOrganizationQuery({
    organizationslug,
  });

  useEffect(() => {
    try {
      if (organizationData) {
        setOrganizationInfo(organizationData);
      }
    } catch (error) {
      console.error("Error Fetching Cases", error);
    }
  }, [organizationData]);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationBreadcrumbs />
        </Row>
        <Row>
          <OrganizationBanner
            organizationInfo={organizationInfo}
            isLoading={isLoading}
          />
        </Row>
        <Row>
          <Employee />
        </Row>
        <Row>
          <DangerZone organizationInfo={organizationInfo} />
        </Row>
      </Container>
    </>
  );
};

export default OrganizationContainer;
