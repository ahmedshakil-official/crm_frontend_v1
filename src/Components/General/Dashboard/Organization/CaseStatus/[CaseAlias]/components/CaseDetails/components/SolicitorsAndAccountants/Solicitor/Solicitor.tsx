import {
  useAssignCaseSolicitorMutation,
  useGetCaseSolicitorDetailsQuery,
  useGetSolicitorDetailsQuery,
  useUpdateSolicitorDetailsMutation,
} from "@/Redux/Reducers/CaseDetails/SolicitorAndAccountant/SolicitorAndAccountantApi";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import AddSolicitorModal from "../Modals/AddSolicitorModal";

const Solicitor: React.FC = () => {
  const params = useParams();
  const { casealias } = params;
  const { data: solicitorName, isLoading } =
    useGetSolicitorDetailsQuery(undefined);

  const { data: caseSolicitors, isLoading: isCaseSolicitorLoading } =
    useGetCaseSolicitorDetailsQuery({ case_alias: casealias });
  const [assignSolicitor, { isLoading: isAssignedLoading }] =
    useAssignCaseSolicitorMutation();
  const [updateSolicitorDetails, { isLoading: isUpdateLoading }] =
    useUpdateSolicitorDetailsMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolicitor, setSelectedSolicitor] = useState<any>(null);
  const [selectedCaseSolicitor, setSelectedCaseSolicitor] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("0");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSolicitorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.value;
    const solicitor = solicitorName?.find((s: any) => s.id == selectedId);
    setSelectedSolicitor(solicitor);
  };

  // Add this function to handle tab changes
  const toggleTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      const caseSolicitor = caseSolicitors?.[parseInt(tab)];
      setSelectedCaseSolicitor(caseSolicitor);
    }
  };

  // Set initial case solicitor when component loads
  useEffect(() => {
    if (caseSolicitors && caseSolicitors.length > 0) {
      setSelectedCaseSolicitor(caseSolicitors[0]);
    }
  }, [caseSolicitors]);

  if (
    isLoading ||
    isCaseSolicitorLoading ||
    isAssignedLoading ||
    isUpdateLoading
  )
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <>
      <Card>
        <CardBody>
          {caseSolicitors && caseSolicitors.length > 0 && (
            <Nav
              tabs
              className="mb-3 d-flex justify-content-center align-items-center"
            >
              {caseSolicitors.map((caseSolicitor: any, index: number) => (
                <NavItem key={caseSolicitor.alias}>
                  <NavLink
                    className={`cursor-pointer ${
                      activeTab === index.toString()
                        ? "active text-primary"
                        : "text-secondary"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleTab(index.toString())}
                  >
                    Solicitor {index + 1}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          )}

          {/* First Form Group - Solicitor Selection */}
          <Row>
            <Col md={12}>
              <Row>
                <Col md={6}>
                  <Form>
                    <Row>
                      <FormGroup>
                        <Label for="assignSolicitor">Assign Solicitor:</Label>
                        <>
                          <Input
                            id="assignSolicitor"
                            name="assignSolicitor"
                            type="select"
                            value={selectedSolicitor?.id || ""}
                            onChange={handleSolicitorChange}
                          >
                            <option value="">Select Solicitor...</option>
                            {solicitorName?.map((solicitor: any) => (
                              <option key={solicitor?.id} value={solicitor?.id}>
                                {solicitor?.name}
                              </option>
                            ))}
                          </Input>
                          <small className="text-muted text-danger">
                            Note: Please select and assigned a solicitor from
                            the dropdown list. If the solicitor is not listed,
                            please add a new solicitor. If you'r not assigned a
                            solicitor, after reload this selected value was not
                            saved.
                          </small>
                        </>
                      </FormGroup>
                    </Row>
                    <Row>
                      <Col
                        md={12}
                        className="d-flex justify-content-between align-content-center gap-3"
                      >
                        <Button color="success" onClick={toggleModal}>
                          Add New Solicitor
                        </Button>
                        <Button color="primary">Assign Solicitor</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col md={6}>
                  <Card className="border-primary rounded-b-3 mt-4 m-0">
                    <CardHeader className="bg-primary">
                      <span className="fs-6 text-center">
                        Selected Solicitor
                      </span>
                    </CardHeader>
                    <CardBody className="text-center">
                      {selectedCaseSolicitor?.solicitor_details ? (
                        <>
                          <div>
                            <strong>Name: </strong>
                            {selectedCaseSolicitor.solicitor_details.name ||
                              "N/A"}
                          </div>
                          <div>
                            <strong>Type: </strong>
                            {selectedCaseSolicitor.solicitor_details
                              .user_type || "N/A"}
                          </div>
                        </>
                      ) : (
                        <strong className="text-danger fs-4">
                          "Not Selected Yet!"
                        </strong>
                      )}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <hr />

          {/* Second Form Group - Case Solicitor Details */}
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
                <Col md={12} className="d-flex justify-content-end">
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
