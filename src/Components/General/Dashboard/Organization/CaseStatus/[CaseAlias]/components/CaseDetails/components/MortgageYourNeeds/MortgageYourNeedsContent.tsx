import React from "react";
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

const MortgageYourNeedsContent: React.FC = () => {
  const yesNoOptions = ["yes", "no"];
  return (
    <div>
      <Card>
        <CardHeader className="bg-primary">
          <h3>Questions & Answers</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label>What repayment method do you require and why?</Label>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: Explanation of Repayment mortgage /Interest Only/Part &
                part Mortgage provided and ask sufficient questions to recommend
                an appropriate repayment vehicle (e.g. Pension/ ISA, sale of
                property/ other)
              </small>
            </FormGroup>

            <FormGroup>
              <Label>
                What is important to you in regard to your monthly mortgage
                payments?
              </Label>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: Explain the advantage and disadvantages of the various
                rate types and what effect they could have for the client. E.g
                Fixed rate, variable, discount, tracker.
              </small>
            </FormGroup>

            <FormGroup>
              <Label>
                How long do you feel is reasonable to be tied into a specific
                mortgage deal? (initial benefit period - e.g 2/3/5 year fixed) +
                confirm why.
              </Label>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: Establishes the most appropriate length of deal period for
                client based on their personal circumstances and establish how
                long a period of early repayment charges the client is prepared
                to accept and which is appropriate to their circumstances. are
                they open to looking at a range of fixed rates for example.
              </small>
            </FormGroup>

            <FormGroup>
              <Label>
                Please confirm the length of term you would like for your
                mortgage and also your preferred monthly budget?
              </Label>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: Check and confirm the client understanding, e.g longer
                term will incur further interest and be more expensive. If there
                is disposable income for a shorter term, why has this not been
                recommended. if BTL – do not link term to affordability.
              </small>
            </FormGroup>

            <FormGroup>
              <Label>Your preferences over your retirement age?</Label>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: Is it important the term finishes before state retirement
                age or selected retirement age? If chosen retirement age is over
                state retirement age, confirm plausibility of client working to
                that age. If Client aged over 55 and mortgage term will exceed
                state retirement age (or earlier if selected) by more than 2
                years – explanation of Later Life lending is provided and
                pension provisions discussed
              </small>
            </FormGroup>

            <FormGroup className="border-primary rounded-2 p-2">
              <Label className="text-primary">
                So, I can research a suitable mortgage, please tell me what
                mortgage features are important to you.
              </Label>
              <Row>
                <Col md={4}>
                  {" "}
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      No up-front costs (Free Legals, Free Lender Fees and Free
                      Valuation)
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`noUpfrontCosts-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="noUpfrontCosts"
                            id={`noUpfrontCosts-${option}`}
                          />
                          <Label check for={`noUpfrontCosts-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      Ability to make overpayments
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`overpayments-${option}`} check inline>
                          <Input
                            type="radio"
                            name="overpayments"
                            id={`overpayments-${option}`}
                          />
                          <Label check for={`overpayments-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      Early Repayment charges (on partial repayments, No ERCs,
                      no overhang)
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`earlyRepayment-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="earlyRepayment"
                            id={`earlyRepayment-${option}`}
                          />
                          <Label check for={`earlyRepayment-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      To minimise any lender arrangement costs(No booking fees
                      and no arrangement fees)
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`minimiseCosts-${option}`} check inline>
                          <Input
                            type="radio"
                            name="minimiseCosts"
                            id={`minimiseCosts-${option}`}
                          />
                          <Label check for={`minimiseCosts-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  {" "}
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      The ability to add fees to the mortgage
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`addFees-${option}`} check inline>
                          <Input
                            type="radio"
                            name="addFees"
                            id={`addFees-${option}`}
                          />
                          <Label check for={`addFees-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      The ability to add fees to the mortgage - Client is aware
                      that extra interst will be payable
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`the_ability_to_add_fees_to_the_mortgage-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="the_ability_to_add_fees_to_the_mortgage"
                            id={`the_ability_to_add_fees_to_the_mortgage-${option}`}
                          />
                          <Label
                            check
                            for={`the_ability_to_add_fees_to_the_mortgage-${option}`}
                          >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">Cashback</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`cashback-${option}`} check inline>
                          <Input
                            type="radio"
                            name="cashback"
                            id={`cashback-${option}`}
                          />
                          <Label check for={`cashback-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">Portability</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`portability-${option}`} check inline>
                          <Input
                            type="radio"
                            name="portability"
                            id={`portability-${option}`}
                          />
                          <Label check for={`portability-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">Guarantor / JBSP</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`guarantor-${option}`} check inline>
                          <Input
                            type="radio"
                            name="guarantor"
                            id={`guarantor-${option}`}
                          />
                          <Label check for={`guarantor-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  {" "}
                  <FormGroup className="mb-3">
                    <Label className="d-block">Offset Mortgage</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`offsetMortgage-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="offsetMortgage"
                            id={`offsetMortgage-${option}`}
                          />
                          <Label check for={`offsetMortgage-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      Scheme Specific (e.g HTBI-RTB)
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`schemeSpecific-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="schemeSpecific"
                            id={`schemeSpecific-${option}`}
                          />
                          <Label check for={`schemeSpecific-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">Speed of completion</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`speedCompletion-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="speedCompletion"
                            id={`speedCompletion-${option}`}
                          />
                          <Label check for={`speedCompletion-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">
                      Sharia Compliant Mortgages
                    </Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup
                          key={`shariaCompliant-${option}`}
                          check
                          inline
                        >
                          <Input
                            type="radio"
                            name="shariaCompliant"
                            id={`shariaCompliant-${option}`}
                          />
                          <Label check for={`shariaCompliant-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">Ltd Company BTL</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`ltdCompany-${option}`} check inline>
                          <Input
                            type="radio"
                            name="ltdCompany"
                            id={`ltdCompany-${option}`}
                          />
                          <Label check for={`ltdCompany-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <Label className="d-block">Any Incentives</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`incentives-${option}`} check inline>
                          <Input
                            type="radio"
                            name="incentives"
                            id={`incentives-${option}`}
                          />
                          <Label check for={`incentives-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Input type="textarea" name="mortgage_features_notes" />
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label>
                If you are considering debt consolidation, what are your
                reasons; and what impact do you expect the consolidation to have
                on your lifestyle?
              </Label>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: If you have previously consolidated, please explain why
                you are re-consolidating and will this reoccur again in the
                future?
              </small>
            </FormGroup>
            <FormGroup>
              <Label>
                Do you anticipate any changes to your income or expenditure in
                the near future?
              </Label>
              <div className="d-flex gap-4 mb-2">
                {yesNoOptions.map((option) => (
                  <FormGroup key={option} check inline>
                    <Input type="radio" name="incomeChanges" />
                    <Label check>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </FormGroup>
                ))}
              </div>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: are they expecting a pay rise/ new baby / new job /
                inheritance etc
              </small>
            </FormGroup>
            <FormGroup className="border-primary rounded-2 p-2">
              <Label className="text-primary">
                Your Mortgage Related Insurance needs and requirements.
              </Label>
              <Row>
                <Col md={12}>
                  <Row>
                    {" "}
                    <h6 className="text-secondary mb-2">
                      Applicant 1 Existing Protection
                    </h6>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Life Cover</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup key={`lifeCover-${option}`} check inline>
                              <Input
                                type="radio"
                                name="lifeCover"
                                id={`lifeCover-${option}`}
                              />
                              <Label check for={`lifeCover-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      {" "}
                      <FormGroup className="mb-2">
                        <Label className="d-block">Critical Illness</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`criticalIllness-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="criticalIllness"
                                id={`criticalIllness-${option}`}
                              />
                              <Label check for={`criticalIllness-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Income Protection</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`incomeProtection-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="incomeProtection"
                                id={`incomeProtection-${option}`}
                              />
                              <Label check for={`incomeProtection-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">ASU</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup key={`asu-${option}`} check inline>
                              <Input
                                type="radio"
                                name="asu"
                                id={`asu-${option}`}
                              />
                              <Label check for={`asu-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">PMI</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup key={`pmi-${option}`} check inline>
                              <Input
                                type="radio"
                                name="pmi"
                                id={`pmi-${option}`}
                              />
                              <Label check for={`pmi-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Family Income Benefit</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`familyIncomeBenefit-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="familyIncomeBenefit"
                                id={`familyIncomeBenefit-${option}`}
                              />
                              <Label
                                check
                                for={`familyIncomeBenefit-${option}`}
                              >
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">
                          Buildings and contents
                        </Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`buildingsContents-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="buildingsContents"
                                id={`buildingsContents-${option}`}
                              />
                              <Label check for={`buildingsContents-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} className="py-2">
                  <Row>
                    <h6 className="text-secondary mb-2">
                      Applicant 2 Existing Protection
                    </h6>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Life Cover</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`lifeCover2-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="lifeCover2"
                                id={`lifeCover2-${option}`}
                              />
                              <Label check for={`lifeCover2-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Critical Illness</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`criticalIllness2-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="criticalIllness2"
                                id={`criticalIllness2-${option}`}
                              />
                              <Label check for={`criticalIllness2-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Income Protection</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`incomeProtection2-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="incomeProtection2"
                                id={`incomeProtection2-${option}`}
                              />
                              <Label check for={`incomeProtection2-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">ASU</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup key={`asu2-${option}`} check inline>
                              <Input
                                type="radio"
                                name="asu2"
                                id={`asu2-${option}`}
                              />
                              <Label check for={`asu2-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">PMI</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup key={`pmi2-${option}`} check inline>
                              <Input
                                type="radio"
                                name="pmi2"
                                id={`pmi2-${option}`}
                              />
                              <Label check for={`pmi2-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">Family Income Benefit</Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`familyIncomeBenefit2-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="familyIncomeBenefit2"
                                id={`familyIncomeBenefit2-${option}`}
                              />
                              <Label
                                check
                                for={`familyIncomeBenefit2-${option}`}
                              >
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup className="mb-2">
                        <Label className="d-block">
                          Buildings and contents
                        </Label>
                        <div className="d-flex gap-4">
                          {yesNoOptions.map((option) => (
                            <FormGroup
                              key={`buildingsContents2-${option}`}
                              check
                              inline
                            >
                              <Input
                                type="radio"
                                name="buildingsContents2"
                                id={`buildingsContents2-${option}`}
                              />
                              <Label check for={`buildingsContents2-${option}`}>
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Label>
                            </FormGroup>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup className="border-primary rounded-2 p-2">
              <Label className="text-primary">
                We will provide you with a quotation for buildings and or
                contents insurance Which of the following do you wish to be
                included within this quotation?
              </Label>
              <Row>
                <Col md={4}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">Buildings</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`buildings-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="buildings" 
                            id={`buildings-${option}`}
                          />
                          <Label check for={`buildings-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">+ Contents</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`contents-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="contents" 
                            id={`contents-${option}`}
                          />
                          <Label check for={`contents-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">Accidental Damage</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`accidentalDamage-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="accidentalDamage" 
                            id={`accidentalDamage-${option}`}
                          />
                          <Label check for={`accidentalDamage-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">Landlords cover</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`landlordsCover-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="landlordsCover" 
                            id={`landlordsCover-${option}`}
                          />
                          <Label check for={`landlordsCover-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">Home Emergency Cover</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`homeEmergency-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="homeEmergency" 
                            id={`homeEmergency-${option}`}
                          />
                          <Label check for={`homeEmergency-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">Personal Possessions Cover</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`personalPossessions-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="personalPossessions" 
                            id={`personalPossessions-${option}`}
                          />
                          <Label check for={`personalPossessions-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup className="mb-2">
                    <Label className="d-block">If Personal possessions, confirm items and amount of cover</Label>
                    <div className="d-flex gap-4">
                      {yesNoOptions.map((option) => (
                        <FormGroup key={`confirmPersonalPossessions-${option}`} check inline>
                          <Input 
                            type="radio" 
                            name="confirmPersonalPossessions" 
                            id={`confirmPersonalPossessions-${option}`}
                          />
                          <Label check for={`confirmPersonalPossessions-${option}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label>Do you have a will in place?</Label>
              <div className="d-flex gap-4 mb-2">
                {yesNoOptions.map((option) => (
                  <FormGroup key={option} check inline>
                    <Input type="radio" name="hasWill" />
                    <Label check>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </FormGroup>
                ))}
              </div>
              <Input type="textarea" rows={4} />
              <small className="text-muted">
                Note: when was it last reviewed? Would you like us to refer you
                to someone who can draft and update your will?
              </small>
            </FormGroup>
            <FormGroup>
              <Label>
                Is there anything else you would like to discuss or add to your
                mortgage requirements?
              </Label>
              <Input type="textarea" rows={4} />
            </FormGroup>
            <FormGroup>
              <Label>Notes</Label>
              <Input type="textarea" rows={4} />
            </FormGroup>

            <div className="d-flex justify-content-end mt-3">
              <Button
                color="primary"
                onClick={() => {
                  alert("Save button clicked");
                }}
              >
                Save Mortgage Needs
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default MortgageYourNeedsContent;
