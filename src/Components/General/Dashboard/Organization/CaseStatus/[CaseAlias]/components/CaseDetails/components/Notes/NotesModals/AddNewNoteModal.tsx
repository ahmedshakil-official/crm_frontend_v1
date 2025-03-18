import { FC, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { X } from "react-feather";

interface CreateTaskNoteModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const CreateTaskNoteModal: FC<CreateTaskNoteModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [isTask, setIsTask] = useState(true);
  const [brokerVisible, setBrokerVisible] = useState(false);
  const [clientVisible, setClientVisible] = useState(false);
  const [priority, setPriority] = useState("0");
  const [dueDate, setDueDate] = useState("18/03/2025");
  const [dueTime, setDueTime] = useState("");
  const [caseId, setCaseId] = useState("00980291");
  const [assignedTo, setAssignedTo] = useState("mostafiz@benecofinance.co.uk");
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState("");

  const categories = [
    "Uncategorised",
    "Email Correspondence",
    "Telephone conversation",
    "Lender Correspondence",
    "Solicitor Correspondence",
    "Compliance Correspondence",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      isTask,
      brokerVisible,
      clientVisible,
      priority,
      dueDate,
      dueTime,
      caseId,
      assignedTo,
      category,
      comments,
    });
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader
        toggle={toggle}
        className="d-flex justify-content-between align-items-center"
        close={
          <Button color="primary" onClick={toggle} className="ms-auto">
            <X />
          </Button>
        }
      >
        Create Task / Note
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <Row>
            <Col md={6} className=" mb-4">
              <FormGroup switch className="d-flex align-items-center">
                <Input
                  type="switch"
                  id="taskToggle"
                  checked={isTask}
                  onChange={(e) => setIsTask(e.target.checked)}
                />
                <Label check for="taskToggle" className="ms-2">
                  {isTask ? "Task" : "Note"}
                </Label>
              </FormGroup>
            </Col>
            {!isTask && (
              <Col md={5}>
                <Row>
                  <Col md={12}>
                    <FormGroup
                      switch
                      className="d-flex justify-content-between align-items-center mb-2"
                    >
                      <Label check>Note visible to introducer?</Label>
                      <Input
                        type="switch"
                        checked={brokerVisible}
                        onChange={(e) => setBrokerVisible(e.target.checked)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup
                      switch
                      className="d-flex justify-content-between align-items-center"
                    >
                      <Label check>Note visible to client?</Label>
                      <Input
                        type="switch"
                        checked={clientVisible}
                        onChange={(e) => setClientVisible(e.target.checked)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>

          <Row>
            {isTask && (
              <Col md={6} className="mb-4">
                <FormGroup>
                  <Label for="priority">
                    Task Priority <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="select"
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="0">Low</option>
                    <option value="1">Normal</option>
                    <option value="2">High</option>
                    <option value="3">Urgent</option>
                  </Input>
                </FormGroup>
              </Col>
            )}

            {isTask && (
              <Col md={6} className=" mb-4">
                <FormGroup>
                  <Label for="dueDate">
                    Due Date <span className="text-danger">*</span>
                  </Label>
                  <Row>
                    <Col xs={6}>
                      <Input
                        type="date"
                        id="dueDate"
                        value={dueDate.split("/").reverse().join("-")}
                        onChange={(e) =>
                          setDueDate(
                            e.target.value.split("-").reverse().join("/")
                          )
                        }
                      />
                    </Col>
                    <Col xs={6}>
                      <Input
                        type="time"
                        id="dueTime"
                        value={dueTime}
                        onChange={(e) => setDueTime(e.target.value)}
                      />
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            )}

            {isTask && (
              <Col md={6}>
                <FormGroup>
                  <Label for="assignedTo">
                    Assigned To <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="select"
                    id="assignedTo"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                  >
                    <option value="mostafiz@benecofinance.co.uk">
                      mostafiz@benecofinance.co.uk
                    </option>
                    {/* Add more options as needed */}
                  </Input>
                </FormGroup>
              </Col>
            )}

            {!isTask && (
              <Col md={6} className=" mt-4">
                <FormGroup>
                  <Label for="category">
                    Category <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="select"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            )}
          </Row>

          <FormGroup>
            <Label for="comments">
              Comments <span className="text-danger">*</span>
            </Label>
            <Input
              type="textarea"
              id="comments"
              rows={5}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Enter your comments here..."
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Create
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default CreateTaskNoteModal;
