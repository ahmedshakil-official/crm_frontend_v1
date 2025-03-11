import { FC } from "react";
import { TabContent, TabPane, Button } from "reactstrap";
import HouseHoldIncomeTabContent from "./BudgetPlannerTabContents/HouseHoldIncomeTabContent";
import DebtRepaymentTabContent from "./BudgetPlannerTabContents/DebtRepaymentTabContent";

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
          <Button color="primary" onClick={handleNext} className="float-end mt-2 mt-2">
            Next
          </Button>
        </TabPane>
        <TabPane tabId={3}>
          <p>d</p>
          <Button color="primary" onClick={handleNext} className="float-end mt-2 mt-2">
            Next
          </Button>
        </TabPane>
        <TabPane tabId={4}>
          <p>ds</p>
          <Button color="primary" onClick={handleNext} className="float-end mt-2 mt-2">
            Next
          </Button>
        </TabPane>
        <TabPane tabId={5}>
          <p>Disclaimers</p>
          <Button color="primary" className="float-end mt-2">
            Save
          </Button>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default BudgetPlannerTabContent;
