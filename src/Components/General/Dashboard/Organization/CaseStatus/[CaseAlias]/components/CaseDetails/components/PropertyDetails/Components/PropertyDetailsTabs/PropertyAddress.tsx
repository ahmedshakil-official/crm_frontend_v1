// AddressDetails.tsx
import React from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Button,
} from "reactstrap";

const AddressDetails: React.FC = () => {
  return (
    <Row>
      <Col sm={12}>
        <Row>
          <Col sm={12}>
            <FormGroup>
              <Label for="Postcode">
                Postcode <span className="text-danger">*</span>
              </Label>
              <InputGroup>
                <Input
                  id="Properties[0].Address.postcode"
                  name="Properties[0].Address.postcode"
                  className="form-control"
                  defaultValue=""
                  maxLength={10}
                  required
                />
                <Button color="primary mx-2">Copy Main Address</Button>
                <Button color="primary">Lookup</Button>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="HouseNameOrNumber">
                House Name or Number <span className="text-danger">*</span>
              </Label>
              <Input
                id="Properties[0].Address.HouseNameOrNumber"
                name="Properties[0].Address.HouseNameOrNumber"
                defaultValue=""
                maxLength={255}
                required
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="Address1">
                Address 1 <span className="text-danger">*</span>
              </Label>
              <Input
                id="Properties[0].Address.Address1"
                name="Properties[0].Address.Address1"
                defaultValue=""
                maxLength={255}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="Address2">Address 2</Label>
              <Input
                id="Properties[0].Address.Address2"
                name="Properties[0].Address.Address2"
                defaultValue=""
                maxLength={255}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="City">
                City <span className="text-danger">*</span>
              </Label>
              <Input
                id="Properties[0].Address.City"
                name="Properties[0].Address.City"
                defaultValue=""
                maxLength={255}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="County">County</Label>
              <Input
                id="Properties[0].Address.County"
                name="Properties[0].Address.County"
                defaultValue=""
                maxLength={255}
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="RegionId">Region</Label>
              <Input
                type="select"
                id="Properties[0].Address.RegionId"
                name="Properties[0].Address.RegionId"
                defaultValue=""
              >
                <option value="">Please select a region</option>
                <option value="0">North</option>
                <option value="1">North West</option>
                <option value="2">Yorkshire and Humberside</option>
                <option value="3">East Midlands</option>
                <option value="4">West Midlands</option>
                <option value="5">East Anglia</option>
                <option value="6">London</option>
                <option value="7">South East (Not London)</option>
                <option value="8">South West</option>
                <option value="9">Wales</option>
                <option value="10">Scotland</option>
                <option value="11">Northern Ireland</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="Country">Country</Label>
              <Input
                type="select"
                id="Properties[0].Address.Country"
                name="Properties[0].Address.Country"
                defaultValue=""
              >
                <option value="">Please select a country</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="England">England</option>
                <option value="Scotland">Scotland</option>
                <option value="Wales">Wales</option>
                <option value="Northern Ireland">Northern Ireland</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AddressDetails;
