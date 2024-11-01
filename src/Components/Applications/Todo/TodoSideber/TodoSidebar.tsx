import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ToDoFilter } from "@/Constant";
import TodoUserProfile from "./TodoUserProfile";
import TodoNavBar from "./TodoNavBar";

const TodoSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Col xl="3" className="xl-30 box-col-12">
      <div className="email-sidebar md-sidebar">
        <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={() => setOpen(!open)}>
          {ToDoFilter}
        </Button>
        <div className={`email-left-aside md-sidebar-aside ${open ? "open" : ""}`}>
          <Card className='overflow-hidden'>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <TodoUserProfile />
                <TodoNavBar />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default TodoSidebar;
