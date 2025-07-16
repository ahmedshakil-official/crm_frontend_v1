import LoadingSpinner from "@/app/loading";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useGetSingleCaseQuery } from "@/Redux/Reducers/CommonComponents/Cases/CasesApi";
import { basicTabIndicator } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import {
  useGetProductDetailsQuery,
  useUpdateProductDetailsMutation,
} from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/ProductDetails/ProductDetailsApi";
import { getNextTabNav } from "@/utils/Helper/nextTabUtils";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ProductContent: React.FC = () => {
  const params = useParams();
  const { casealias } = params;
  const { data: session } = useSession();

  // State to manage form data
  const [formData, setFormData] = useState({
    product_description: "",
    initial_rate: 0.0,
    initial_rate_type: "",
    initial_rate_period_type: "",
    initial_rate_period: 0.0,
    reversion_rate: "",
    max_ltv: "",
    annual_percentage_rate: "",
    product_class: "",
    early_repayment_charge: 0.0,
    initial_monthly_payment: "",
    initial_monthly_payment_including_fees: "",
    monthly_payment_after_initial_period: "",
    true_cost_over_initial_period: "",
    true_cost_over_term: "",
    true_cost_without_fees: "",
    loan_required_including_fees: "",
    arrangement_fee: "",
    arrangement_fee_added_to_loan: "",
    valuation_fee: "",
    booking_fee: "",
    booking_fee_added_to_loan: "",
    procuration_fee: "",
    processing_consent: false,
    application_review: false,
  });
  const {
    data: caseData,
    isLoading: isCaseFetching,
    isError,
  } = useGetSingleCaseQuery({ case_alias: casealias }, { skip: !casealias });
  const { data: productDetails, isLoading } = useGetProductDetailsQuery({
    case_alias: casealias,
  });
  const [updateProductDetails, { isLoading: isUpdating }] =
    useUpdateProductDetailsMutation();
  const dispatch = useAppDispatch();
  // Update form data when API data is received
  // Update useEffect to properly map the API response
  useEffect(() => {
    if (productDetails && productDetails[0]) {
      const details = productDetails[0];
      setFormData({
        product_description: details.product_description || "",
        initial_rate: details.initial_rate || 0,
        initial_rate_type: details.initial_rate_type || "",
        initial_rate_period_type: details.initial_rate_period_type || "",
        initial_rate_period: details.initial_rate_period || null,
        reversion_rate: details.reversion_rate || null,
        max_ltv: details.max_ltv || null,
        annual_percentage_rate: details.annual_percentage_rate || null,
        product_class: details.product_class || "",
        early_repayment_charge: details.early_repayment_charge || null,
        initial_monthly_payment: details.initial_monthly_payment || null,
        initial_monthly_payment_including_fees:
          details.initial_monthly_payment_including_fees || null,
        monthly_payment_after_initial_period:
          details.monthly_payment_after_initial_Period || null,
        true_cost_over_initial_period:
          details.true_cost_over_initial_period || null,
        true_cost_over_term: details.true_cost_over_term || null,
        true_cost_without_fees: details.true_cost_without_fees || null,
        loan_required_including_fees:
          details.loan_required_including_fees || null,
        arrangement_fee: details.arrangement_fee || null,
        arrangement_fee_added_to_loan:
          details.arrangement_fee_added_to_loan || "",
        valuation_fee: details.valuation_fee || null,
        booking_fee: details.booking_fee || null,
        booking_fee_added_to_loan: details.booking_fee_added_to_loan || "",
        procuration_fee: details.procuration_fee || null,
        processing_consent: details.processing_consent || false,
        application_review: details.application_review || false,
      });
    }
  }, [productDetails]);

  // Update handleSubmit to include the product alias
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (productDetails && productDetails[0]) {
        await updateProductDetails({
          case_alias: casealias,
          product_alias: productDetails[0].alias,
          productUpdatePayload: formData,
        }).unwrap();
        toast.success("Product details updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update product details:", error);
      toast.error("Failed to update product details");
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const currentTab: string | null = useAppSelector(
    (state) => state.caseDetails.basicTabId
  );

  const handleNextTab = () => {
    const nextTabNav = getNextTabNav(caseData?.case_stage, currentTab!);
    if (nextTabNav) {
      dispatch(basicTabIndicator(nextTabNav));
    } else {
      toast.info("This is the last tab.");
    }
  };

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <h4 className="mb-4 fs-4 text-primary">Product Details</h4>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="productDescription">Product Description*</Label>
            <Input
              id="productDescription"
              name="product_description"
              type="text"
              value={formData.product_description || ""}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="initialRate">Initial Rate*</Label>
            <Input
              id="initialRate"
              name="initial_rate"
              type="number"
              step="0.01"
              value={formData.initial_rate || ""}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <FormGroup>
            <Label for="initialRateType">Initial Rate Type*</Label>
            <Input
              id="initialRateType"
              name="initial_rate_type"
              type="select"
              value={formData.initial_rate_type}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="FIXED">Fixed</option>
              <option value="VARIABLE">Variable</option>
              <option value="TRACKER">Tracker</option>
              <option value="DISCOUNTED">Discounted</option>
              <option value="ALL">All</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="initialRatePeriodType">Initial Rate Period Type*</Label>
            <Input
              id="initialRatePeriodType"
              name="initial_rate_period_type"
              type="select"
              value={formData.initial_rate_period_type}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="MONTHS">Months</option>
              <option value="FIXED_DATE">Fixed Date</option>
              <option value="END_OF_MORTGAGE_TERM">End of Mortgage Term</option>
            </Input>
          </FormGroup>
        </Col>
        {(formData.initial_rate_period_type === "MONTHS" ||
          formData.initial_rate_period_type === "FIXED_DATE") && (
          <Col md={3}>
            <FormGroup>
              <Label for="initialRatePeriod">Initial Rate Period</Label>
              <Input
                id="initialRatePeriod"
                name="initial_rate_period"
                type="number"
                min="0"
                step="1"
                value={formData.initial_rate_period || ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        )}
        <Col md={3}>
          <FormGroup>
            <Label for="reversionRate">Reversion Rate(%)</Label>
            <Input
              id="reversionRate"
              name="reversion_rate"
              type="number"
              step="0.01"
              value={formData.reversion_rate || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="maxLTV">Max LTV</Label>
            <Input
              id="maxLTV"
              name="max_ltv"
              type="number"
              step="0.01"
              value={formData.max_ltv || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="annualPercentageRate">Annual Percentage Rate</Label>
            <Input
              id="annualPercentageRate"
              name="annual_percentage_rate"
              type="number"
              step="0.01"
              value={formData.annual_percentage_rate || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="productClass">Product Class</Label>
            <Input
              id="productClass"
              name="product_class"
              type="select"
              value={formData.product_class}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="RESIDENTIAL">Residential</option>
              <option value="BTL">BTL</option>
              <option value="SECURED">Secured</option>
              <option value="BRIDGING">Bridge</option>
              <option value="COMMERCIAL">Commercial</option>
              <option value="LET_TO_BUY">Let To Buy</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="earlyRepaymentCharge">Early Repayment Charge</Label>
            <Input
              id="earlyRepaymentCharge"
              name="early_repayment_charge"
              type="number"
              min="0"
              step="1"
              value={formData.early_repayment_charge || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="initialMonthlyPayment">
              Initial Monthly Payment (£)
            </Label>
            <Input
              id="initialMonthlyPayment"
              name="initial_monthly_payment"
              type="number"
              step="0.01"
              value={formData.initial_monthly_payment}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="initialMonthlyPaymentIncludingFees">
              Initial Monthly Payment Including Fees (£)
            </Label>
            <Input
              id="initialMonthlyPaymentIncludingFees"
              name="initial_monthly_payment_including_fees"
              type="number"
              step="0.01"
              value={formData.initial_monthly_payment_including_fees || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="monthlyPaymentAfterInitial">
              Monthly Payment After Initial Period (£)
            </Label>
            <Input
              id="monthlyPaymentAfterInitial"
              name="monthly_payment_after_initial_period"
              type="number"
              step="0.01"
              value={formData.monthly_payment_after_initial_period || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="trueCostOverInitialPeriod">
              True Cost Over Initial Period
            </Label>
            <Input
              id="trueCostOverInitialPeriod"
              name="true_cost_over_initial_period"
              type="number"
              step="0.01"
              value={formData.true_cost_over_initial_period || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="trueCostOverTerm">True Cost Over Term</Label>
            <Input
              id="trueCostOverTerm"
              name="true_cost_over_term"
              type="number"
              step="0.01"
              value={formData.true_cost_over_term || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="trueCostWithoutFees">True Cost Without Fees</Label>
            <Input
              id="trueCostWithoutFees"
              name="true_cost_without_fees"
              type="number"
              step="0.01"
              value={formData.true_cost_without_fees || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="loanRequiredIncludingFees">
              Loan Required Including Fees (£)
            </Label>
            <Input
              id="loanRequiredIncludingFees"
              name="loan_required_including_fees"
              type="number"
              step="0.01"
              value={formData.loan_required_including_fees || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="arrangementFee">Arrangement Fee (£)</Label>
            <Input
              id="arrangementFee"
              name="arrangement_fee"
              type="number"
              step="0.01"
              value={formData.arrangement_fee || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="arrangementFeeAddedToLoan">
              Arrangement Fee Added To Loan
            </Label>
            <Input
              id="arrangementFeeAddedToLoan"
              name="arrangement_fee_added_to_loan"
              type="select"
              value={formData.arrangement_fee_added_to_loan}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="valuationFee">Valuation Fee (£)</Label>
            <Input
              id="valuationFee"
              name="valuation_fee"
              type="number"
              step="0.01"
              value={formData.valuation_fee || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="bookingFee">Booking Fee (£)</Label>
            <Input
              id="bookingFee"
              name="booking_fee"
              type="number"
              step="0.01"
              value={formData.booking_fee || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="bookingFeeAddedToLoan">Booking Fee Added to Loan</Label>
            <Input
              id="bookingFeeAddedToLoan"
              name="booking_fee_added_to_loan"
              type="select"
              value={formData.booking_fee_added_to_loan}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
              <option value="NA">N/A</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="procurationFee">Procuration Fee (£)</Label>
            <Input
              id="procurationFee"
              name="procuration_fee"
              type="number"
              step="0.01"
              value={formData.procuration_fee || ""}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <hr className="my-4" />

      <div className="consent-section mt-4 border-success p-4 rounded-2">
        <FormGroup check>
          <Input
            type="checkbox"
            id="processingConsent"
            name="processing_consent"
            checked={formData.processing_consent || false}
            onChange={handleChange}
          />
          <Label check for="processingConsent" className="text-primary">
            Processing Consent
          </Label>
        </FormGroup>
        <div className="mt-4">
          <h5 className="fw-bold text-uppercase">
            Confidential Fact Find Declaration
          </h5>
          <p className="text-muted mt-1">
            Please ensure you have completed this form as accurately as
            possible. The information you confirm here will be used to submit
            your application to the mortgage lender who may decline your
            application if the information is later found to be inaccurate.
          </p>

          <h6 className="mt-4 fw-bold">Documents</h6>
          <p className="text-muted mt-1">
            The following documents may assist you in ensuring the information
            provided in this Fact Find is as accurate as possible an are also
            the most common documents requested by lenders to support your
            application:
          </p>
          <ol className="text-muted">
            <li>Identification such as a passport or driver's license</li>
            <li>Address proof such as a utility bill</li>
            <li>Personal and business bank statements</li>
            <li>Income details such as payslips or accounts</li>
            <li>Evidence of deposit (purchases only)</li>
          </ol>
          <small className="text-muted">
            These documents can also be uploaded as part of this form.
          </small>

          <h6 className="mt-4 fw-bold">Property Portfolios</h6>
          <p className="text-muted mt-1">
            If you hold a property portfolio, the lender will expect that you
            have submitted details of any profits or losses to HMRC for tax
            purposes. If you have NOT for any reason submitted your accounting
            information to HMRC, it may be a requirement of the application that
            this is corrected. Where you have NOT yet submitted tax returns,
            please provide details in the notes section of this form of your
            anticipated/projected profit or losses from your portfolio for each
            of the years you have held investment property and an explanation
            why they have not yet been submitted.
          </p>
        </div>
      </div>

      <div className="border-success p-4 rounded-2 mt-4">
        <FormGroup check>
          <Input
            type="checkbox"
            id="applicationReview"
            name="application_review"
            checked={formData.application_review || false}
            onChange={handleChange}
          />
          <Label check for="applicationReview" className="text-primary">
            Application Review
          </Label>
        </FormGroup>

        <h6 className="mt-4 fw-bold text-uppercase">
          Reviewing Your Mortgage Arrangements
        </h6>
        <p className="text-muted mt-1">
          Following Completion of your mortgage or loan and/or setting up and
          insurance policy on your behalf, we will keep in contact with you by
          appropriate means to review your mortgage arrangements and keep you
          informed of any products or services that may be of interest to you.
        </p>
        <small className="text-muted">
          Please tick the box above if you would like QOP Financial Services Ltd
          to contact you regarding your mortgage arrangements.
        </small>
      </div>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button
          color="primary"
          type="submit"
          disabled={
            isUpdating ||
            (session?.user?.user_type === "CLIENT" &&
              productDetails[0]?.updated_by !== null)
          }
        >
          {isUpdating ? "Saving..." : "Save Changes"}
        </Button>
        <Button
          type="submit"
          color="secondary"
          onClick={(e) => {
            handleSubmit(e);
            handleNextTab();
          }}
          disabled={
            isUpdating ||
            (session?.user?.user_type === "CLIENT" &&
              productDetails[0]?.updated_by !== null)
          }
        >
          Save & Next
        </Button>
      </div>
    </Form>
  );
};

export default ProductContent;
