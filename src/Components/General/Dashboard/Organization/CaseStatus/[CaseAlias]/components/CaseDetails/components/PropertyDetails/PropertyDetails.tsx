import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import FoundProperty from "./Components/FoundProperty";
import NoteForProperty from "./Components/NoteForProperty";
import PropertyValuationCard from "./Components/PropertyValuationCard";
import PropertyDetailsTabContent from "./PropertyDetailsTabContent";

const PropertyDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [isPropertyFound, setIsPropertyFound] = useState(false);

  const tabs = [
    { id: "1", title: "Property Address" },
    { id: "2", title: "Property Type" },
    { id: "3", title: "Additional Info" },
  ];

  return (
    <div>
      <PropertyValuationCard />
      <FoundProperty onPropertyFound={(value) => setIsPropertyFound(value)} />
      {isPropertyFound && (
        <section>
          <Card className="shadow-sm">
            <CardHeader className="bg-white border-bottom d-flex justify-content-center">
              <Nav className="nav-primary" pills style={{ gap: "0.5rem" }}>
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
            </CardHeader>
            <CardBody>
              <PropertyDetailsTabContent
                tabId={activeTab}
                setTabId={setActiveTab}
              />
            </CardBody>
          </Card>
        </section>
      )}
      <NoteForProperty />
    </div>
  );
};

export default PropertyDetails;
