import { PropertyFormState } from "@/Types/Organization/CaseDetails/PropertyDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PropertyFormState = {
  Properties: {
    // Address
    postcode: "",
    houseNameOrNumber: "",
    address1: "",
    address2: "",
    city: "",
    county: "",

    // Property Type
    propertyType: "",
    constructionType: "",
    roofType: "",
    numberOfFloors: 0,
    tenure: "",

    // Additional Info
    isListedBuilding: false,
    ownFreehold: false,
    hasHMOLicense: false,
    isOwnerOccupied: false,
    isPropertyRentedOut: false,
    isStandardConstruction: false,
    hasCladding: false,
    isFloodRisk: false,
    hasFlooded: false,
    hasSubsidence: false,
    isInTrust: false,
    isNearCommercial: false,
    hasSolarPanels: false,
    ownsSolarPanels: false,
    hasAnnexe: false,
  },
};

const propertyFormSlice = createSlice({
  name: "propertyForm",
  initialState,
  reducers: {
    updateProperty: (
      state,
      action: PayloadAction<Partial<PropertyFormState["Properties"]>>
    ) => {
      state.Properties = { ...state.Properties, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateProperty, resetForm } = propertyFormSlice.actions;
export default propertyFormSlice.reducer;
