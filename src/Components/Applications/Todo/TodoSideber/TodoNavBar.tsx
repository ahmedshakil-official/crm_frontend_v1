import { Completed, Href, InProcess, Pending, ToDoList } from "@/Constant";
import { SideBartList } from "@/Data/Applications/Todo/Todo";
import { useAppSelector } from "@/Redux/Hooks";
import { CheckCircle } from "react-feather";
import { Badge, Button, Nav, NavItem } from "reactstrap";

const TodoNavBar = () => {
  const { todoList } = useAppSelector((state) => state.todo);

  return (
    <Nav className="main-menu">
      <NavItem>
        <Button color="primary" block className="bg-primary btn-mail w-100">
          <CheckCircle className="me-2" />
          {ToDoList}
        </Button>
      </NavItem>
      {SideBartList.map((item, i) => (
        <NavItem key={i}>
          <a href={Href}>
            <span className={`iconbg badge-light-${item.color}`}> {item.icon}</span>
            <span className="title ms-2 font-white">{item.tittle}</span>
            <Badge pill color={item.tittle === "In Process" ? "primary" : item.color} className="text-white">
              {item.tittle === Completed && todoList.filter((data) => data.badge === "Done").length}
              {item.tittle === Pending && todoList.filter((data) => data.badge === "Pending").length}
              {item.tittle === InProcess && todoList.filter((data) => data.badge === "In Progress").length}
            </Badge>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TodoNavBar;
