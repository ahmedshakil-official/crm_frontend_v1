import SingleCaseInfo from "@/Components/General/Dashboard/CommonComponents/SingleCaseInfo/SingleCaseInfo";
import OrganisationAdviserBreadcrumbs from "../../../Breadcrumbs/Breadcrumbs";

const CaseContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Cases Status"
        title="Hello! there"
        activePage="Cases"
      />
      <SingleCaseInfo />
    </>
  );
};

export default CaseContainer;
