import { useAddDependantsMutation } from "@/Redux/Reducers/CaseDetails/ApplicantsDetails/ApplicantsDetailsApi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const DependantForm: React.FC<{
  case_alias: string;
  applicantDetails_alias: string;
}> = ({ case_alias, applicantDetails_alias }) => {
  const [addDependants, { isLoading: isDependantsLoading }] =
    useAddDependantsMutation();
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  interface FormData {
    name: string;
    date_of_birth: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    const response = await addDependants({
      case_alias,
      applicantDetails_alias,
      dependantsInfo: formData,
    });
    if (response.data) {
      toast.success("Dependant added successfully");
    }
  };

  return (
    <Container className="m-2 p-4 border rounded shadow-sm">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name" className="small">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="date_of_birth" className="small">
            Date of Birth
          </Label>
          <Input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </FormGroup>

        <Row className="justify-content-end">
          <Col xs="auto">
            <Button color="primary" type="submit">
              {isDependantsLoading ? "Loading..." : "Submit"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default DependantForm;
