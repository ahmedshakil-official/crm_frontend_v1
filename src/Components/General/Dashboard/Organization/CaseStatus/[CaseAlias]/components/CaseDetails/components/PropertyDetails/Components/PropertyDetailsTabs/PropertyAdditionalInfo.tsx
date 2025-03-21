// AdditionalInfo.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, FormGroup, Label, Input, InputGroup } from "reactstrap";
import { updateProperty } from "@/Redux/Reducers/CaseDetails/PropertyDetails/propertyFormSlice";
import { RootState } from "@/Redux/Store";

interface AdditionalInfoProps {
  propertyData?: any;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ propertyData }) => {
  const dispatch = useDispatch();
  const propertyState = useSelector(
    (state: RootState) => state.propertyForm.Properties
  );

  useEffect(() => {
    if (propertyData) {
      dispatch(
        updateProperty({
          is_the_property_a_listed_building:
            propertyData.is_the_property_a_listed_building || false,
          listed_status_of_the_building:
            propertyData.listed_status_of_the_building || null,
          listed_building_notes: propertyData.listed_building_notes || "",
          do_you_or_will_you_own_part_or_all_of_the_freehold:
            propertyData.do_you_or_will_you_own_part_or_all_of_the_freehold ||
            false,
          // No direct HMO license field in JSON, using a placeholder
          will_the_property_be_owner_occupied:
            propertyData.will_the_property_be_owner_occupied || false,
          please_provide_further_details:
            propertyData.please_provide_further_details || "",
          is_the_property_rented_out_to_be_rented_out:
            propertyData.is_the_property_rented_out_to_be_rented_out || false,
          is_the_property_standard_construction:
            propertyData.is_the_property_standard_construction || false,
          comments_details: propertyData.comments_details || "", // Using as TypeOfConstruction equivalent
          is_the_property_above_or_near_commercial_premises:
            propertyData.is_the_property_above_or_near_commercial_premises ||
            false,
          does_the_property_have_solar_panels:
            propertyData.does_the_property_have_solar_panels || false,
          do_you_own_the_solar_panels:
            propertyData.do_you_own_the_solar_panels || false,
          is_there_an_annexe_within_the_property:
            propertyData.is_there_an_annexe_within_the_property || false,
        })
      );
    }
  }, [propertyData, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    let updatedValue: any = value;

    if (type === "radio") {
      updatedValue = value === "true";
    } else if (type === "number") {
      updatedValue = value === "" ? null : Number(value);
    }

    dispatch(updateProperty({ [name]: updatedValue }));
  };

  return (
    <div className="property-additional-info p-4">
      <Row className="d-flex justify-content-center">
        <Col sm={12} lg={8}>
          <div className="bg-white rounded-lg p-4">
            {/* Section: Basic Property Information */}
            <div className="mb-4">
              <h5 className="text-primary mb-3">Basic Property Information</h5>
              <Row>
                {/* Listed Building */}
                <Col sm={12}>
                  <FormGroup className="mb-4 border-bottom pb-3">
                    <Row className="align-items-center">
                      <Col sm={7}>
                        <Label
                          className="mb-0 fw-medium"
                          for="is_the_property_a_listed_building"
                        >
                          Is the property a listed building?
                        </Label>
                      </Col>
                      <Col sm={5} className="radioBtnInputs d-flex gap-3">
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="is_the_property_a_listed_building"
                            id="is_the_property_a_listed_building_yes"
                            value="true"
                            checked={
                              propertyState.is_the_property_a_listed_building ===
                              true
                            }
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          <Label className="form-check-label">Yes</Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="is_the_property_a_listed_building"
                            id="is_the_property_a_listed_building_no"
                            value="false"
                            checked={
                              propertyState.is_the_property_a_listed_building ===
                              false
                            }
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          <Label className="form-check-label">No</Label>
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

                {propertyState.is_the_property_a_listed_building && (
                  <div id="listedBuildingExtraFields">
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <Label for="listed_status_of_the_building">
                            Listed status of the building
                          </Label>
                          <Input
                            type="select"
                            name="listed_status_of_the_building"
                            id="listed_status_of_the_building"
                            value={
                              propertyState.listed_status_of_the_building || ""
                            }
                            onChange={handleChange}
                          >
                            <option value="">Select...</option>
                            <option value="0">Grade I</option>
                            <option value="1">Grade II*</option>
                            <option value="2">Grade II</option>
                            <option value="3">Grade A</option>
                            <option value="4">Grade B</option>
                            <option value="5">Grade C</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <FormGroup>
                          <Label for="listed_building_notes">
                            Listed Building Notes (e.g. delisting application
                            pending, etc)
                          </Label>
                          <Input
                            type="textarea"
                            name="listed_building_notes"
                            id="listed_building_notes"
                            value={propertyState.listed_building_notes || ""}
                            onChange={handleChange}
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                )}

                {/* Own Freehold */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="do_you_or_will_you_own_part_or_all_of_the_freehold">
                        Do you or will you own part or all of the freehold?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="do_you_or_will_you_own_part_or_all_of_the_freehold"
                          id="do_you_or_will_you_own_part_or_all_of_the_freehold_yes"
                          value="true"
                          checked={
                            propertyState.do_you_or_will_you_own_part_or_all_of_the_freehold ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="do_you_or_will_you_own_part_or_all_of_the_freehold"
                          id="do_you_or_will_you_own_part_or_all_of_the_freehold_no"
                          value="false"
                          checked={
                            propertyState.do_you_or_will_you_own_part_or_all_of_the_freehold ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>


                {/* Owner Occupied */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="will_the_property_be_owner_occupied">
                        Will the property be owner occupied?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="will_the_property_be_owner_occupied"
                          id="will_the_property_be_owner_occupied_yes"
                          value="true"
                          checked={
                            propertyState.will_the_property_be_owner_occupied ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="will_the_property_be_owner_occupied"
                          id="will_the_property_be_owner_occupied_no"
                          value="false"
                          checked={
                            propertyState.will_the_property_be_owner_occupied ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>

                {!propertyState.will_the_property_be_owner_occupied && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="please_provide_further_details">
                        Please provide further details
                      </Label>
                      <Input
                        type="textarea"
                        id="please_provide_further_details"
                        name="please_provide_further_details"
                        value={
                          propertyState.please_provide_further_details || ""
                        }
                        onChange={handleChange}
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Property Rented Out */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="is_the_property_rented_out_to_be_rented_out">
                        Is the property rented out/to be rented out?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_the_property_rented_out_to_be_rented_out"
                          id="is_the_property_rented_out_to_be_rented_out_yes"
                          value="true"
                          checked={
                            propertyState.is_the_property_rented_out_to_be_rented_out ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_the_property_rented_out_to_be_rented_out"
                          id="is_the_property_rented_out_to_be_rented_out_no"
                          value="false"
                          checked={
                            propertyState.is_the_property_rented_out_to_be_rented_out ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>

                {/* Standard Construction */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="is_the_property_standard_construction">
                        Is the property standard construction?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_the_property_standard_construction"
                          id="is_the_property_standard_construction_yes"
                          value="true"
                          checked={
                            propertyState.is_the_property_standard_construction ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_the_property_standard_construction"
                          id="is_the_property_standard_construction_no"
                          value="false"
                          checked={
                            propertyState.is_the_property_standard_construction ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>

                {!propertyState.is_the_property_standard_construction && (
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="comments_details">Type of Construction</Label>
                      <Input
                        type="text"
                        id="comments_details"
                        name="comments_details"
                        value={propertyState.comments_details || ""}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* Near Commercial */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="is_the_property_above_or_near_commercial_premises">
                        Is the property above or near commercial premises?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_the_property_above_or_near_commercial_premises"
                          id="is_the_property_above_or_near_commercial_premises_yes"
                          value="true"
                          checked={
                            propertyState.is_the_property_above_or_near_commercial_premises ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_the_property_above_or_near_commercial_premises"
                          id="is_the_property_above_or_near_commercial_premises_no"
                          value="false"
                          checked={
                            propertyState.is_the_property_above_or_near_commercial_premises ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>

                {/* Solar Panels */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="does_the_property_have_solar_panels">
                        Does the property have solar panels?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="does_the_property_have_solar_panels"
                          id="does_the_property_have_solar_panels_yes"
                          value="true"
                          checked={
                            propertyState.does_the_property_have_solar_panels ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="does_the_property_have_solar_panels"
                          id="does_the_property_have_solar_panels_no"
                          value="false"
                          checked={
                            propertyState.does_the_property_have_solar_panels ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>

                {propertyState.does_the_property_have_solar_panels && (
                  <Col sm={12}>
                    <FormGroup>
                      <Col sm={7}>
                        <Label for="do_you_own_the_solar_panels">
                          Do you own the solar panels?
                        </Label>
                      </Col>
                      <Col sm={5} className="radioBtnInputs d-flex gap-3">
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="do_you_own_the_solar_panels"
                            id="do_you_own_the_solar_panels_yes"
                            value="true"
                            checked={
                              propertyState.do_you_own_the_solar_panels === true
                            }
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          <Label className="form-check-label">Yes</Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="do_you_own_the_solar_panels"
                            id="do_you_own_the_solar_panels_no"
                            value="false"
                            checked={
                              propertyState.do_you_own_the_solar_panels ===
                              false
                            }
                            onChange={handleChange}
                            className="form-check-input"
                          />
                          <Label className="form-check-label">No</Label>
                        </div>
                      </Col>
                    </FormGroup>
                  </Col>
                )}

                {/* Annexe */}
                <Col sm={12}>
                  <FormGroup>
                    <Col sm={7}>
                      <Label for="is_there_an_annexe_within_the_property">
                        Is there an Annexe within the property?
                      </Label>
                    </Col>
                    <Col sm={5} className="radioBtnInputs d-flex gap-3">
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_there_an_annexe_within_the_property"
                          id="is_there_an_annexe_within_the_property_yes"
                          value="true"
                          checked={
                            propertyState.is_there_an_annexe_within_the_property ===
                            true
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">Yes</Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          name="is_there_an_annexe_within_the_property"
                          id="is_there_an_annexe_within_the_property_no"
                          value="false"
                          checked={
                            propertyState.is_there_an_annexe_within_the_property ===
                            false
                          }
                          onChange={handleChange}
                          className="form-check-input"
                        />
                        <Label className="form-check-label">No</Label>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      {/* Add this to your CSS or style file */}
      <style>
        {`
          .property-additional-info .form-group {
            margin-bottom: 1.5rem;
          }
          .property-additional-info .form-check {
            padding: 0.5rem 1rem;
            border-radius: 0.25rem;
            transition: background-color 0.2s;
          }
          .property-additional-info .form-check:hover {
            background-color: #f8f9fa;
          }
          .property-additional-info .text-primary {
            color: #0d6efd;
          }
          .property-additional-info .border-bottom {
            border-color: #e9ecef !important;
          }
          .property-additional-info .form-check-input {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
          }
          .property-additional-info .input-group {
            border-radius: 0.25rem;
            overflow: hidden;
          }
          .property-additional-info textarea {
            min-height: 100px;
          }
        `}
      </style>
    </div>
  );
};

export default AdditionalInfo;
