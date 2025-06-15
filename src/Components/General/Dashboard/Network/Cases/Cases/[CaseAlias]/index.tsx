import SingleCaseInfo from "@/Components/General/Dashboard/CommonComponents/SingleCaseInfo/SingleCaseInfo";
import NetworkBreadcrumbs from "../../../Breadcrumbs/Breadcrumbs";

const CaseContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Case Status"
        title="Hello there!"
        parent="Cases Status"
        activePage="Case"
      />
      <SingleCaseInfo />
    </>
  );
};

export default CaseContainer;
