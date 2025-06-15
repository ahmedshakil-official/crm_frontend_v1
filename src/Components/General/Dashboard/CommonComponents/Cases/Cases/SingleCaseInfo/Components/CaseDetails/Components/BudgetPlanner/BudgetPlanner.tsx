import { useState } from "react";
import { Button, Input } from "reactstrap";
import BudgetPlannerModal from "./BudgetPlannerModals/BudgetPlannerModal";

const BudgetPlanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <Button color="primary" onClick={toggleModal}>
          Complete Budget Planner
        </Button>
        <Input type="textarea" placeholder="Enter notes..." rows={4} />
        <div className="mt-auto d-flex justify-content-end w-100">
          <Button color="success">Save</Button>
        </div>
      </div>

      <BudgetPlannerModal isOpen={isModalOpen} toggle={toggleModal} />
    </div>
  );
};

export default BudgetPlanner;
