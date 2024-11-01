"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { App, Tasks } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchTaskApiData, setActiveTab } from "@/Redux/Reducers/TaskSlice";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import NavClass from "./NavClass/NavClass";
import TabClass from "./TabClass/TabClass";

const TaskContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTaskApiData());
  }, []);
  const activeToggle = (tab: string) => dispatch(setActiveTab(tab));

  return (
    <>
    <Breadcrumbs mainTitle={Tasks} parent={App} />
    <Container fluid>
      <div className="email-wrap bookmark-wrap">
        <Row>
          <NavClass activeToggle={activeToggle} />
          <TabClass />
        </Row>
      </div>
    </Container>
    </>
    
  );
};

export default TaskContainer;
