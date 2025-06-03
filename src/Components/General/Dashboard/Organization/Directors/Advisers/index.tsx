import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import OrganizationAdvisersBreadcrumbs from "./Breadcrumbs/Breadcrumbs";

const OrganizationAdvisersContainer: React.FC = () => {
  return (
    <>
      <OrganizationAdvisersBreadcrumbs />
      <Advisers />
    </>
  );
};

export default OrganizationAdvisersContainer;
