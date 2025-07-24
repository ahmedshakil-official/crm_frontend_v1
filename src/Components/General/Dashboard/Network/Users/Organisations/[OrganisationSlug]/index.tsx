import Breadcrumbs from "@/Components/General/Dashboard/CommonComponents/Breadcrumbs/Breadcrumbs";
import { useGetSingleOrganisationQuery } from "@/Redux/Reducers/Network/Organisations/SingleOrganisation/SingleOrganisationApi";
import { OrganisationsProps } from "@/Types/Network/OrganisationsTypes";
import LoadingSpinner from "@/app/loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import DangerZone from "./DangerZone/DangerZone";
import OrganisationBanner from "./OrganisationProfile/OrganisationBanner";

const OrganisationContainer: React.FC = () => {
  const [organisationInfo, setOrganisationInfo] =
    useState<OrganisationsProps>();
  const { organisationslug } = useParams();
  const router = useRouter();

  // rtk hooks
  const {
    data: organisationData,
    isLoading,
    isError,
  } = useGetSingleOrganisationQuery(
    { organisationslug },
    {
      skip: !organisationslug,
    }
  );

  useEffect(() => {
    if (!isLoading) {
      if (isError || !organisationData) {
        router.push("/dashboard/network");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      if (organisationData.slug !== organisationslug) {
        router.push("/dashboard/network");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      setOrganisationInfo(organisationData);
    }
  }, [organisationData, organisationslug, router, isLoading, isError]);

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError || !organisationInfo) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Container fluid className="default-dashboard">
        <Row>
          <Breadcrumbs
            title="Organisation Details"
            subTitle="Welcome! Continue your journey."
            parent="Users"
            child="Organisation"
          />
        </Row>
        <Row>
          <OrganisationBanner
            organisationInfo={organisationInfo}
            isLoading={isLoading}
          />
        </Row>
        <Row>
          <DangerZone organisationInfo={organisationInfo} />
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
