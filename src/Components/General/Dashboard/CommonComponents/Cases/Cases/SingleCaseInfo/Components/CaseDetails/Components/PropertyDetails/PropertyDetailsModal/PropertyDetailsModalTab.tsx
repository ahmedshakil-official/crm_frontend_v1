import { FC, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
} from "reactstrap";
import PropertyDetailsTabContent from "../PropertyDetailsTabContent";

interface PropertyDetailsModalTabProps {
  isOpen: boolean;
  toggle: () => void;
}

const PropertyDetailsModalTab: FC<PropertyDetailsModalTabProps> = ({
  isOpen,
  toggle,
}) => {
  const [activeTab, setActiveTab] = useState("1");

  const tabs = [
    { id: "1", title: "Property Address" },
    { id: "2", title: "Property Type" },
    { id: "3", title: "Additional Info" },
  ];

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Add New Property</ModalHeader>
      <ModalBody>
        <Card className="shadow-sm">
          <Nav className="nav-primary p-2" pills style={{ gap: "0.5rem" }}>
            {tabs.map((tab) => (
              <NavItem key={tab.id}>
                <NavLink
                  className={activeTab === tab.id ? "active" : ""}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ cursor: "pointer" }}
                >
                  {tab.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <CardBody>
            <PropertyDetailsTabContent
              tabId={activeTab}
              setTabId={setActiveTab}
            />
          </CardBody>
        </Card>
      </ModalBody>
    </Modal>
  );
};

export default PropertyDetailsModalTab;
