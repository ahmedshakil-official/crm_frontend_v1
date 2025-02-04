import apiClient from "@/services/api-client";
import {
  IntroducerInfoProps,
  UpdateIntroducerModalProps,
} from "@/Types/Organization/IntroducerTypes";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const UpdateIntroducerModal: React.FC<UpdateIntroducerModalProps> = ({
  isOpen,
  toggle,
  onSave,
  selectedIntroducer,
  fetchIntroducers,
}) => {
  const [introducerData, setIntroducerData] =
    useState<Partial<IntroducerInfoProps>>(selectedIntroducer);
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIntroducerData(selectedIntroducer);
    setIsModified(false); // Reset modification flag when modal opens or lead changes
  }, [selectedIntroducer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    setIntroducerData((prev) => {
      const updatedData = { ...prev };
      let current: any = updatedData;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updatedData as Partial<IntroducerInfoProps>;
    });
    setIsModified(true); // Set the form as modified
  };

  const handleUpdateIntroducer = async (
    introducerData: Partial<IntroducerInfoProps>
  ) => {
    try {
      setIsLoading(true);
      if (introducerData.alias) {
        const result = await apiClient.put(
          `/director/introducers/${introducerData.alias}/`,
          introducerData
        );
        fetchIntroducers();
        if (result.status >= 200 && result.status < 300) {
          toast.success("Introducer update successfully.");
        } else {
          toast.error("Invalid Request...");
        }
      }
    } catch (error) {
      console.error("Error saving introducer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateIntroducer(introducerData); // Pass the updated data to the server
    onSave(introducerData); // Pass the updated data to the parent component
    toggle(); // Close the modal
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Update Introducer</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <Row>
            {/* First column */}
            <Col md={6} xs={12}>
              <Row>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="user.first_name"
                    placeholder="First Name"
                    value={introducerData?.user?.first_name || ""}
                    onChange={handleChange}
                    className="mb-2"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="dob">Official Email</Label>
                  <Input
                    type="text"
                    id="official_email"
                    name="official_email"
                    placeholder="Official Email"
                    value={introducerData?.official_email || ""}
                    onChange={handleChange}
                    className="mb-2"
                  />
                </FormGroup>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="official_phone">Official Phone</Label>
                    <Input
                      type="text"
                      id="official_phone"
                      name="official_phone"
                      placeholder="Official Phone"
                      value={introducerData?.official_phone || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="nid">NID Number</Label>
                    <Input
                      type="text"
                      id="nid"
                      name="user.nid"
                      placeholder="NID Number"
                      value={introducerData?.user?.nid || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      id="city"
                      name="user.city"
                      placeholder="City"
                      value={introducerData?.user?.city || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                      type="text"
                      id="state"
                      name="user.state"
                      placeholder="State"
                      value={introducerData?.user?.state || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="zip_code">Zip Code</Label>
                    <Input
                      type="text"
                      id="zip_code"
                      name="user.zip_code"
                      placeholder="Zip Code"
                      value={introducerData?.user?.zip_code || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="country">Country</Label>
                    <Input
                      type="text"
                      id="country"
                      name="user.country"
                      placeholder="Country"
                      value={introducerData?.user?.country || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            {/* Second column */}
            <Col md={6} xs={12}>
              <Row>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="user.last_name"
                    placeholder="Last Name"
                    value={introducerData?.user?.last_name || ""}
                    onChange={handleChange}
                    className="mb-2"
                  />
                </FormGroup>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="user_type">User Type</Label>
                    <Input
                      type="select"
                      id="user_type"
                      name="user.user_type"
                      placeholder="User Type"
                      value={introducerData?.user?.user_type || ""}
                      onChange={handleChange}
                      className="mb-2 pointer-event"
                    >
                      <option value="">--Select Type--</option>
                      <option value="LEAD">LEAD</option>
                      <option value="CLIENT">CLIENT</option>
                      <option value="ADVISOR">ADVISOR</option>
                      <option value="INTRODUCER">INTRODUCER</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="role">Role</Label>
                    <Input
                      type="select"
                      id="role"
                      name="role"
                      placeholder="Role"
                      value={introducerData?.role || ""}
                      onChange={handleChange}
                      className="mb-2 pointer-event"
                    >
                      <option value="">--Select Role--</option>
                      <option value="LEAD">LEAD</option>
                      <option value="CLIENT">CLIENT</option>
                      <option value="ADVISOR">ADVISOR</option>
                      <option value="INTRODUCER">INTRODUCER</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="dob">Date of Birth</Label>
                    <Input
                      type="date"
                      id="dob"
                      name="dob"
                      placeholder="Date of Birth"
                      value={introducerData?.dob || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="dob">Joining Date</Label>
                    <Input
                      type="date"
                      id="joining_date"
                      name="joining_date"
                      placeholder="Joining Date"
                      value={introducerData?.joining_date || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="designation">Designation</Label>
                    <Input
                      type="text"
                      id="designation"
                      name="designation"
                      placeholder="Designation"
                      value={introducerData?.designation || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="degree">Degree</Label>
                    <Input
                      type="text"
                      id="degree"
                      name="degree"
                      placeholder="Degree"
                      value={introducerData?.degree || ""}
                      onChange={handleChange}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="dob">Registration Number</Label>
                  <Input
                    type="text"
                    id="registration_number"
                    name="registration_number"
                    placeholder="Registration Number"
                    value={introducerData?.registration_number || ""}
                    onChange={handleChange}
                    className="mb-2"
                  />
                </FormGroup>
              </Row>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="profile_image">Profile Image</Label>
              <Input
                type="file"
                accept="image/*"
                id="profile_image"
                name="user.profile_image"
                placeholder="Image"
                onChange={handleChange}
                className="mb-2"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="present_address">Present Address</Label>
              <Input
                type="text"
                id="present_address"
                name="present_address"
                placeholder="Present Address"
                value={introducerData?.present_address || ""}
                onChange={handleChange}
                className="mb-2"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="permanent_address">Permanent Address</Label>
              <Input
                type="text"
                id="permanent_address"
                name="permanent_address"
                placeholder="Permanent Address"
                value={introducerData?.permanent_address || ""}
                onChange={handleChange}
                className="mb-2"
              />
            </FormGroup>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            disabled={!isModified || isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
          <Button type="button" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
export default UpdateIntroducerModal;
