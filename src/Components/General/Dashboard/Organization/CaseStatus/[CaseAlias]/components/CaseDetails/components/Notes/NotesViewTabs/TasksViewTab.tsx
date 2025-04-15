import { FC, useState } from "react";
import { Button, Col, Container, Row, Table } from "reactstrap";
import CreateTaskNoteModal from "../NotesModals/AddNewNoteModal";
import { NoteTask } from "../NotesTabContent";

interface TasksViewTabProps {
  tasks: NoteTask[];
}

const TasksViewTab: FC<TasksViewTabProps> = ({ tasks }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container fluid className="py-4">
      <Row className="mb-3">
        <Col className="text-end">
          <Button color="primary" onClick={() => setModalOpen(true)}>
            Add New Task
            <i className="fa-solid fa-circle-plus ms-1"></i>
          </Button>
        </Col>
      </Row>

      <div className="table-responsive">
        <Table striped hover>
          <thead>
            <tr>
              <th style={{ minWidth: "100px" }}>Type</th>
              <th style={{ minWidth: "150px" }}>Activity Date</th>
              <th style={{ minWidth: "150px" }}>Stage</th>
              <th style={{ minWidth: "200px" }}>User</th>
              <th style={{ minWidth: "400px" }}>Information</th>
              <th style={{ minWidth: "150px" }}>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.alias}>
                {" "}
                {/* Using alias instead of id */}
                <td>{task.note_task}</td> {/* "TASK" or "NOTE" */}
                <td>{new Date(task.created_at).toLocaleString()}</td>{" "}
                {/* Formatting the date */}
                <td>{task.case.case_stage}</td> {/* Case stage */}
                <td>{`${task.created_by.first_name} ${task.created_by.last_name}`}</td>{" "}
                {/* User name */}
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: task.note || "" }}
                    style={{ wordBreak: "break-word", maxWidth: "400px" }}
                  />
                </td>
                <td>{task.task_priority || "N/A"}</td> {/* Task priority */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Row className="mt-3 align-items-center">
        <Col sm={5}>
          <div className="text-muted">
            Showing 1 to {tasks.length} of {tasks.length} entries
          </div>
        </Col>
      </Row>

      <CreateTaskNoteModal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
      />
    </Container>
  );
};

export default TasksViewTab;
