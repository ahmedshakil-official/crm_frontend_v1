import { CaseSearchProps } from "@/Types/Organization/CaseTypes";
import { FetchLeadsProps } from "@/Types/Organization/LeadTypes";
import Link from "next/link";
import { useState } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import {
  Button,
  CardHeader,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import "./ActivityStatus.css";
import AddNewCaseModal from "./Modals/AddNewCaseModal";

const ActivityStatusHeader: React.FC<FetchLeadsProps & CaseSearchProps> = ({
  fetchCaseInfo,
  setIsFetchedLead,
  isFetchedLead,
  searchQuery,
  setSearchQuery,
}) => {
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
      <Row className="header-top d-flex justify-content-between align-items-center">
        {/* Left Side: Title and Date */}
        <Col lg={3} sm={12} className="mt-1">
          <div className="d-flex align-items-center">
            <h3 className="mb-1">Activity Status</h3>
            <FaClock className="fs-6 text-success rotate-animation" />
          </div>
          <p className="mb-0">
            {day} {date},{" "}
            <span>
              {month} {year}
            </span>
          </p>
        </Col>

        {/* Center: Search Bar */}
        <Col lg={6} sm={12} className="mt-1">
          <InputGroup className="py-1">
            <Input
              type="text"
              placeholder="Search Case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupText className=" bg-success rounded-start-0 border-start-0">
              <FaSearch className="text-white fs-5" />
            </InputGroupText>
          </InputGroup>
        </Col>

        {/* Right Side: Buttons */}
        <Col lg={3} sm={12} className="mt-1 d-flex justify-content-end gap-2">
          <Button color="primary" onClick={openAddNewCaseModal}>
            Add New Case
          </Button>
          <Link href="/dashboard/organization/allcase" passHref>
            <Button color="success">View All Case</Button>
          </Link>
        </Col>
      </Row>

      {/* Add New Case Modal */}
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
