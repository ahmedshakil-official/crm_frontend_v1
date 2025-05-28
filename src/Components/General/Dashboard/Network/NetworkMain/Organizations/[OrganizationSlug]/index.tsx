import { useGetSingleOrganizationQuery } from "@/Redux/Reducers/Network/Organization/SingleOrganization/SingleOrganizationApi";
import { OrganizationsProps } from "@/Types/Network/OrganizationsTypes";
import LoadingSpinner from "@/app/loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import DangerZone from "./DangerZone/DangerZone";
import Employee from "./Employee/Employee";
import OrganizationBreadcrumbs from "./OrganizationBreadcrumbs/OrganizationBreadcrumbs";
import OrganizationBanner from "./OrganizationProfile/OrganizationBanner";

const OrganizationContainer: React.FC = () => {
  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationsProps>();
  const { organizationslug } = useParams();
  const router = useRouter();

  // rtk hooks
  const {
    data: organizationData,
    isLoading,
    isError,
  } = useGetSingleOrganizationQuery(
    { organizationslug },
    {
      skip: !organizationslug,
    }
  );

  useEffect(() => {
    if (!isLoading) {
      if (isError || !organizationData) {
        router.push("/dashboard/network");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      if (organizationData.slug !== organizationslug) {
        router.push("/dashboard/network");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      setOrganizationInfo(organizationData);
    }
  }, [organizationData, organizationslug, router, isLoading, isError]);

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError || !organizationInfo) {
    return null; // Will redirect in useEffect
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
