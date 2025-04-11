import { useGetCaseBudgetPlannerQuery } from "@/Redux/Reducers/Cases/SingleCaseInfo/CaseDetails/BudgetPlanner/BudgetPlannerApi";
import { initializeBudgetPlannerForm } from "@/Redux/Reducers/Cases/SingleCaseInfo/CaseDetails/BudgetPlanner/BudgetPlannerFormSlice";
import { BudgetPlannerTabContentProps } from "@/Types/Organization/CaseDetails/BudgetPlannerTypes";
import { useParams } from "next/navigation";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, TabContent, TabPane } from "reactstrap";
import DebtRepaymentTabContent from "./BudgetPlannerTabContents/DebtRepaymentTabContent";
import DisclaimerTabContents from "./BudgetPlannerTabContents/DisclaimerTabContents";
import HouseHoldIncomeTabContent from "./BudgetPlannerTabContents/HouseHoldIncomeTabContent";
import LivingExpensesTabContents from "./BudgetPlannerTabContents/LivingExpensesTabContents";
import MonthlyBudgetTabContents from "./BudgetPlannerTabContents/MonthlyBudgetTabContents";

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
