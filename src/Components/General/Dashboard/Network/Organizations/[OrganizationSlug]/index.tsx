import apiClient from "@/services/api-client";
import { OrganizationsProps } from "@/Types/Network/OrganizationsTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import DangerZone from "./DangerZone/DangerZone";
import OrganizationBreadcrumbs from "./OrganizationBreadcrumbs/OrganizationBreadcrumbs";
import OrganizationBanner from "./OrganizationProfile/OrganizationBanner";

const OrganizationContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationsProps>();
  const params = useParams();
  const { organizationslug } = params;

  const fetchsetOrganizationInfo = async () => {
    setIsLoading(true);
    try {
      const OrganizationData = await apiClient.get(
        `/organization/list/${organizationslug}`
      );
      setOrganizationInfo(OrganizationData?.data || {});
      console.log(OrganizationData);
    } catch (error) {
      console.error("Error Fetching Cases", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchsetOrganizationInfo();
  }, []);

  return (
    <>
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationBreadcrumbs />
        </Row>
        <Row>
          <OrganizationBanner
            organizationInfo={organizationInfo}
            fetchsetOrganizationInfo={fetchsetOrganizationInfo}
            isLoading={isLoading}
          />
        </Row>
        <Row>
          <DangerZone
            organizationInfo={organizationInfo}
            fetchsetOrganizationInfo={fetchsetOrganizationInfo}
          />
        </Row>
      </Container>
    </>
  );
};

export default OrganizationContainer;
