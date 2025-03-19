import { FC, useState } from "react";
import { Container, Row, Col, Input, Button, Table, Badge } from "reactstrap";
import { Plus, Trash2 } from "react-feather";
import CreateTaskNoteModal from "../NotesModals/AddNewNoteModal";
import { NoteTask } from "../NotesTabContent";

interface NotesViewTabProps {
  notes: NoteTask[];
}

const NotesViewTab: FC<NotesViewTabProps> = ({ notes }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleDeleteNote = (alias: string) => {
    console.log(`Delete note ${alias}`);
  };

  // Filter notes based on selected category
  const filteredNotes = selectedCategory
    ? notes.filter((note) => note.category === selectedCategory)
    : notes;

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
            {filteredNotes.map((note) => (
              <tr key={note.alias}>
                <td>{note.category || "Uncategorised"}</td>
                <td>{new Date(note.created_at).toLocaleString()}</td>
                <td>{note.case.case_stage}</td>
                <td>{`${note.created_by.first_name} ${note.created_by.last_name}`}</td>
                <td>
                  <div
                    dangerouslySetInnerHTML={{ __html: note.note || "" }}
                    style={{ wordBreak: "break-word", maxWidth: "400px" }}
                  />
                </td>
                <td>
                  {note.note_visible_to_introducer && (
                    <Badge color="success">
                      <i className="fa fa-check" />
                    </Badge>
                  )}
                </td>
                <td>
                  {note.note_visible_to_client && (
                    <Badge color="success">
                      <i className="fa fa-check" />
                    </Badge>
                  )}
                </td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteNote(note.alias)}
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
            Showing 1 to {filteredNotes.length} of {filteredNotes.length}{" "}
            entries
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
