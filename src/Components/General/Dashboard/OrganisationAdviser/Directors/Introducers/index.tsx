import Introducers from "../../../CommonComponents/Directors/Introducers/Introducers";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationIntroducersContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Introducers"
        title="Hello! there"
        parent="Directors"
        activePage="Introducers"
      />
      <Introducers />
    </>
  );
};

export default OrganisationIntroducersContainer;
