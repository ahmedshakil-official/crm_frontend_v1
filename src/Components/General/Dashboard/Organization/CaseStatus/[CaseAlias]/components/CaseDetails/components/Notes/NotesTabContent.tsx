import React from "react";
import { TabContent, TabPane, Button } from "reactstrap";
import { useParams } from "next/navigation";
import NotesViewTab from "./NotesViewTabs/NotesViewTab";
import TasksViewTab from "./NotesViewTabs/TasksViewTab";

interface NotesTabContentProps {
  tabId: string;
  setTabId: (id: string) => void;
}

export const NotesTabContent: React.FC<NotesTabContentProps> = ({
  tabId,
  setTabId,
}) => {
  const { casealias } = useParams();

  const handleNext = () => setTabId((parseInt(tabId) + 1).toString());

  return (
    <div>
      <TabContent activeTab={tabId} className="w-full">
        <TabPane tabId="1">
          <NotesViewTab />
          <Button color="primary" onClick={handleNext} className="float-end">
            Next
          </Button>
        </TabPane>
        <TabPane tabId="2">
          <TasksViewTab />
        </TabPane>
      </TabContent>
    </div>
  );
};
