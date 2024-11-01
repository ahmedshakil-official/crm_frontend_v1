import { Cancel, Save, SubTask, TaskTitle } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTask, setAddModal, setMyTask, setValidation } from "@/Redux/Reducers/TaskSlice";
import { AddTaskData } from "@/Types/TaskType";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { TaskRadioRow } from "./TaskRadioRow";

export const NewTaskModalForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { validation } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const AddTask: SubmitHandler<AddTaskData> = (data) => {
    if (data.title !== "" && data.subTitle !== "" && data.description !== "") {
      dispatch(addNewTask(data));
      dispatch(setMyTask(data));
      dispatch(setAddModal());
      dispatch(setValidation(false));
    }
  };

  return (
    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTask)}>
      <Row>
        <Col md="12" className="mb-3 mt-0">
          <Label check>{TaskTitle}</Label>
          <input type="text" className={`form-control ${validation && `${errors.title ? "is-invalid" : "is-valid"}`}`} {...register("title", {required: true,})} />
        </Col>
        <Col md="12" className="mb-3 mt-0">
          <Label check>{SubTask}</Label>
          <input type="text" className={`form-control ${validation && `${errors.subTitle ? "is-invalid" : "is-valid"}`}`} {...register("subTitle", {required: true,})} />
        </Col>
        <TaskRadioRow />
        <Col md="6" className="mb-3 mt-0">
          <Input type="select" className="form-control js-example-basic-single">
            <option value="My Task">My Task</option>
          </Input>
        </Col>
        <Col md="6" className="mb-3 mt-0">
          <Input type="select" className={`js-example-disabled-results form-control js-example-basic-single `}>
            <option value="General">General</option>
          </Input>
        </Col>
        <Col md="12" className="mb-3 col-md-12 my-0">
          <textarea className={`form-control ${validation && `${errors.description ? "is-invalid" : "is-valid"}`}`} {...register("description", {required: true,})} />
        </Col>
      </Row>
      <Button color="secondary" className="me-2" type="submit" onClick={() => dispatch(setValidation(true))}>{Save}</Button>
      <Button color="primary" onClick={() => dispatch(setAddModal())}>{Cancel}</Button>
    </Form>
  );
};
