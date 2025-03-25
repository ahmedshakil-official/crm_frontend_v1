import { FC, useEffect } from "react";
import { Button, TabContent, TabPane } from "reactstrap";
import AddressDetails from "./Components/PropertyDetailsTabs/PropertyAddress";
import PropertyDetails from "./Components/PropertyDetailsTabs/PropertyType";
import AdditionalInfo from "./Components/PropertyDetailsTabs/PropertyAdditionalInfo";
import { PropertyData } from "@/Types/Organization/CaseDetails/PropertyDetails";
import { useDispatch } from "react-redux";
import { initializeForm } from "@/Redux/Reducers/CaseDetails/PropertyDetails/propertyFormSlice";
import ValuationInfo from "./Components/PropertyDetailsTabs/PropertyValuation";

interface PropertyDetailsTabContentProps {
  tabId: string;
  setTabId: (id: string) => void;
  propertyData?: PropertyData;
}

const PropertyDetailsTabContent: FC<PropertyDetailsTabContentProps> = ({
  tabId,
  setTabId,
  propertyData,
}) => {
  const dispatch = useDispatch();
  const handleNext = () => setTabId((parseInt(tabId) + 1).toString());

  useEffect(() => {
    if (propertyData) {
      dispatch(initializeForm({ ...propertyData, other_new_build_warranty_provider: '' }));
    }
  }, [propertyData, dispatch]);

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
        <TabPane tabId="4">
          <ValuationInfo />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default PropertyDetailsTabContent;
