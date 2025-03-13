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

const BudgetPlannerTabContent: FC<BudgetPlannerTabContentProps> = ({
  tabId,
  setTabId,
}) => {
  const handleNext = () => tabId !== null && setTabId(tabId + 1);

  return (
    <div>
      <TabContent activeTab={tabId ?? undefined}>
        <TabPane tabId={1}>
          <HouseHoldIncomeTabContent />
          <Button
            color="primary"
            onClick={handleNext}
            className="float-end mt-2 "
          >
            Next
          </Button>
        </TabPane>
        <TabPane tabId={2}>
          <DebtRepaymentTabContent />
          <Button
            color="primary"
            onClick={handleNext}
            className="float-end mt-2 mt-2"
          >
            Next
          </Button>
        </TabPane>
        <TabPane tabId={3}>
          <LivingExpensesTabContents />
          <Button
            color="primary"
            onClick={handleNext}
            className="float-end mt-2 mt-2"
          >
            Next
          </Button>
        </TabPane>
        <TabPane tabId={4}>
          <MonthlyBudgetTabContents />
          <Button
            color="primary"
            onClick={handleNext}
            className="float-end mt-2 mt-2"
          >
            Next
          </Button>
        </TabPane>
        <TabPane tabId={5}>
          <DisclaimerTabContents />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default BudgetPlannerTabContent;
