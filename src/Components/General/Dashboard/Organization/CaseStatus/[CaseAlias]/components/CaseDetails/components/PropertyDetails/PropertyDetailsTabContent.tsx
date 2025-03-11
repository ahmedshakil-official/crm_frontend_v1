import { FC } from "react";
import { Button, TabContent, TabPane } from "reactstrap";
import { useSelector } from "react-redux";
import AddressDetails from "./Components/PropertyDetailsTabs/PropertyAddress";
import PropertyDetails from "./Components/PropertyDetailsTabs/PropertyType";
import AdditionalInfo from "./Components/PropertyDetailsTabs/PropertyAdditionalInfo";
import { RootState } from "@/Redux/Store";

interface PropertyDetailsTabContentProps {
  tabId: string;
  setTabId: (id: string) => void;
}

const PropertyDetailsTabContent: FC<PropertyDetailsTabContentProps> = ({
  tabId,
  setTabId,
}) => {
  const handleNext = () => setTabId((parseInt(tabId) + 1).toString());

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
          <AdditionalInfo />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default PropertyDetailsTabContent;
