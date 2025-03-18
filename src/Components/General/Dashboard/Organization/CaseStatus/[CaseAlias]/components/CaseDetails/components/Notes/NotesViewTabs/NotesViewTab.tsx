import { FC, useState } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge,
} from "reactstrap";
import { Plus, Trash2 } from "react-feather";
import CreateTaskNoteModal from "../NotesModals/AddNewNoteModal";

interface Note {
  category: string;
  date: string;
  stage: string;
  user: string;
  information: string;
  introducerVisible: boolean;
  clientVisible: boolean;
  id: string;
}

const NotesViewTab: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

  const notes: Note[] = [
    {
      category: "Uncategorised",
      date: "17/03/2025 19:50:25",
      stage: "New Lead",
      user: "sadat@benecofinance.co.uk - 34233492",
      information: "<p><strong>PP-Mushfiq</strong></p><hr>Created folder & OMS",
      introducerVisible: false,
      clientVisible: false,
      id: "34233492",
    },
    {
      category: "Declaration",
      date: "17/03/2025 19:49:37",
      stage: "",
      user: "sadat@benecofinance.co.uk - 34233463",
      information:
        "<p>I/we agree that the information provided to date is a true record of my/our discussions and that the information provided is true to the best of my/our knowledge.</p>",
      introducerVisible: true,
      clientVisible: false,
      id: "34233463",
    },
  ];

  const categories = [
    "All Categories",
    "Uncategorised",
    "Client Note",
    "Introducer Note",
    "Declaration",
    "Email Communication",
    "SMS Communication",
    "Email Correspondence",
    "Telephone conversation",
    "Lender Correspondence",
    "Solicitor Correspondence",
    "Compliance Correspondence",
  ];

  const handleAddNote = () => {
    // Add note functionality here
    console.log("Add new note clicked");
  };

  const handleDeleteNote = (id: string) => {
    // Delete note functionality here
    console.log(`Delete note ${id}`);
  };

  return (
    <Container fluid className="py-4">
      <Row className="mb-3 align-items-center">
        <Col md={4}>
          <div className="input-group">
            <Input
              type="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category === "All Categories" ? "" : category}
                >
                  {category}
                </option>
              ))}
            </Input>
            <Button color="primary" className="ms-2">
              Search
            </Button>
          </div>
        </Col>
        <Col md={8} className="text-end">
          <Button color="primary" onClick={() => setModalOpen(true)}>
            <Plus size={16} className="me-1" />
            Add New Note
          </Button>
        </Col>
      </Row>

      <div className="table-responsive">
        <Table striped hover>
          <thead>
            <tr>
              <th style={{ minWidth: "100px" }}>Category</th>
              <th style={{ minWidth: "150px" }}>Activity Date</th>
              <th style={{ minWidth: "150px" }}>Stage</th>
              <th style={{ minWidth: "200px" }}>User</th>
              <th style={{ minWidth: "400px" }}>Information</th>
              <th style={{ minWidth: "150px" }}>Introducer Visible</th>
              <th style={{ minWidth: "150px" }}>Client Visible</th>
              <th style={{ minWidth: "100px" }}>Options</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id}>
                <td>{note.category}</td>
                <td>{note.date}</td>
                <td>{note.stage}</td>
                <td>{note.user}</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: note.information }}
                    style={{ wordBreak: "break-word", maxWidth: "400px" }}
                  />
                </td>
                <td>
                  {note.introducerVisible && (
                    <Badge color="success">
                      <i className="fa fa-check" />
                    </Badge>
                  )}
                </td>
                <td>
                  {note.clientVisible && (
                    <Badge color="success">
                      <i className="fa fa-check" />
                    </Badge>
                  )}
                </td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Row className="mt-3 align-items-center">
        <Col sm={5}>
          <div className="text-muted">
            Showing 1 to {notes.length} of {notes.length} entries
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

export default NotesViewTab;
