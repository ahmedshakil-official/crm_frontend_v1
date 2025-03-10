import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
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
  const formData = useSelector(
    (state: RootState) => state.propertyForm.Properties
  );

  const handleSubmit = () => {
    const finalData = {
      ...formData,
      notes,
    };
    console.log("Complete Form Data:", finalData);
    // Here you can handle the submission
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

        <div className="d-flex justify-content-end align-items-center">
          <Button
            color="primary"
            id="submit"
            name="next"
            className="px-4"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteForProperty;
