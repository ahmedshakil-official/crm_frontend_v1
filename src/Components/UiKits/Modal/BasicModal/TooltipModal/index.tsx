import { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { TooltipLink } from "./TooltipLink";
import { Button, Tooltip } from "reactstrap";

export const TooltipModal = () => {
  const [state, setState] = useState({ modalOpen: false, tooltipOpen: false });
  const handleModalToggle = () => {
    setState((prevState) => ({
      ...prevState,
      modalOpen: !prevState.modalOpen,
    }));
  };
  const handleTooltipToggle = () => {
    setState((prevState) => ({
      ...prevState,
      tooltipOpen: !prevState.tooltipOpen,
    }));
  };
  const data = { isOpen: state.modalOpen, header: true, footer: true, toggler: handleModalToggle, center: true, title: "Tooltip and popover modal" };
  return (
    <>
      <Button color="info" className="px-xl-2 px-xxl-3" onClick={handleModalToggle}>
        {"Tooltips and popovers"}
      </Button>
      <CommonModal modalData={data}>
        <h5>{"Popover in a modal"}</h5>
        <p className="mt-2">
          {"This "}
          <Button className="popover-test" size="sm" color="success" id="TooltipExample">
            {"button"}
          </Button>
          {" triggers a popover on click."}
          <Tooltip autohide={true} isOpen={state.tooltipOpen} target="TooltipExample" toggle={handleTooltipToggle}>
            {"this is amazing content"}
          </Tooltip>
        </p>
        <hr />
        <TooltipLink />
      </CommonModal>
    </>
  );
};
