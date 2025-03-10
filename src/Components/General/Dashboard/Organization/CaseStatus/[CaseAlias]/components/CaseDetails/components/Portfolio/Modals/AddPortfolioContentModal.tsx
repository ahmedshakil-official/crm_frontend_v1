import {
  useAddPropertyDetailsMutation,
  useGetPortfolioApplicantsQuery,
} from "@/Redux/Reducers/CaseDetails/Portfolio/PortfolioApi";
import { useParams } from "next/navigation";
import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

interface AddPortfolioContentModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddPortfolioContentModal: React.FC<AddPortfolioContentModalProps> = ({
  isOpen,
  toggle,
}) => {
  const params = useParams();
  const { casealias } = params;
  const [addPropertyDetails, { isLoading: isAddPropertiesLoading }] =
    useAddPropertyDetailsMutation();
  const { data, isLoading: isGetApplicantsLoading } =
    useGetPortfolioApplicantsQuery({
      case_alias: casealias,
    });
  // console.log("A: ",data);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const payload = {
        applicant_ids: [formData.get("applicants")],
        postcode: formData.get("postcode"),
        house_name_or_number: formData.get("houseNumber"),
        address_1: formData.get("address1"),
        address_2: formData.get("address2"),
        city: formData.get("city"),
        county: formData.get("county"),
        country: formData.get("country"),
        property_value: formData.get("propertyValue"),
        current_mortgage_balance: formData.get("currentMortgageBalance"),
        monthly_rental_income: formData.get("monthlyRental"),
        monthly_mortgage_payment: formData.get("monthlyPayment"),
        value_at_purchase: formData.get("valueAtPurchase"),
        date_purchased: formData.get("datePurchased") || null,
        is_hmo: formData.get("isHMO") === "on",
        is_mufb: formData.get("isMUFB") === "on",
        mortgage_lender: formData.get("mortgageLender"),
        repayment_type: formData.get("repaymentType"),
        current_rate: formData.get("currentRate"),
        rate_type: formData.get("rateType"),
        current_rate_end_date: formData.get("currentRateEndDate") || null,
        erc_end_date: formData.get("ercEndDate"),
        account_number: formData.get("accountNumber"),
        property_type: formData.get("propertyType"),
        ownership: formData.get("ownership"),
        leasehold: formData.get("leasehold"),
        year_built: formData.get("yearBuilt"),
        number_of_bedrooms: formData.get("numberOfBedrooms"),
        remaining_mortgage_term: formData.get("remainingMortgageTerm"),
        is_limited_company: formData.get("isLimitedCompany") === "on",
        epc_rating: formData.get("epcRating"),
      };
      console.log(payload);
      await addPropertyDetails({
        case_alias: casealias,
        propertyDetails: payload,
      });
      toggle();
    } catch (error) {
      console.error("Failed to add property:", error);
    }
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="xl">
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Add Property</span>
      </ModalHeader>
      <ModalBody className="px-5 py-4">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="applicants">Applicant/s*</Label>
                <Input id="applicants" name="applicants" type="select" required>
                  <option value="">Select...</option>
                  {data?.map((applicant: any) => (
                    <option
                      className="text-primary"
                      key={applicant.id}
                      value={applicant.id}
                    >
                      {applicant.first_name} {applicant.last_name}
                      {applicant.id}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="postcode">Postcode*</Label>
                <div className="d-flex gap-2">
                  <Input id="postcode" name="postcode" type="text" required />
                </div>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="postcode">Postcode*</Label>
                <div className="d-flex gap-2">
                  <Input id="postcode" name="postcode" type="text" required />
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="houseNumber">House Name Or Number*</Label>
                <Input
                  id="houseNumber"
                  name="houseNumber"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="address1">Address 1*</Label>
                <Input id="address1" name="address1" type="text" required />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="address2">Address 2</Label>
                <Input id="address2" name="address2" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="city">City*</Label>
                <Input id="city" name="city" type="text" required />
              </FormGroup>
            </Col>
            <Col md="4">
              {" "}
              <FormGroup>
                <Label for="county">County</Label>
                <Input id="county" name="county" type="text" />
              </FormGroup>
            </Col>
            <Col md="4">
              {" "}
              <FormGroup>
                <Label for="country">Country*</Label>
                <Input id="country" name="country" type="text" required />
              </FormGroup>
            </Col>
          </Row>
          <hr className="border-secondary" />
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="propertyValue">Property Value*</Label>
                <Input
                  id="propertyValue"
                  name="propertyValue"
                  type="number"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="currentMortgageBalance">
                  Current Mortgage Balance*
                </Label>
                <Input
                  id="currentMortgageBalance"
                  name="currentMortgageBalance"
                  type="number"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="monthlyRental">Monthly Rental Income*</Label>
                <Input
                  id="monthlyRental"
                  name="monthlyRental"
                  type="number"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="monthlyPayment">Monthly Mortgage Payment</Label>
                <Input
                  id="monthlyPayment"
                  name="monthlyPayment"
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              {" "}
              <FormGroup>
                <Label for="valueAtPurchase">Value At Purchase</Label>
                <Input
                  id="valueAtPurchase"
                  name="valueAtPurchase"
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="datePurchased">Date Purchased</Label>
                <Input id="datePurchased" name="datePurchased" type="date" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="isHMO" />
                  Is the property an HMO*
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="isMUFB" />
                  Is the property a MUFB
                </Label>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="mortgageLender">Mortgage Lender</Label>
                <Input id="mortgageLender" name="mortgageLender" type="text" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="repaymentType">Repayment Type</Label>
                <Input id="repaymentType" name="repaymentType" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="currentRate">Current Rate (%)</Label>
                <Input
                  id="currentRate"
                  name="currentRate"
                  type="number"
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="rateType">Rate Type</Label>
                <Input id="rateType" name="rateType" type="select">
                  <option value="">Select...</option>
                  <option value="UNKNOWN">Unknown</option>
                  <option value="FIXED">Fixed</option>
                  <option value="VARIABLE">Variable</option>
                  <option value="TRACKER">Tracker</option>
                  <option value="LIBOR_LINKED">Libor Linked</option>
                  <option value="DISCOUNT">Discount</option>
                  <option value="CAPPED">Capped</option>
                  <option value="ALL">All</option>
                  <option value="SVR">SVR</option>
                  <option value="OFFSET">Offset</option>
                  <option value="LIFETIME">Lifetime</option>
                  <option value="OTHER">Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="currentRateEndDate">Current Rate End Date</Label>
                <Input
                  id="currentRateEndDate"
                  name="currentRateEndDate"
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="ercEndDate">ERC End Date</Label>
                <Input id="ercEndDate" name="ercEndDate" type="date" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="accountNumber">Account Number</Label>
                <Input id="accountNumber" name="accountNumber" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="propertyType">Property Type</Label>
                <Input id="propertyType" name="propertyType" type="text" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="ownership">Ownership</Label>
                <Input id="ownership" name="ownership" type="text" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="leasehold">Leasehold</Label>
                <Input
                  id="leasehold"
                  name="leasehold"
                  type="number"
                  placeholder="Years"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="yearBuilt">Year Built</Label>
                <Input id="yearBuilt" name="yearBuilt" type="number" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="numberOfBedrooms">Number of Bedrooms</Label>
                <Input
                  id="numberOfBedrooms"
                  name="numberOfBedrooms"
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="remainingMortgageTerm">
                  Remaining Mortgage Term
                </Label>
                <Input
                  id="remainingMortgageTerm"
                  name="remainingMortgageTerm"
                  type="number"
                  placeholder="Years"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="isLimitedCompany" />
                  Is Limited Company
                </Label>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="epcRating">EPC Rating</Label>
                <Input id="epcRating" name="epcRating" type="select">
                  <option>Unknown</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                  <option>F</option>
                  <option>G</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4"></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end gap-2">
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
              <Button
                color="primary"
                type="submit"
                disabled={isAddPropertiesLoading}
              >
                {isAddPropertiesLoading ? "Adding..." : "Add Property"}
              </Button>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddPortfolioContentModal;
