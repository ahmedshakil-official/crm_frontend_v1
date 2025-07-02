import { useState } from "react";
import { Button, Input } from "reactstrap";
import BudgetPlannerModal from "./BudgetPlannerModals/BudgetPlannerModal";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useGetSingleCaseQuery } from "@/Redux/Reducers/CommonComponents/Cases/CasesApi";
import { getNextTabNav } from "@/utils/Helper/nextTabUtils";
import { basicTabIndicator } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import { toast } from "react-toastify";

const BudgetPlanner: React.FC = () => {
  const params = useParams();
  const { casealias } = params;
  const dispatch = useAppDispatch();
  const { data: caseData, isLoading: isCaseFetching } = useGetSingleCaseQuery(
    { case_alias: casealias },
    { skip: !casealias }
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const currentTab: string | null = useAppSelector(
    (state) => state.caseDetails.basicTabId
  );

  const handleNextTab = () => {
    const nextTabNav = getNextTabNav(caseData?.case_stage, currentTab!);
    if (nextTabNav) {
      dispatch(basicTabIndicator(nextTabNav));
    } else {
      toast.info("This is the last tab.");
    }
  };

  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <Button color="primary" onClick={toggleModal}>
          Complete Budget Planner
        </Button>
        <Input type="textarea" placeholder="Enter notes..." rows={4} />
        <div className="mt-auto d-flex justify-content-end w-100 gap-3">
          <Button color="success">Save</Button>
          <Button color="primary" onClick={handleNextTab}>
            Next
          </Button>
        </div>
      </div>

      <BudgetPlannerModal isOpen={isModalOpen} toggle={toggleModal} />
    </div>
  );
};

export default BudgetPlanner;
