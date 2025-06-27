export interface OrganisationsProps {
  slug?: string;
  organisationSlug?: string | undefined;
  network: {
    slug?: string;
    name?: string;
    email?: string;
    profile_image?: string;
    primary_mobile?: string;
  };
  name?: string;
  email?: string;
  logo?: string | null;
  profile_image?: string | null;
  hero_image?: string | null;
  primary_mobile?: string;
  other_contact?: string;
  contact_person?: string;
  contact_person_designation?: string;
  website?: string;
  license_no?: string;
  license_image?: string | null;
  location?: string;
  is_removed?: boolean;
  is_approved?: boolean;
  is_active?: boolean;
  is_staff?: boolean;
}
export interface FetchSingleOrganisationProps {
  organisationInfo?: OrganisationsProps | undefined;
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
