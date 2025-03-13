import { useGetSolicitorDetailsQuery } from "@/Redux/Reducers/CaseDetails/SolicitorAndAccountant/SolicitorAndAccountantApi";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import AddSolicitorModal from "../Modals/AddSolicitorModal";

const Solicitor: React.FC = () => {
  const { data: solicitorName, isLoading } =
    useGetSolicitorDetailsQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolicitor, setSelectedSolicitor] = useState<any>(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSolicitorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAlias = e.target.value;
    const solicitor = solicitorName?.find(
      (s: any) => s.alias === selectedAlias
    );
    setSelectedSolicitor(solicitor);
  };

  return (
    <>
      <Card>
        <CardBody>
          <Row>
            <Form>
              <Row>
                {" "}
                <Col md={12}>
                  <FormGroup>
                    <Label for="solicitorName">Solicitor Name:</Label>{" "}
                    <>
                      <Input
                        id="solicitorName"
                        name="solicitorName"
                        type="select"
                        value={selectedSolicitor?.alias || ""}
                        onChange={handleSolicitorChange}
                      >
                        <option value="">Select Solicitor...</option>
                        {solicitorName?.map((solicitor: any) => (
                          <option
                            key={solicitor?.alias}
                            value={solicitor?.alias}
                          >
                            {solicitor?.name}
                          </option>
                        ))}
                      </Input>
                      <small className="text-muted text-danger">
                        Please select and assigned a solicitor from the dropdown
                        list. If the solicitor is not listed, please add a new
                        solicitor. If you'r not assigned a solicitor, after
                        reload this selected value was not saved.
                      </small>
                    </>
                  </FormGroup>
                </Col>
                <Col
                  md={12}
                  className="d-flex justify-content-between align-content-center gap-3"
                >
                  <Button color="success" onClick={toggleModal}>
                    Add New
                  </Button>
                  <Button color="info">Assign Solicitor</Button>
                </Col>
              </Row>
            </Form>
          </Row>
          <hr />
          <Row>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="qualifications">Qualification*</Label>
                    <Input
                      id="qualifications"
                      name="qualifications"
                      type="text"
                      value={selectedSolicitor?.qualifications || ""}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="sraNumber">SRA Number</Label>
                    <Input
                      id="sraNumber"
                      name="sraNumber"
                      type="text"
                      value={selectedSolicitor?.sra_number || ""}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              {/* Continue for other fields */}
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      type="text"
                      value={selectedSolicitor?.postcode || ""}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="buildingName">Building Name or Number</Label>
                    <Input
                      id="buildingName"
                      name="buildingName"
                      type="text"
                      value={selectedSolicitor?.building_name_or_number || ""}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="street">Street</Label>
                    <Input
                      id="street"
                      name="street"
                      type="text"
                      value={selectedSolicitor?.street || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={selectedSolicitor?.city || ""}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="county">County</Label>
                    <Input
                      id="county"
                      name="county"
                      type="text"
                      value={selectedSolicitor?.county || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      value={selectedSolicitor?.country || ""}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={selectedSolicitor?.phone_number || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="faxNumber">Fax Number</Label>
                    <Input
                      id="faxNumber"
                      name="faxNumber"
                      type="tel"
                      value={selectedSolicitor?.fax_number || ""}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="dxNumber">DX Number</Label>
                    <Input
                      id="dxNumber"
                      name="dxNumber"
                      type="text"
                      value={selectedSolicitor?.dx_number || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="contactName">Contact Name</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      type="text"
                      value={selectedSolicitor?.contact_name || ""}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="emailAddress">Email Address</Label>
                    <Input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      value={selectedSolicitor?.email_address || ""}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="numberOfPartners">
                      Number of Partners in firm
                    </Label>
                    <Input
                      id="numberOfPartners"
                      name="numberOfPartners"
                      type="number"
                      value={
                        selectedSolicitor?.number_of_partners_in_firm || ""
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="d-flex justify-content-between">
                  <Button>Make More Solicitor</Button>
                  <Button color="primary">Update Solicitor</Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </CardBody>
      </Card>

      {/*  In your JSX: */}
      <AddSolicitorModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default Solicitor;
