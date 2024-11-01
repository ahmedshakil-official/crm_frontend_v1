import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setVisible } from "@/Redux/Reducers/ToDoSlice";
import { Button } from "reactstrap";

const AddNewTask = () => {
  const { visible } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  return (
    <div className="todo-list-footer ms-2">
      <div className="add-task-btn-wrapper">
        <span className="add-task-btn">
          <Button color="primary" onClick={() => dispatch(setVisible(!visible))}>
            <i className="icon-plus" /> {'Add new task'}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default AddNewTask;
