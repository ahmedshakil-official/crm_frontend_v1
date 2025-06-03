import Introducers from "../../../CommonComponents/Directors/Introducers/Introducers";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganizationIntroducersContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Introducers"
        title="Hello there!"
        parent="Directors"
        activePage="Introducers"
      />
      <Introducers />
    </>
  );
};

export default OrganizationIntroducersContainer;
