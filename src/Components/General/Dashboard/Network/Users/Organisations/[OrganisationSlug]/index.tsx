import Breadcrumbs from "@/Components/General/Dashboard/CommonComponents/Breadcrumbs/Breadcrumbs";
import { useGetSingleOrganisationQuery } from "@/Redux/Reducers/Network/Organisations/SingleOrganisation/SingleOrganisationApi";
import { SingleOrganisationsProps } from "@/Types/Network/OrganisationsTypes";
import LoadingSpinner from "@/app/loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import OrgAdvisers from "./Advisers/OrgAdvisers";
import OrgCases from "./Cases/OrgCases";
import OrgClients from "./Clients/OrgClients";
import DangerZone from "./DangerZone/DangerZone";
import OrgLeads from "./Leads/OrgLeads";
import OrganisationBanner from "./OrganisationProfile/OrganisationBanner";

const OrganisationContainer: React.FC = () => {
  const [organisationInfo, setOrganisationInfo] =
    useState<SingleOrganisationsProps>();
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

      if (organisationData?.organization.slug !== organisationslug) {
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
      <Breadcrumbs
        title="Organisation Status"
        subTitle="Welcome! Continue your journey."
        parent="Users"
        child="Organisation"
      />
      <Container fluid>
        <Row>
          <Col md="4">
            <OrganisationBanner
              organisationInfo={organisationInfo}
              isLoading={isLoading}
            />
          </Col>
          <Col md="12">
            <OrgLeads />
            <OrgCases />
            <OrgClients />
            <OrgAdvisers />
            <DangerZone organisationInfo={organisationInfo} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
