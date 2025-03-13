"use client";
import { FC, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import BudgetPlannerTabContent from "../BudgetPlannerTabContent";

interface BudgetPlannerModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const BudgetPlannerModal: FC<BudgetPlannerModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [basicTab, setBasicTab] = useState<number>(1); // Remove null type
  const budgetPlannerTabTitleData = [
    "Household Income",
    "Debt Repayment",
    "Living Expenses",
    "Monthly Budget",
    "Disclaimers",
  ];

  const handleTabClick = (index: number) => {
    setBasicTab(index);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="xl">
      <ModalHeader toggle={toggle} className="bg-primary text-white">
        <span className="fs-5">Budget Planner</span>
      </ModalHeader>
      <ModalBody>
        <Card>
          <CardBody>
            <CardHeader className="d-flex justify-content-center align-items-center flex-wrap pb-2 p-0">
              <Nav tabs className="w-100">
                {budgetPlannerTabTitleData.map((tabName, index) => (
                  <NavItem key={index + 1} className="flex-grow-1">
                    <NavLink
                      className={`text-primary text-center ${
                        basicTab === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(index + 1)}
                      style={{ cursor: "pointer", fontSize: ".9rem" }}
                    >
                      {tabName}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </CardHeader>
            <CardBody className="px-0 pb-0">
              <BudgetPlannerTabContent
                tabId={basicTab}
                setTabId={setBasicTab}
              />
            </CardBody>
          </CardBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
        <Button color="primary" onClick={toggle}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default BudgetPlannerModal;
