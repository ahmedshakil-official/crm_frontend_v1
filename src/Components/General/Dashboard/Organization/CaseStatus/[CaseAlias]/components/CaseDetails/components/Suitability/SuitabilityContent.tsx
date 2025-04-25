import { defaultAnswersData } from "@/Data/Organization/Case/CaseDetails/SuitabilityData";
import { useUpdateSuitabilityMutation } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/Suitability/SuitabilityApi";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Temp from "./temp";

const SuitabilityContent: React.FC = () => {
  const { casealias } = useParams();
  // state
  const [defaultAnswers, setDefaultAnswers] = useState(defaultAnswersData);
  const [selectedType, setSelectedType] = useState("GENERAl");

  // rtk hook
  const [updateSuitability, { isLoading }] = useUpdateSuitabilityMutation();

  const handleChange = (field: string, value: string) => {
    setDefaultAnswers((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Form>
      {/* Your circumstances and objectives  */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Your circumstances and objectives</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="select"
                name="select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="GENERAl">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          {selectedType === "GENERAl" && (
            <>
              <FormGroup>
                <Label>Answer 1</Label>
                <Input
                  type="textarea"
                  name="circumstancesAndObjectives_G_A1"
                  rows="3"
                  value={defaultAnswers.circumstancesAndObjectives_G_A1}
                  onChange={(e) =>
                    handleChange(
                      "circumstancesAndObjectives_G_A1",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 2</Label>
                <Input
                  type="textarea"
                  name="circumstancesAndObjectives_G_A2"
                  rows="3"
                  value={defaultAnswers.circumstancesAndObjectives_G_A2}
                  onChange={(e) =>
                    handleChange(
                      "circumstancesAndObjectives_G_A2",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 3</Label>
                <Input
                  type="textarea"
                  name="circumstancesAndObjectives_G_A3"
                  rows="3"
                  value={defaultAnswers.circumstancesAndObjectives_G_A3}
                  onChange={(e) =>
                    handleChange(
                      "circumstancesAndObjectives_G_A3",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </>
          )}
          {selectedType === "SHARIA" && (
            <>
              <FormGroup>
                <Label>Answer 1</Label>
                <Input
                  type="textarea"
                  name="circumstancesAndObjectives_G_A3"
                  rows="6"
                  value={defaultAnswers.circumstancesAndObjectives_S_A1}
                  onChange={(e) =>
                    handleChange(
                      "circumstancesAndObjectives_S_A1",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 2</Label>
                <Input
                  type="textarea"
                  name="circumstancesAndObjectives_G_A3"
                  rows="3"
                  value={defaultAnswers.circumstancesAndObjectives_S_A2}
                  onChange={(e) =>
                    handleChange(
                      "circumstancesAndObjectives_S_A2",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </>
          )}
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>
      {/* Budget and affordability  */}
      <Temp />
      {/* Button for save changes  */}
      <div className="d-flex justify-content-end mt-3 mb-0">
        <Button color="primary">Save Changes</Button>
      </div>
    </Form>
  );
};

export default SuitabilityContent;
