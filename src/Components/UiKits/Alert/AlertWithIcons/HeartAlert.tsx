import { useState } from "react";
import { Alert, Button } from "reactstrap";

export const HeartAlert = () => {
  const [active, setActive] = useState(true);
  return (
    <Alert color="transparent" className={`border-danger alert-dismissible p-0 mb-0`} isOpen={active}>
      <div className="alert-arrow bg-danger">
        <i className="fa-regular fa-heart" />
      </div>
      <p className="mb-0">
        {"Oh snap! change a few things "}
        <strong className="text-dark">{"Notification check "}</strong>
      </p>
      <Button
        className="p-0 border-0 me-2 ms-auto"
        onClick={() => {
          setActive(false);
        }}
      >
        <span className="bg-danger text-white px-3 py-1">{"Alert"}</span>
      </Button>
    </Alert>
  );
};
