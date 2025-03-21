// PropertyDetails.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Button,
} from "reactstrap";
import { updateProperty } from "@/Redux/Reducers/CaseDetails/PropertyDetails/propertyFormSlice";
import { RootState } from "@/Redux/Store";

interface PropertyDetailsProps {
  propertyData?: any;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ propertyData }) => {
  const dispatch = useDispatch();
  const propertyState = useSelector(
    (state: RootState) => state.propertyForm.Properties
  );

  useEffect(() => {
    if (propertyData) {
      dispatch(
        updateProperty({
          property_type: propertyData.property_type || null,
          house_type: propertyData.house_type || null,
          flat_type: propertyData.flat_type || null,
          construction_of_walls: propertyData.construction_of_walls || null,
          construction_of_roof: propertyData.construction_of_roof || null,
          number_of_storeys_in_the_building:
            propertyData.number_of_storeys_in_the_building || null,
          year_built: propertyData.year_built || null,
          epc_rating: propertyData.epc_rating || null,
          tenure: propertyData.tenure || null,
          property_lease_term: propertyData.property_lease_term || null,
          service_charge_per_month:
            propertyData.service_charge_per_month || null,
          ground_rent_per_annum: propertyData.ground_rent_per_annum || null,
          estimated_value: propertyData.estimated_value || null,
          bedrooms: propertyData.bedrooms || null,
          bathrooms: propertyData.bathrooms || null,
          reception_rooms: propertyData.reception_rooms || null,
          kitchens: propertyData.kitchens || null,
          garages: propertyData.garages || null,
          parking_spaces: propertyData.parking_spaces || null,
          floor: propertyData.floor || null,
          flats: propertyData.flats || null,
          number_of_units: propertyData.number_of_units || null,
        })
      );
    }
  }, [propertyData, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Convert numeric inputs to null if empty, otherwise parse as number where applicable
    const updatedValue =
      value === ""
        ? null
        : [
            "number_of_storeys_in_the_building",
            "year_built",
            "property_lease_term",
            "service_charge_per_month",
            "ground_rent_per_annum",
            "estimated_value",
            "bedrooms",
            "bathrooms",
            "reception_rooms",
            "kitchens",
            "garages",
            "parking_spaces",
            "floor",
            "flats",
            "number_of_units",
          ].includes(name)
        ? Number(value)
        : value;
    dispatch(updateProperty({ [name]: updatedValue }));
  };

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
              <Label for="property_type">Property Type</Label>
              <Input
                type="select"
                id="property_type"
                name="property_type"
                value={propertyState.property_type || ""}
                onChange={handleChange}
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

          {(propertyState.property_type === "House" ||
            propertyState.property_type === "Bungalow") && (
            <Col sm={6}>
              <FormGroup>
                <Label for="house_type">
                  House Type <span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  id="house_type"
                  name="house_type"
                  value={propertyState.house_type || ""}
                  onChange={handleChange}
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

          {propertyState.property_type === "Flat" && (
            <Col sm={6}>
              <FormGroup>
                <Label for="flat_type">Flat Type</Label>
                <Input
                  type="select"
                  id="flat_type"
                  name="flat_type"
                  value={propertyState.flat_type || ""}
                  onChange={handleChange}
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
              <Label for="construction_of_walls">Construction of Walls</Label>
              <Input
                type="select"
                id="construction_of_walls"
                name="construction_of_walls"
                value={propertyState.construction_of_walls || ""}
                onChange={handleChange}
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
              <Label for="construction_of_roof">Construction of Roof</Label>
              <Input
                type="select"
                id="construction_of_roof"
                name="construction_of_roof"
                value={propertyState.construction_of_roof || ""}
                onChange={handleChange}
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
              <Label for="number_of_storeys_in_the_building">
                Number of Storeys in the Building{" "}
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="number"
                id="number_of_storeys_in_the_building"
                name="number_of_storeys_in_the_building"
                value={propertyState.number_of_storeys_in_the_building ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="year_built">Year Built</Label>
              <Input
                type="number"
                id="year_built"
                name="year_built"
                value={propertyState.year_built ?? ""}
                onChange={handleChange}
                maxLength={4}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="epc_rating">EPC Rating</Label>
              <InputGroup>
                <Input
                  type="select"
                  id="epc_rating"
                  name="epc_rating"
                  value={propertyState.epc_rating || ""}
                  onChange={handleChange}
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
              <Label for="tenure">Tenure</Label>
              <Input
                type="select"
                id="tenure"
                name="tenure"
                value={propertyState.tenure || ""}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="FREEHOLD">Freehold</option>
                <option value="LEASEHOLD">Leasehold</option>
                <option value="COMMONHOLD">Commonhold</option>
                <option value="FEUDAL">Feudal</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {propertyState.tenure === "LEASEHOLD" && (
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="property_lease_term">
                  Property Lease Term <span className="text-danger">*</span>
                </Label>
                <InputGroup>
                  <Input
                    type="number"
                    id="property_lease_term"
                    name="property_lease_term"
                    value={propertyState.property_lease_term ?? ""}
                    onChange={handleChange}
                  />
                  <span className="input-group-text">Years</span>
                </InputGroup>
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label for="service_charge_per_month">
                  Service Charge per Month
                </Label>
                <InputGroup>
                  <span className="input-group-text">£</span>
                  <Input
                    type="number"
                    id="service_charge_per_month"
                    name="service_charge_per_month"
                    value={propertyState.service_charge_per_month ?? ""}
                    onChange={handleChange}
                    step="0.01"
                  />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label for="ground_rent_per_annum">Ground Rent per Annum</Label>
                <InputGroup>
                  <span className="input-group-text">£</span>
                  <Input
                    type="number"
                    id="ground_rent_per_annum"
                    name="ground_rent_per_annum"
                    value={propertyState.ground_rent_per_annum ?? ""}
                    onChange={handleChange}
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
              <Label for="estimated_value">Estimated Value</Label>
              <InputGroup>
                <span className="input-group-text">£</span>
                <Input
                  type="number"
                  id="estimated_value"
                  name="estimated_value"
                  value={propertyState.estimated_value ?? ""}
                  onChange={handleChange}
                  step="0.01"
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="bedrooms">Bedrooms</Label>
              <Input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={propertyState.bedrooms ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="bathrooms">Bathrooms</Label>
              <Input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={propertyState.bathrooms ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="reception_rooms">Reception Rooms</Label>
              <Input
                type="number"
                id="reception_rooms"
                name="reception_rooms"
                value={propertyState.reception_rooms ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="kitchens">Kitchens</Label>
              <Input
                type="number"
                id="kitchens"
                name="kitchens"
                value={propertyState.kitchens ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="garages">Garages</Label>
              <Input
                type="number"
                id="garages"
                name="garages"
                value={propertyState.garages ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="parking_spaces">Parking Spaces</Label>
              <Input
                type="number"
                id="parking_spaces"
                name="parking_spaces"
                value={propertyState.parking_spaces ?? ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          {propertyState.property_type === "Flat" && (
            <>
              <Col sm={6}>
                <FormGroup>
                  <Label for="floor">Floor</Label>
                  <Input
                    type="number"
                    id="floor"
                    name="floor"
                    value={propertyState.floor ?? ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label for="flats">Flats</Label>
                  <Input
                    type="number"
                    id="flats"
                    name="flats"
                    value={propertyState.flats ?? ""}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </>
          )}

          {propertyState.property_type === "Multi-Unit Block (MUB)" && (
            <Col sm={6}>
              <FormGroup>
                <Label for="number_of_units">Number of Units</Label>
                <Input
                  type="number"
                  id="number_of_units"
                  name="number_of_units"
                  value={propertyState.number_of_units ?? ""}
                  onChange={handleChange}
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
