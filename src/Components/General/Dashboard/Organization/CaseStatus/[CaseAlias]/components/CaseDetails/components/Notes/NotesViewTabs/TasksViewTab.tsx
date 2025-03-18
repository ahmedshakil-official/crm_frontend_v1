import { FC } from "react";
import {
  Container,
  Table,
  Row,
  Col,
} from "reactstrap";

interface Task {
  type: string;
  date: string;
  stage: string;
  user: string;
  information: string;
  workflow: string;
  id: string;
}

const TasksViewTab: FC = () => {
  const tasks: Task[] = [
    {
      type: "Task",
      date: "17/03/2025 22:10:20 (created)",
      stage: "New Lead",
      user: "sadat@benecofinance.co.uk - 34241987",
      information: "Fact Find Sent to Client to complete<br>",
      workflow: "Residential Mortgage",
      id: "34241987",
    },
    {
      type: "Task",
      date: "17/03/2025 19:49:37 (created)",
      stage: "",
      user: "sadat@benecofinance.co.uk - 34233465",
      information:
        "Client Contacted<br>Task complete as primary stage has been manually changed",
      workflow: "Residential Mortgage",
      id: "34233465",
    },
  ];

  return (
    <Container fluid className="py-4">
      <div className="table-responsive">
        <Table striped hover>
          <thead>
            <tr>
              <th style={{ minWidth: "100px" }}>Type</th>
              <th style={{ minWidth: "150px" }}>Activity Date</th>
              <th style={{ minWidth: "150px" }}>Stage</th>
              <th style={{ minWidth: "200px" }}>User</th>
              <th style={{ minWidth: "400px" }}>Information</th>
              <th style={{ minWidth: "150px" }}>Workflow</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.type}</td>
                <td>{task.date}</td>
                <td>{task.stage}</td>
                <td>{task.user}</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: task.information }}
                    style={{ wordBreak: "break-word", maxWidth: "400px" }}
                  />
                </td>
                <td>{task.workflow}</td>
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
    </Container>
  );
};

export default TasksViewTab;
