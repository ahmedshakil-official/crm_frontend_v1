import { Href } from "@/Constant";
import { TaskData } from "@/Data/Applications/Task";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducers/TaskSlice";
import { NavClassType } from "@/Types/TaskType";
import { Badge, NavItem } from "reactstrap";

export const TaskViewData :React.FC<NavClassType>= ({ activeToggle }) => {
  const { activeTab, myTask } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <>
      {TaskData.map((item) => (
        <NavItem key={item.id}>
          <a href={Href} className={activeTab === item.activeTab ? "active" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title">{item.title}</span>
            {item.badge && <Badge pill color={item.color} className="text-white task-badge">{myTask.length}</Badge>}
          </a>
        </NavItem>
      ))}
    </>
  );
};
