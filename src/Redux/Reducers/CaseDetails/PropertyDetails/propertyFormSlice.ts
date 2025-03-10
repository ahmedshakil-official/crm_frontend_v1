import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertyFormState {
  Properties: [{
    // Address
    postcode: string;
    houseNameOrNumber: string;
    address1: string;
    address2?: string;
    city: string;
    county?: string;

    // Property Type
    propertyType: string;
    houseType?: string;
    flatType?: string;
    constructionType: string;
    roofType: string;
    numberOfFloors: number;
    propertyAge?: number;
    epcRating?: string;
    tenure: string;
    leaseYears?: number;
    serviceCharge?: number;
    groundRent?: number;
    reinstatementCost?: number;
    bedrooms?: number;
    bathrooms?: number;
    receptionRooms?: number;
    kitchens?: number;
    garages?: number;
    parkingSpaces?: number;
    floor?: number;
    flats?: number;
    numberOfUnits?: number;

    // Additional Info
    isListedBuilding: boolean;
    listedBuildingStatus?: string;
    listedBuildingNotes?: string;
    ownFreehold: boolean;
    hasHMOLicense: boolean;
    isOwnerOccupied: boolean;
    isPropertyRentedOut: boolean;
    isStandardConstruction: boolean;
    hasCladding: boolean;
    isFloodRisk: boolean;
    hasFlooded: boolean;
    hasSubsidence: boolean;
    isInTrust: boolean;
    isNearCommercial: boolean;
    hasSolarPanels: boolean;
    ownsSolarPanels: boolean;
    hasAnnexe: boolean;
  }];
}

const initialState: PropertyFormState = {
  Properties: [{
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
  }]
};

const propertyFormSlice = createSlice({
  name: "propertyForm",
  initialState,
  reducers: {
    updateProperty: (state, action: PayloadAction<Partial<PropertyFormState['Properties'][0]>>) => {
      state.Properties[0] = { ...state.Properties[0], ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateProperty, resetForm } = propertyFormSlice.actions;
export default propertyFormSlice.reducer;
