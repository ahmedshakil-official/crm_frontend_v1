import React, { useState } from "react";
import {
  Card,
  CardFooter,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

const NoteForProperty: React.FC = () => {
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = () => {
    // Add your save/next logic here
    console.log("Notes:", notes);
  };

  return (
    <Card className="mb-3">
      <CardFooter
        style={{
          border: "2px solid #ececec",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        <Row>
          <Col xs={12}>
            <FormGroup>
              <Label className="fw-semibold" for="PropertyNotes">
                Notes
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <Input
                type="textarea"
                id="PropertyNotes"
                name="PropertyNotes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  maxWidth: "100%",
                  minWidth: "100%",
                  minHeight: "80px",
                  resize: "vertical",
                }}
                className="mb-3"
              />
            </FormGroup>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center">
          <Button
            color="secondary"
            outline
            name="back"
            className="px-4"
            onClick={() => {
              // Add your back logic here
            }}
          >
            Back
          </Button>

          <Button
            color="primary"
            id="submit"
            name="next"
            className="px-4"
            onClick={handleSubmit}
          >
            Save / Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteForProperty;