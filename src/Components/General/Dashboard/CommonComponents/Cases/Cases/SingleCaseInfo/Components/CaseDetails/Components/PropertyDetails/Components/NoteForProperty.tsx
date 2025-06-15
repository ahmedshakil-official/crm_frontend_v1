import { RootState } from "@/Redux/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardFooter,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import { useUpdatePropertyMutation } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/PropertyDetails/PropertyDetailsApi";
import { updateProperty } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/PropertyDetails/propertyFormSlice";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

const NoteForProperty: React.FC<{ property_alias: string }> = ({
  property_alias,
}) => {
  const dispatch = useDispatch();
  const { casealias } = useParams();
  const formData = useSelector(
    (state: RootState) => state.propertyForm.Properties
  );
  const propertyAlias = property_alias;

  const [updateSingleProperty, { isLoading }] = useUpdatePropertyMutation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateProperty({ notes: e.target.value }));
  };

  const handleSubmit = async () => {
    const response = await updateSingleProperty({
      case_alias: casealias,
      property_alias: propertyAlias,
      updatedPropertyDetails: formData,
    });

    if (response.data) {
      toast.success("Property Details Updated Successfully");
    } else {
      toast.error("Something went wrong");
    }
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
                name="notes"
                value={formData.notes || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(
                    e as unknown as React.ChangeEvent<HTMLTextAreaElement>
                  )
                }
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
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteForProperty;
