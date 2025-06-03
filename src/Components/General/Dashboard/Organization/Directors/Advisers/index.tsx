import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganizationAdvisersContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Advisers"
        title="Hello there!"
        parent="Directors"
        activePage="Advisers"
      />
      <Advisers />
    </>
  );
};

export default OrganizationAdvisersContainer;
