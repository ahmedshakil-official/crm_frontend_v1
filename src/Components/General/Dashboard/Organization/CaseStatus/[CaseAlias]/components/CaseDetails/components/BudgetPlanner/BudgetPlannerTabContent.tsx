import { FC, useEffect } from "react";
import { TabContent, TabPane, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import HouseHoldIncomeTabContent from "./BudgetPlannerTabContents/HouseHoldIncomeTabContent";
import DebtRepaymentTabContent from "./BudgetPlannerTabContents/DebtRepaymentTabContent";
import LivingExpensesTabContents from "./BudgetPlannerTabContents/LivingExpensesTabContents";
import MonthlyBudgetTabContents from "./BudgetPlannerTabContents/MonthlyBudgetTabContents";
import DisclaimerTabContents from "./BudgetPlannerTabContents/DisclaimerTabContents";
import { useGetCaseBudgetPlannerQuery } from "@/Redux/Reducers/CaseDetails/BudgetPlanner/BudgetPlannerApi";
import { useParams } from "next/navigation";
import { initializeBudgetPlannerForm } from "@/Redux/Reducers/CaseDetails/BudgetPlanner/BudgetPlannerFormSlice";

interface BudgetPlannerTabContentProps {
  tabId: number | null;
  setTabId: (id: number) => void;
  updateField: (field: string, value: any) => void;
}

const tabs = [
  { id: 1, Component: HouseHoldIncomeTabContent },
  { id: 2, Component: DebtRepaymentTabContent },
  { id: 3, Component: LivingExpensesTabContents },
  { id: 4, Component: MonthlyBudgetTabContents },
  { id: 5, Component: DisclaimerTabContents },
];

const BudgetPlannerTabContent: FC<BudgetPlannerTabContentProps> = ({
  tabId,
  setTabId,
  updateField,
}) => {
  const { casealias } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCaseBudgetPlannerQuery({
    case_alias: casealias as string,
  });

  useEffect(() => {
    if (data && data[0]) {
      dispatch(initializeBudgetPlannerForm(data[0]));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TabContent activeTab={tabId ?? undefined}>
      {tabs.map(({ id, Component }) => (
        <TabPane key={id} tabId={id}>
          <Component updateField={updateField} />{" "}
          {/* Pass updateField to each tab */}
          {id !== 5 && (
            <Button
              color="primary"
              onClick={() => tabId !== null && setTabId(tabId + 1)}
              className="float-end mt-2"
            >
              Next
            </Button>
          )}
        </TabPane>
      ))}
    </TabContent>
  );
};

export default BudgetPlannerTabContent;
