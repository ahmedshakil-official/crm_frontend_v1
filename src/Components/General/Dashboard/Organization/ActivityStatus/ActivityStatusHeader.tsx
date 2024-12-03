import { useState } from "react";
import { FaClock } from "react-icons/fa"; // Importing a clock icon
import { Button, CardHeader } from "reactstrap";
import "./ActivityStatus.css";
import AddNewCaseModal from "./Modals/AddNewCaseModal";

const ActivityStatusHeader = () => {
  const [isAddNewCaseModalOpen, setIsAddNewCaseModalOpen] = useState(false);
  const today = new Date();
  const day = today.toLocaleString("en-UK", { weekday: "long" });
  const date = today.getDate();
  const month = today.toLocaleDateString("en-UK", { month: "short" });
  const year = today.getFullYear();

  const toggleAddNewCaseModal = () =>
    setIsAddNewCaseModalOpen(!isAddNewCaseModalOpen);

  const openAddNewCaseModal = () => {
    toggleAddNewCaseModal();
  };

  return (
    <CardHeader className="pb-0 card-no-border">
      <div className="header-top text-center">
        <div className="icon-wrapper d-flex">
          <h3>Activity Status</h3>
          <FaClock className="fs-6 text-success rotate-animation" />
        </div>
        <div>
          <Button color="primary" onClick={openAddNewCaseModal}>
            Add New Case
          </Button>
        </div>
        <div>
          <p>
            {day} {date},{" "}
            <span>
              {month} {year}
            </span>
          </p>
        </div>
      </div>
      <AddNewCaseModal
        isOpen={isAddNewCaseModalOpen}
        toggle={toggleAddNewCaseModal}
        onSave={() => console.log("dkfjd")}
      />
    </CardHeader>
  );
};

export default ActivityStatusHeader;
