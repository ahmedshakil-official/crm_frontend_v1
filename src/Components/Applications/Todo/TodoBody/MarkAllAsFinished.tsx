import AddNewTask from "./AddNewTask";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAllTaskCompleted } from "@/Redux/Reducers/ToDoSlice";

const MarkAllAsFinished = () => {
  const { allTaskCompleted } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  return (
    <div className="mark-all-tasks">
      <div className="mark-all-tasks-container">
        <span className={`mark-all-btn`} role="button" onClick={() => dispatch(setAllTaskCompleted(!allTaskCompleted))}>
          <span className={`btn-label text-${!allTaskCompleted ? 'success' : 'danger'}`}>{allTaskCompleted ? "Mark all as finished" : "Mark all as Incomplete"}</span>
          <span className={`action-box ${allTaskCompleted ? "completed" : ""}`}>
            <i className="icon">
              <i className="icon-check" />
            </i>
          </span>
        </span>
      </div>
      <AddNewTask />
    </div>
  );
};

export default MarkAllAsFinished;
