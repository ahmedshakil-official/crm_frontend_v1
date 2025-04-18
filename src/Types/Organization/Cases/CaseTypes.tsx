export interface CaseInfo {
  alias: string;
  lead: number;
  name: string;
  lead_user: {
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    profile_image: string;
    user_type: string;
  };
  case_category: string;
  applicant_type: string;
  case_status: string;
  case_stage: string;
  notes: string;
  is_removed: boolean;
  created_at: string;
  created_by: {
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    profile_image: null;
    user_type: string;
  };
  updated_by: {
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    profile_image: null;
    user_type: string;
  };
  caseData?: any;
}
export interface SingleCaseProps {
  caseInfo: CaseInfo | undefined;
  isLoading: boolean;
}
export interface CaseSearchProps {
  fetchCaseInfo?: any;
  searchQuery?: any;
  setSearchQuery?: any;
}

export interface AddNewCaseModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export interface UpdateCaseModalProps {
  isOpen: boolean;
  toggle: () => void;
  caseData: CaseInfo;
}
export interface DeleteCaseModalProps {
  isOpen: boolean;
  toggle: () => void;
  caseData: CaseInfo | null; // The case to delete
  onDelete: () => void; // Callback to handle deletion
  isDeleting?: any;
}
