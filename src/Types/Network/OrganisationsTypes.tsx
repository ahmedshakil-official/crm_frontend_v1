export interface SingleOrganisationsProps {
  organisationSlug?: string | undefined;
  organization: {
    slug?: string;
    name?: string;
    network?: string;
    email?: string;
    logo?: string | null;
    profile_image?: string | null;
    hero_image?: string | null;
    primary_mobile?: string;
    website?: string;
    other_contact?: string;
    contact_person?: string;
    description?: string;
  };
  counters: {
    total_cases?: number;
    total_leads?: number;
    total_clients?: number;
    total_advisers?: number;
    total_introducers?: number;
  };
}
export interface FetchSingleOrganisationProps {
  singleOrgInfo?: SingleOrganisationsProps | undefined;
  fetchsetOrganisationInfo?: any;
  isLoading?: boolean;
}
export interface AddOrganisationProps {
  [key: string]: string | File | null | boolean; // Allow any string key, with values being string, File, or null
  name: string;
  email: string;
  logo: File | null;
  profile_image: File | null;
  hero_image: File | null;
  primary_mobile: string;
  other_contact: string;
  contact_person: string;
  contact_person_designation: string;
  website: string;
  license_no: string;
  license_image: File | null;
  is_removed: boolean;
}

// Add OrganisationModal Props
export interface AddOrganisationModalProps {
  isOpen?: any;
  toggleModal?: any;
  refreshOrganisations?: any;
}
// delete organisation modal props
export interface DeleteOrganisationModalProps {
  isOpen: boolean;
  toggle: () => void;
  organisationInfo?: any;
}
// update organisation modal props
export interface UpdateOrganisationModalProps {
  isOpen: boolean;
  toggle: () => void;
  slug: string | undefined;
  organisationData?: any;
}

export interface AddEmployeeModalProps {
  isOpen: boolean;
  toggle: () => void;
}
