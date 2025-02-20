import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

interface LoanDetailsFormTab1Props {
  formData: {
    application_type: string;
    lenders_reference: string;
    mortgage_type: string;
    loan_purpose: string;
    borrower_type: string;
    interest_rate_type: string;
    product_term: string;
    lender: string;
    repayment_method: string;
    repayment_vehicle: string;
  };
  handleFormChange: (
    name: string,
    value: string | null | number | boolean
  ) => void;
}

const LoanDetailsFormTab1: React.FC<LoanDetailsFormTab1Props> = ({
  formData,
  handleFormChange,
}) => {
  return (
    <Container>
      <Form>
        <Row>
          {/* First Column */}
          <Col md={6}>
            <FormGroup>
              <Label>Application Type</Label>
              <Input
                type="select"
                name="application_type"
                value={formData.application_type}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="BUSINESS_LOAN">Business Loan</option>
                <option value="BUY_TO_LET">Buy to Let Mortgage</option>
                <option value="COMMERCIAL_MORTGAGE">Commercial Mortgage</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Mortgage Type</Label>
              <Input
                type="select"
                name="mortgage_type"
                value={formData.mortgage_type}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="PURCHASE">Purchase</option>
                <option value="REMORTGAGE">Remortgage</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Loan Purpose</Label>
              <Input
                type="select"
                name="loan_purpose"
                value={formData.loan_purpose}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="PURCHASE">Purchase</option>
                <option value="DEBT_CONSOLIDATION">Debt Consolidation</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Borrower Type</Label>
              <Input
                type="select"
                name="borrower_type"
                value={formData.borrower_type}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="HOMEMOVER">Homemover</option>
                <option value="FIRST_TIME_BUYER">First Time Buyer</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Interest Rate Type</Label>
              <Input
                type="select"
                name="interest_rate_type"
                value={formData.interest_rate_type}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="FIXED">Fixed</option>
                <option value="VARIABLE">Variable</option>
              </Input>
            </FormGroup>
          </Col>

          {/* Second Column */}
          <Col md={6}>
            <FormGroup>
              <Label>Product Term</Label>
              <Input
                type="select"
                name="product_term"
                value={formData.product_term}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="ONE_YEAR">1 Year</option>
                <option value="TWO_YEARS">2 Years</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Lender</Label>
              <Input
                type="select"
                name="lender"
                value={formData.lender}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="BARCLAYS">Barclays</option>
                <option value="HSBC">HSBC</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Repayment Method</Label>
              <Input
                type="select"
                name="repayment_method"
                value={formData.repayment_method}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="CAPITAL_AND_INTEREST">
                  Capital and Interest
                </option>
                <option value="INTEREST_ONLY">Interest Only</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Repayment Vehicle</Label>
              <Input
                type="select"
                name="repayment_vehicle"
                value={formData.repayment_vehicle}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              >
                <option value="">Select</option>
                <option value="ENDOWMENT">Endowment</option>
                <option value="PENSION">Pension</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Lender's Reference</Label>
              <Input
                type="text"
                name="lenders_reference"
                value={formData.lenders_reference}
                onChange={(e) =>
                  handleFormChange(e.target.name, e.target.value)
                }
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoanDetailsFormTab1;
