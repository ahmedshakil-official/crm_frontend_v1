import { useState } from "react";
import { Alert } from "reactstrap";

export const ClockAlert = () => {
  const [active, setActive] = useState(true);
  const onDismiss = () => setActive(false);
  return (
    <Alert color="transparent" isOpen={active} toggle={onDismiss} className="text-primary border-primary">
      <i className="fa-regular fa-clock" />
      <p className="mb-0">
        {"One of"}
        <strong> {"YouTube's"} </strong>
        {"most crucial ranking factors is watch Time."}
      </p>
    </Alert>
  );
};
