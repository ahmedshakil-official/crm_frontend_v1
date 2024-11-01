import { useState } from "react";
import { Alert } from "reactstrap";

export const ThumbsAlert = () => {
  const [active, setActive] = useState(true);
  const onDismiss = () => setActive(false);

  return (
    <Alert color="transparent" isOpen={active} toggle={onDismiss} className="text-success border-success alert-icons mb-0 outline-2x">
      <i className="fa-regular fa-thumbs-up" />
      <p className="mb-0">
        <b> {"Well done! "}</b>
        {"You successfully read this important message."}
      </p>
    </Alert>
  );
};
