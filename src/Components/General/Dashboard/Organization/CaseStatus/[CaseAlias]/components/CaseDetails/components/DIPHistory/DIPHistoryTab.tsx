import { useGetDIPHistoryDetailsQuery } from "@/Redux/Reducers/CaseDetails/DIPHistoryDetails/DIPHistoryDetailsApi";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import DIPHistoryContent from "./DIPHistoryContent";
import AddNewLenderHistoryModal from "./Modals/AddNewLenderHistoryModal";

interface DIPHistoryProps {
  alias: string;
  is_this_application_had_a_decision_in_principle: boolean;
  lender: string;
  dip_date: string;
  dip_decision: string;
  dip_reference_number: string;
  notes: string;
}

const DIPHistoryTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("1");
  // const [dipHistories, setDipHistories] = useState<any[]>([]);
  const { casealias } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { data: dipHistories, isLoading } = useGetDIPHistoryDetailsQuery({
    case_alias: casealias,
  });

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-3">
      {dipHistories.length > 0 ? (
        <>
          <Nav tabs className="justify-content-center">
            {dipHistories.map((_: any, index: number) => (
              <NavItem key={index}>
                <NavLink
                  className={`${
                    activeTab === String(index + 1) ? "active" : ""
                  } 
                    ${activeTab !== String(index + 1) ? "text-black" : ""}
                    ${activeTab === String(index + 1) ? "text-primary" : ""}`}
                  onClick={() => toggle(String(index + 1))}
                  style={{ cursor: "pointer", fontWeight: "normal" }}
                >
                  DIP History {index + 1}
                </NavLink>
              </NavItem>
            ))}
          </Nav>

          <TabContent activeTab={activeTab}>
            {dipHistories.map((dipHistory: DIPHistoryProps, index: number) => (
              <TabPane key={index} tabId={String(index + 1)}>
                <div className="p-3">
                  <DIPHistoryContent dipData={dipHistory} />
                </div>
              </TabPane>
            ))}
          </TabContent>
        </>
      ) : (
        <div className="text-center mt-4">
          <p className="mb-3">No DIP History found</p>
          <Button
            color="primary"
            onClick={() => setModalIsOpen(true)}
            type="button"
          >
            Add New Lender History
          </Button>
        </div>
      )}
      {/* Modal Component */}
      <AddNewLenderHistoryModal
        isOpen={modalIsOpen}
        toggle={() => setModalIsOpen(!modalIsOpen)}
      />
    </div>
  );
};

export default DIPHistoryTab;
