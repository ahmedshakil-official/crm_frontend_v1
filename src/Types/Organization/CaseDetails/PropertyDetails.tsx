export interface PropertyFormState {
  Properties: {
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
  };
}
