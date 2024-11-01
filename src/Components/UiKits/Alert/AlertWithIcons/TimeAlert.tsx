import { useState } from "react";
import { Alert, Button } from "reactstrap";

export const TimeAlert = () => {
  const [active, setActive] = useState(true);
  const onDismiss = () => setActive(false);
  return (
    <Alert color="transparent" className={`border-warning alert-dismissible p-0`} isOpen={active}>
      <div className="alert-arrow bg-warning">
        <i className="fa-regular fa-clock" />
      </div>
      <p className="mb-0">
        {"Your time over after "} <strong className="text-dark">{"5"}</strong> {"minute"}
      </p>
      <Button className="p-0 border-0 me-2 ms-auto" onClick={onDismiss}>
        <span className="bg-warning text-light px-3 py-1">{"Check"}</span>
      </Button>
    </Alert>
  );
};
