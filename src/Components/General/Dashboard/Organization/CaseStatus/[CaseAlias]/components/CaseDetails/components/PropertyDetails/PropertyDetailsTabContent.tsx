import { FC } from "react";
import { Button, TabContent, TabPane } from "reactstrap";
import AddressDetails from "./Components/PropertyDetailsTabs/PropertyAddress";
import PropertyDetails from "./Components/PropertyDetailsTabs/PropertyType";
import AdditionalInfo from "./Components/PropertyDetailsTabs/PropertyAdditionalInfo";
interface PropertyDetailsTabContentProps {
  tabId: string;
  setTabId: (id: string) => void;
}
const PropertyDetailsTabContent: FC<PropertyDetailsTabContentProps> = ({ tabId, setTabId }) => {
  const handleNext = () => setTabId((parseInt(tabId) + 1).toString());
  const isLastTab = tabId === "3"; // Since we have 3 tabs

  return (
    <div>
      <TabContent activeTab={tabId} className="w-full">
        <TabPane tabId="1">
          <AddressDetails />
          <Button color="primary" onClick={handleNext} className="float-end">
            Next
          </Button>
        </TabPane>
        <TabPane tabId="2">
          <PropertyDetails />
          <Button color="primary" onClick={handleNext} className="float-end">
            Next
          </Button>
        </TabPane>
        <TabPane tabId="3">
          <AdditionalInfo/>
          <Button color="primary" onClick={handleNext} className="float-end" hidden={isLastTab}>
            Next
          </Button>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default PropertyDetailsTabContent;