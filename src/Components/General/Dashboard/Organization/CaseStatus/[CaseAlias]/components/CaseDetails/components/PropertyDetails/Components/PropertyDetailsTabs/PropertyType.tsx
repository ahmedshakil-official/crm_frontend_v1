// PropertyDetails.tsx
import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input, InputGroup, Button } from "reactstrap";

const PropertyDetails: React.FC = () => {
  const [propertyType, setPropertyType] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");
  
  const propertyTypes = [
    "House",
    "Flat",
    "Maisonette",
    "Bungalow",
    "Warehouse",
    "Land",
    "Commercial",
    "Semi-Commercial",
    "Multi-Unit Block (MUB)",
    "HMO",
  ];
  
  const houseTypes = [
    "Detached",
    "Semi-Detached",
    "Mid-Terraced",
    "End-Terraced",
    "Town House",
  ];
  
  const flatTypes = ["Purpose Built", "Converted", "Studio"];
  
  const constructionTypes = [
    { value: "0", label: "Concrete" },
    { value: "1", label: "Timber Framed" },
    { value: "2", label: "Steel Framed" },
    { value: "3", label: "Brick" },
    { value: "4", label: "Mundic Block" },
    { value: "5", label: "PRC Repair with Certificate" },
    { value: "6", label: "Stone" },
    { value: "7", label: "Cob" },
  ];
  
  const roofTypes = [
    { value: "0", label: "Tile (Any Type)" },
    { value: "1", label: "Clay Tile" },
    { value: "2", label: "Slate Tile" },
    { value: "3", label: "Concrete Tile" },
    { value: "4", label: "Flat" },
    { value: "5", label: "Thatched" },
    { value: "6", label: "Metal" },
    { value: "7", label: "Wood" },
    { value: "8", label: "Plastic (e.g. EPDM, PVC, CPE)" },
    { value: "9", label: "Bitumen" },
    { value: "10", label: "Green Roof" },
    { value: "11", label: "Shingles" },
    { value: "100", label: "Other" },
  ];
  
  return (
    <Row>
      <Col sm={12}>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="PropertyType">Property Type</Label>
              <Input
                type="select"
                id="Properties[0].PropertyType"
                name="Properties[0].PropertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Select...</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
  
          {(propertyType === "House" || propertyType === "Bungalow") && (
            <Col sm={6}>
              <FormGroup>
                <Label for="HouseType">
                  House Type <span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  id="Properties[0].HouseType"
                  name="Properties[0].HouseType"
                  defaultValue=""
                >
                  <option value="">Select...</option>
                  {houseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          )}
  
          {propertyType === "Flat" && (
            <Col sm={6}>
              <FormGroup>
                <Label for="FlatType">Flat Type</Label>
                <Input
                  type="select"
                  id="Properties[0].FlatType"
                  name="Properties[0].FlatType"
                  defaultValue=""
                >
                  <option value="">Select...</option>
                  {flatTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          )}
        </Row>
  
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="ConstructionType">Construction of Walls</Label>
              <Input
                type="select"
                id="Properties[0].ConstructionType"
                name="Properties[0].ConstructionType"
                defaultValue=""
              >
                <option value="">Select...</option>
                {constructionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="RoofConstructionType">Construction of Roof</Label>
              <Input
                type="select"
                id="Properties[0].RoofConstructionType"
                name="Properties[0].RoofConstructionType"
                defaultValue=""
              >
                <option value="">Select...</option>
                {roofTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
  
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="NumberOfFloors">
                Number of storeys in the building?{" "}
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="number"
                id="Properties[0].NumberOfFloors"
                name="Properties[0].NumberOfFloors"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="PropertyAge">Year Built</Label>
              <Input
                type="number"
                id="Properties[0].PropertyAge"
                name="Properties[0].PropertyAge"
                defaultValue=""
                maxLength={4}
              />
            </FormGroup>
          </Col>
        </Row>
  
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="EPCRating">EPC Rating</Label>
              <InputGroup>
                <Input
                  type="select"
                  id="Properties[0].EPCRating"
                  name="Properties[0].EPCRating"
                  defaultValue=""
                >
                  <option value="">Select...</option>
                  {["A", "B", "C", "D", "E", "F", "G"].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </Input>
                <Button color="primary">Search Register</Button>
              </InputGroup>
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="Tenure">Tenure</Label>
              <Input
                type="select"
                id="Properties[0].Tenure"
                name="Properties[0].Tenure"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="Freehold">Freehold</option>
                <option value="Leasehold">Leasehold</option>
                <option value="Commonhold">Commonhold</option>
                <option value="Fuedal">Fuedal</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
  
        {tenure === "Leasehold" && (
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="Leasehold">
                  Property Lease Term <span className="text-danger">*</span>
                </Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="Properties[0].Leasehold"
                    name="Properties[0].Leasehold"
                    defaultValue=""
                  />
                  <span className="input-group-text">Years</span>
                </InputGroup>
              </FormGroup>
            </Col>
  
            <Col sm={6}>
              <FormGroup>
                <Label for="ServiceCharge">Service Charge per Month</Label>
                <InputGroup>
                  <span className="input-group-text">£</span>
                  <Input
                    type="number"
                    id="Properties[0].ServiceCharge"
                    name="Properties[0].ServiceCharge"
                    defaultValue=""
                    step="0.01"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
  
            <Col sm={6}>
              <FormGroup>
                <Label for="GroundRent">Ground Rent per Annum</Label>
                <InputGroup>
                  <span className="input-group-text">£</span>
                  <Input
                    type="number"
                    id="Properties[0].GroundRent"
                    name="Properties[0].GroundRent"
                    defaultValue=""
                    step="0.01"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        )}
  
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="ReinstatementCost">Reinstatement Cost</Label>
              <InputGroup>
                <span className="input-group-text">£</span>
                <Input
                  type="number"
                  id="Properties[0].ReinstatementCost"
                  name="Properties[0].ReinstatementCost"
                  defaultValue=""
                  step="0.01"
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
  
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="Bedrooms">Bedrooms</Label>
              <Input
                type="number"
                id="Properties[0].Bedrooms"
                name="Properties[0].Bedrooms"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="NumberOfBathrooms">Bathrooms</Label>
              <Input
                type="number"
                id="Properties[0].NumberOfBathrooms"
                name="Properties[0].NumberOfBathrooms"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="NumberOfReceptionRooms">Reception Rooms</Label>
              <Input
                type="number"
                id="Properties[0].NumberOfReceptionRooms"
                name="Properties[0].NumberOfReceptionRooms"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="NumberOfKitchens">Kitchens</Label>
              <Input
                type="number"
                id="Properties[0].NumberOfKitchens"
                name="Properties[0].NumberOfKitchens"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="NumberOfGarages">Garages</Label>
              <Input
                type="number"
                id="Properties[0].NumberOfGarages"
                name="Properties[0].NumberOfGarages"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          <Col sm={6}>
            <FormGroup>
              <Label for="NumberOfParkingSpaces">Parking Spaces</Label>
              <Input
                type="number"
                id="Properties[0].NumberOfParkingSpaces"
                name="Properties[0].NumberOfParkingSpaces"
                defaultValue=""
              />
            </FormGroup>
          </Col>
  
          {propertyType === "Flat" && (
            <>
              <Col sm={6}>
                <FormGroup>
                  <Label for="Floor">Floor</Label>
                  <Input
                    type="number"
                    id="Properties[0].Floor"
                    name="Properties[0].Floor"
                    defaultValue=""
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for="Flats">Flats</Label>
                  <Input
                    type="number"
                    id="Properties[0].Flats"
                    name="Properties[0].Flats"
                    defaultValue=""
                  />
                </FormGroup>
              </Col>
            </>
          )}
  
          {propertyType === "Multi-Unit Block (MUB)" && (
            <Col sm={6}>
              <FormGroup>
                <Label for="NumberOfUnits">Number of Units</Label>
                <Input
                  type="number"
                  id="Properties[0].NumberOfUnits"
                  name="Properties[0].NumberOfUnits"
                  defaultValue=""
                />
              </FormGroup>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default PropertyDetails;
