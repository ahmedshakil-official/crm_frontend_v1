import { FC } from "react";
import { FormGroup, Input, InputGroup, InputGroupText } from "reactstrap";

const DisclaimerTabContents: FC = () => {
  const disclaimerText = `
    <p>I can confirm that I/we have filled out the budget planner as accurately as possible and reflects our current monthly expenditure.</p>
    <p>I/we confirm we will inform our adviser should our expenditure change.</p>
  `;

  return (
    <div className="border rounded-3 shadow-sm mt-3">
      <div className="d-flex align-items-center bg-light border-bottom p-3">
        <div className="bg-white rounded">
          <Input
            type="checkbox"
            id="Disclaimer"
            name="Disclaimer"
            className="me-3"
            data-val="true"
            data-val-required="The Disclaimer field is required."
          />
        </div>
        <div>
          <span className="fw-bold text-primary">Disclaimer</span>
        </div>
      </div>

      <div className="p-3">
        <FormGroup>
          <Input type="hidden" name="DisclaimerText" value={disclaimerText} />
          <div
            dangerouslySetInnerHTML={{ __html: disclaimerText }}
            className="text-muted "
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default DisclaimerTabContents;
