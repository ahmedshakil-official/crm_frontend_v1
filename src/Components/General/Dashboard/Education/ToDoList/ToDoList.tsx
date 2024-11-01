import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { ToDoListHeading } from "@/Constant";
import { ToDoListData } from "@/Data/General/Dashboard/Education/EducationData";
import Link from "next/link";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const ToDoList = () => {
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-6">
      <Card>
        <DashboardCommonHeader title={ToDoListHeading} />
        <CardBody className="todo-list filled-checkbox">
          <ul>
            {ToDoListData.map((data, index) => (
              <li className={`d-flex line-${data.color}`} key={index}>
                <div className="flex-shrink-0">
                  <div className={`form-check checkbox checkbox-solid-primary`}>
                    <Input id={data.id} type="checkbox" defaultChecked={data.defaultChecked} />
                    <Label check htmlFor={data.id} />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <Link href="/app/task">
                    <h5 className="f-w-500">{data.title}</h5>
                  </Link>
                  <h6>{data.text}</h6>
                </div>
                <span>{data.hours}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToDoList;
