export interface OrganizationsProps {
  slug?: string;
  organizationSlug?: string | undefined;
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
export interface FetchSingleOrganizationProps {
  organizationInfo?: OrganizationsProps | undefined;
  fetchsetOrganizationInfo?: any;
  isLoading?: boolean;
}
export interface AddOrganizationProps {
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

// Add OrganizationModal Props
export interface AddOrganizationModalProps {
  isOpen?: any;
  toggleModal?: any;
  refreshOrganizations?: any;
}
// delete organization modal props
export interface DeleteOrganizationModalProps {
  isOpen: boolean;
  toggle: () => void;
  slug?: string;
  onDeleteSuccess: () => void;
}
// update organization modal props
export interface UpdateOrganizationModalProps {
  isOpen: boolean;
  toggle: () => void;
  slug: string | undefined;
  organizationData?: any; // Accept organization data as a prop
  onUpdateSuccess: () => void;
}
