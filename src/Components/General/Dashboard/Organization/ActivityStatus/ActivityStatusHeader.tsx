import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import Link from "next/link";
import { useState } from "react";
import { FaClock } from "react-icons/fa"; // Importing a clock icon
import { Button, CardHeader } from "reactstrap";
import "./ActivityStatus.css";
import AddNewCaseModal from "./Modals/AddNewCaseModal";

interface ActivityStatusHeaderProps {
  fetchCaseInfo: () => void;
}

const ActivityStatusHeader: React.FC<
  ActivityStatusHeaderProps & FetchLeadsProps
> = ({ fetchCaseInfo, setIsFetchedLead, isFetchedLead }) => {
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
    <CardHeader className="pb-1 px-3 card-no-border">
      <div className="header-top d-flex justify-content-between ">
        {/* Left Side Content */}
        <div className="">
          <div className="d-flex align-items-center">
            <h3 className="mb-1">Activity Status</h3>
            <FaClock className="fs-6 text-success me-2 rotate-animation" />
          </div>
          <div>
            <p className="mb-0">
              {day} {date},{" "}
              <span>
                {month} {year}
              </span>
            </p>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="d-flex gap-2">
          <Button color="primary" onClick={openAddNewCaseModal}>
            Add New Case
          </Button>
          <Button
            color="success"
            setIsFetchedLead={setIsFetchedLead}
            isFetchedLead={isFetchedLead}
          >
            <Link className="text-white" href="/dashboard/organization/allcase">
              View All Case
            </Link>
          </Button>
        </div>
      </div>

      <AddNewCaseModal
        isOpen={isAddNewCaseModalOpen}
        toggle={toggleAddNewCaseModal}
        isFetchedLead={isFetchedLead}
        setIsFetchedLead={setIsFetchedLead}
        onSave={() => fetchCaseInfo()}
      />
    </CardHeader>
  );
};

export default ActivityStatusHeader;
