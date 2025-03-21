import { useState } from "react";
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink } from "reactstrap";
import FoundProperty from "./Components/FoundProperty";
import NoteForProperty from "./Components/NoteForProperty";
import PropertyValuationCard from "./Components/PropertyValuationCard";
import PropertyDetailsTabContent from "./PropertyDetailsTabContent";
import { useGetPropertiesQuery } from "@/Redux/Reducers/CaseDetails/PropertyDetails/PropertyDetailsApi";
import { useParams } from "next/navigation";
import { PropertyData } from "@/Types/Organization/CaseDetails/PropertyDetails";

const propertyContentTabs = [
  { id: "1", title: "Property Address" },
  { id: "2", title: "Property Type" },
  { id: "3", title: "Additional Info" },
];

const PropertyDetails: React.FC = () => {
  const { casealias } = useParams();
  const [activePropertyTab, setActivePropertyTab] = useState("0");
  const [activeContentTab, setActiveContentTab] = useState("1");
  const [isPropertyFound, setIsPropertyFound] = useState(false);
  const { data: properties, isLoading } = useGetPropertiesQuery({ case_alias: casealias });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PropertyValuationCard />
      <FoundProperty onPropertyFound={(value) => setIsPropertyFound(value)} />
      {isPropertyFound && properties && properties.length > 0 && (
        <section>
          <Card className="shadow-sm">
            <CardHeader className="bg-white border-bottom">
              <Nav
                className="nav-tabs mb-3 d-flex justify-content-center align-items-center"
                style={{ gap: "0.5rem" }}
              >
                {properties.map((property: PropertyData, index: number) => (
                  <NavItem key={index}>
                    <NavLink
                      className={
                        activePropertyTab === index.toString() 
                          ? "text-primary border-primary" 
                          : ""
                      }
                      onClick={() => setActivePropertyTab(index.toString())}
                      style={{ 
                        cursor: "pointer",
                        borderBottom: activePropertyTab === index.toString() 
                          ? "2px solid var(--bs-primary)" 
                          : "none"
                      }}
                    >
                      Property {index + 1}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Nav
                className="nav-primary  d-flex justify-content-center align-items-center"
                pills
                style={{ gap: "0.5rem" }}
              >
                {propertyContentTabs.map((tab) => (
                  <NavItem key={tab.id}>
                    <NavLink
                      className={activeContentTab === tab.id ? "active" : ""}
                      onClick={() => setActiveContentTab(tab.id)}
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
                tabId={activeContentTab}
                setTabId={setActiveContentTab}
                propertyData={properties[parseInt(activePropertyTab)]}
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
