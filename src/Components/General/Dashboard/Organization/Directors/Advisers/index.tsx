import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import AdvisersBreadcrumbs from "./Breadcrumbs/Breadcrumbs";

const AdvisersContainer: React.FC = () => {
  return (
    <>
      <AdvisersBreadcrumbs />
      <Advisers />
    </>
  );
};

export default AdvisersContainer;
