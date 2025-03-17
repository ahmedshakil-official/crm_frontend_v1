import {
  useAssignCaseAccountantMutation,
  useGetAccountantDetailsQuery,
  useGetCaseAccountantDetailsQuery,
  useUpdateAccountantDetailsMutation,
} from "@/Redux/Reducers/CaseDetails/SolicitorAndAccountant/SolicitorAndAccountantApi";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  Row,
} from "reactstrap";

import AddAccountantModal from "../Modals/AddAccountantModal";

const Accountant: React.FC = () => {
  const params = useParams();
  const { casealias } = params;
  const [selectedAccountant, setSelectedAccountant] = useState<any>(null);
  const [selectedCaseAccountant, setSelectedCaseAccountant] =
    useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const { data: accountantName, isLoading: isAccountantLoading } =
    useGetAccountantDetailsQuery(undefined);
  const { data: caseAccountants, isLoading: isCaseAccountantLoading } =
    useGetCaseAccountantDetailsQuery({ case_alias: casealias });
  const [assignCaseAccountant, { isLoading: isAssigningLoading }] =
    useAssignCaseAccountantMutation();
  const [updateAccountant, { isLoading: isUpdatingLoading }] =
    useUpdateAccountantDetailsMutation();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleAccountantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.value;
    const accountant = accountantName?.find((a: any) => a.id == selectedId);
    setSelectedAccountant(accountant);
  };

  const handleAssignAccountant = async () => {
    if (!selectedAccountant) {
      toast.error("Please select an accountant first");
      return;
    }

    try {
      await assignCaseAccountant({
        case_alias: casealias,
        accountant: { accountant: selectedAccountant?.id },
      }).unwrap();

      setSelectedAccountant(null);
      toast.success("Accountant assigned successfully!");
    } catch (error) {
      console.error("Failed to assign accountant:", error);
      toast.error("Failed to assign accountant. Please try again.");
    }
  };

  // Set initial case accountant
  useEffect(() => {
    if (caseAccountants && caseAccountants.length > 0) {
      setSelectedCaseAccountant(caseAccountants[0]);
    }
  }, [caseAccountants]);

  if (isAccountantLoading || isCaseAccountantLoading || isAssigningLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  // Add this helper function
  const isAccountantAssigned = () => {
    return caseAccountants && caseAccountants.length > 0;
  };

  // Add this helper function to get the selected value
  const getSelectedAccountantValue = () => {
    if (selectedCaseAccountant?.accountant_details?.id && accountantName) {
      const matchingAccountant = accountantName.find(
        (a: any) => a.id === selectedCaseAccountant.accountant_details.id
      );
      return matchingAccountant?.id || "";
    }
    return selectedAccountant?.id || "";
  };

  // Add this helper function to get the current accountant details
  const getCurrentAccountantDetails = () => {
    if (isAccountantAssigned() && selectedCaseAccountant?.accountant_details) {
      return accountantName?.find(
        (a: any) => a.id === selectedCaseAccountant.accountant_details.id
      );
    }
    return selectedAccountant;
  };

  // Add handleInputChange function
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update handleUpdateAccountant function
  const handleUpdateAccountant = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCaseAccountant?.accountant_details?.id) {
      toast.error("Please select an accountant to update");
      return;
    }

    try {
      const updatePayload = {
        id: selectedCaseAccountant.accountant_details.id,
        ...formData,
      };

      await updateAccountant({
        alias: selectedCaseAccountant.accountant_details.alias,
        // data: { detail: updatePayload },
        data: updatePayload,
      }).unwrap();

      // Update local state with new data
      const updatedAccountant = { ...selectedCaseAccountant };
      updatedAccountant.accountant_details = {
        ...updatedAccountant.accountant_details,
        ...formData,
      };

      setSelectedCaseAccountant(updatedAccountant);
      toast.success("Accountant details updated successfully!");
    } catch (error) {
      console.error("Failed to update accountant details:", error);
      toast.error("Failed to update accountant details. Please try again.");
    }
  };

  console.log(selectedAccountant);

  // Update the return section
  return (
    <>
      <Row>
        <Col md={6}>
          <Form>
            <Row>
              <FormGroup>
                <Label for="assignAccountant">Assign Accountant:</Label>

                <Input
                  id="assignAccountant"
                  name="assignAccountant"
                  type="select"
                  value={getSelectedAccountantValue()}
                  onChange={handleAccountantChange}
                  disabled={isAccountantAssigned()}
                >
                  <option value="">Select Accountant...</option>
                  {accountantName?.map((accountant: any) => (
                    <option key={accountant?.id} value={accountant?.id}>
                      {accountant?.name}
                    </option>
                  ))}
                </Input>
                <small className="text-muted text-danger">
                  {isAccountantAssigned()
                    ? "An accountant has already been assigned to this case."
                    : "Note: Please select and assign an accountant from the dropdown list. If the accountant is not listed, please add a new accountant."}
                </small>
              </FormGroup>
            </Row>
            <Row>
              <Col
                md={12}
                className="d-flex justify-content-between align-content-center gap-3"
              >
                <Button color="success" onClick={toggleModal}>
                  Add New Accountant
                </Button>
                <Button
                  color="primary"
                  onClick={handleAssignAccountant}
                  disabled={!selectedAccountant || isAccountantAssigned()}
                >
                  Assign Accountant
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={6}>
          <Card className="border-primary rounded-b-3 mt-4 m-0">
            <CardHeader className="bg-primary">
              <span className="fs-6 text-center">Selected Accountant</span>
            </CardHeader>
            <CardBody className="text-center">
              {selectedCaseAccountant?.accountant_details ? (
                <>
                  <div>
                    <strong>Name: </strong>
                    {selectedCaseAccountant.accountant_details.name || "N/A"}
                  </div>
                  <div>
                    <strong>Type: </strong>
                    {selectedCaseAccountant.accountant_details.user_type ||
                      "N/A"}
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

      <Form>
        <Card>
          <CardBody>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="qualifications">Qualification*</Label>
                  <Input
                    id="qualifications"
                    name="qualifications"
                    type="text"
                    value={
                      formData.qualifications ||
                      getCurrentAccountantDetails()?.qualifications ||
                      ""
                    }
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={
                      formData.company_name ||
                      getCurrentAccountantDetails()?.company_name ||
                      ""
                    }
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="postcode">Postcode</Label>
                  <Input
                    id="postcode"
                    name="postcode"
                    type="text"
                    value={
                      formData.postcode ||
                      getCurrentAccountantDetails()?.postcode ||
                      ""
                    }
                    onChange={handleInputChange}
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
                    value={
                      formData.building_name_or_number ||
                      getCurrentAccountantDetails()?.building_name_or_number ||
                      ""
                    }
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={
                      formData.city || getCurrentAccountantDetails()?.city || ""
                    }
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="street">Street</Label>
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    value={
                      formData.street ||
                      getCurrentAccountantDetails()?.street ||
                      ""
                    }
                    onChange={handleInputChange}
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
                    value={
                      formData.county ||
                      getCurrentAccountantDetails()?.county ||
                      ""
                    }
                    onChange={handleInputChange}
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
                    value={
                      formData.country ||
                      getCurrentAccountantDetails()?.country ||
                      ""
                    }
                    onChange={handleInputChange}
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
                    value={
                      formData.phone_number ||
                      getCurrentAccountantDetails()?.phone_number ||
                      ""
                    }
                    onChange={handleInputChange}
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
                    value={
                      formData.fax_number ||
                      getCurrentAccountantDetails()?.fax_number ||
                      ""
                    }
                    onChange={handleInputChange}
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
                    value={
                      formData.email_address ||
                      getCurrentAccountantDetails()?.email_address ||
                      ""
                    }
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex justify-content-end">
                <FormGroup>
                  <Button color="primary" onClick={handleUpdateAccountant}>
                    Update Accountant Info
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Form>

      <AddAccountantModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default Accountant;
