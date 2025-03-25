import { FC } from "react";
import { TabContent, TabPane, Button } from "reactstrap";
import HouseHoldIncomeTabContent from "./BudgetPlannerTabContents/HouseHoldIncomeTabContent";
import DebtRepaymentTabContent from "./BudgetPlannerTabContents/DebtRepaymentTabContent";
import LivingExpensesTabContents from "./BudgetPlannerTabContents/LivingExpensesTabContents";
import MonthlyBudgetTabContents from "./BudgetPlannerTabContents/MonthlyBudgetTabContents";
import DisclaimerTabContents from "./BudgetPlannerTabContents/DisclaimerTabContents";

interface BudgetPlannerTabContentProps {
  tabId: number | null;
  setTabId: (id: number) => void;
}

const BudgetPlannerTabContent: FC<BudgetPlannerTabContentProps> = ({ tabId, setTabId }) => {
  const tabs = [
    { id: 1, Component: HouseHoldIncomeTabContent },
    { id: 2, Component: DebtRepaymentTabContent },
    { id: 3, Component: LivingExpensesTabContents },
    { id: 4, Component: MonthlyBudgetTabContents },
    { id: 5, Component: DisclaimerTabContents }
  ];

  return (
    <TabContent activeTab={tabId ?? undefined}>
      {tabs.map(({ id, Component }) => (
        <TabPane key={id} tabId={id}>
          <Component />
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