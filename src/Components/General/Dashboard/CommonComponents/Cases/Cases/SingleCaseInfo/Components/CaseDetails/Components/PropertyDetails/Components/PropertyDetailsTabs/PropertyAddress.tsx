import { updateProperty } from "@/Redux/Reducers/CommonComponents/Cases/SingleCaseInfo/CaseDetails/PropertyDetails/propertyFormSlice";
import { RootState } from "@/Redux/Store";
import { AddressDetailsProps } from "@/Types/CommonComponents/Cases/SingleCaseInfo/CaseDetails/PropertyDetails";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";

const AddressDetails: React.FC<AddressDetailsProps> = ({ propertyData }) => {
  const dispatch = useDispatch();
  const propertyState = useSelector(
    (state: RootState) => state.propertyForm.Properties
  );

  useEffect(() => {
    if (propertyData) {
      dispatch(
        updateProperty({
          postcode: propertyData.postcode || "",
          house_name_or_number: propertyData.house_name_or_number || "",
          address_one: propertyData.address_one || "",
          address_two: propertyData.address_two || "",
          city: propertyData.city || "",
          county: propertyData.county || "",
          region: propertyData.region || null,
          country: propertyData.country || null,
        })
      );
    }
  }, [propertyData, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateProperty({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form submitted:", propertyState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={12}>
          <Row>
            <Col sm={12}>
              <FormGroup>
                <Label for="postcode">
                  Postcode <span className="text-danger">*</span>
                </Label>
                <InputGroup>
                  <Input
                    name="postcode"
                    className="form-control"
                    onChange={handleChange}
                    value={propertyState.postcode}
                    maxLength={10}
                    required
                  />
                  <Button color="primary" className="mx-2">
                    Copy Main Address
                  </Button>
                  <Button color="primary">Lookup</Button>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="house_name_or_number">
                  House Name or Number <span className="text-danger">*</span>
                </Label>
                <Input
                  id="house_name_or_number"
                  name="house_name_or_number"
                  value={propertyState.house_name_or_number}
                  onChange={handleChange}
                  maxLength={255}
                  required
                />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label for="address_one">
                  Address 1 <span className="text-danger">*</span>
                </Label>
                <Input
                  id="address_one"
                  name="address_one"
                  value={propertyState.address_one}
                  onChange={handleChange}
                  maxLength={255}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="address_two">Address 2</Label>
                <Input
                  id="address_two"
                  name="address_two"
                  value={propertyState.address_two}
                  onChange={handleChange}
                  maxLength={255}
                />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label for="city">
                  City <span className="text-danger">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={propertyState.city}
                  onChange={handleChange}
                  maxLength={255}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="county">County</Label>
                <Input
                  id="county"
                  name="county"
                  value={propertyState.county}
                  onChange={handleChange}
                  maxLength={255}
                />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label for="region">Region</Label>
                <Input
                  type="select"
                  id="region"
                  name="region"
                  value={propertyState.region || ""}
                  onChange={handleChange}
                >
                  <option value="">Please select a region</option>
                  <option value="NORTH">North</option>
                  <option value="NORTH_WEST">North West</option>
                  <option value="YORKSHIRE_AND_HUMBERSIDE">
                    Yorkshire and Humberside
                  </option>
                  <option value="EAST_MIDLANDS">East Midlands</option>
                  <option value="WEST_MIDLANDS">West Midlands</option>
                  <option value="EAST_ANGLIA">East Anglia</option>
                  <option value="LONDON">London</option>
                  <option value="SOUTH_EAST_NOT_LONDON">
                    South East (Not London)
                  </option>
                  <option value="SOUTH_WEST">South West</option>
                  <option value="WALES">Wales</option>
                  <option value="SCOTLAND">Scotland</option>
                  <option value="NORTHERN_IRELAND">Northern Ireland</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input
                  type="select"
                  id="country"
                  name="country"
                  value={propertyState.country || ""}
                  onChange={handleChange}
                >
                  <option value="">Please select a country</option>
                  <option value="UNITED_KINGDOM">United Kingdom</option>
                  <option value="ENGLAND">England</option>
                  <option value="SCOTLAND">Scotland</option>
                  <option value="WALES">Wales</option>
                  <option value="NORTHERN_IRELAND">Northern Ireland</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default AddressDetails;
