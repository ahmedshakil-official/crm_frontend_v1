import { FC, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const DisclaimerTabContents: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const disclaimerText = (
    <>
      <p className="mb-2">
        I/we confirm that the budget planner has been completed accurately and
        reflects our current monthly expenditure.
      </p>
      <p className="mb-0">
        I/we agree to inform our adviser of any changes to our expenditure.
      </p>
    </>
  );

  return (
    <Card className="mt-3 shadow-sm">
      <CardHeader className="bg-light d-flex align-items-center justify-content-between">
        <span className="fw-bold text-primary">Disclaimer</span>
      </CardHeader>
      <CardBody>
        <FormGroup check className="d-flex align-items-start">
          <Input
            type="checkbox"
            id="Disclaimer"
            name="Disclaimer"
            className="mt-1 me-3"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            data-val="true"
            data-val-required="The Disclaimer field is required."
          />
          <Label for="Disclaimer" className="text-muted">
            {disclaimerText}
          </Label>
        </FormGroup>
      </CardBody>
    </Card>
  );
};

export default DisclaimerTabContents;
