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
export interface FileUploadModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
  handleFileUpload?: any;
}
export interface FileOwnerProps {
  lead_user: {
    id: number;
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    profile_image: string | null;
    user_type: string;
  };
  joint_users: {
    joint_user: {
      id: number;
      email: string;
      phone: string;
      first_name: string;
      last_name: string;
      profile_image: string | null;
      user_type: string;
    };
    relationship: string;
    notes: string;
    is_removed: boolean;
  }[];
}

export interface CaseFileProps {
  alias: string;
  file?: string;
  file_type?: string;
  file_owner_info: {
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    profile_image?: string;
    user_type?: string;
  };
  name?: string;
  description?: string;
  special_notes?: string;
  created_by: {
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    profile_image?: string;
    user_type?: string;
  };
  updated_by: {
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    profile_image?: string;
    user_type?: string;
  };
  created_at: string;
  updated_at: string;
}
