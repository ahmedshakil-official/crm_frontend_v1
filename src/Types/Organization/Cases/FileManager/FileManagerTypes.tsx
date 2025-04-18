export interface FileUploadModalProps {
  isOpen: boolean;
  toggle: () => void;
  handleFileUpload?: any;
}

export interface FileOwnerProps {
  id: number;
  first_name: string;
  last_name: string;
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
export interface FileDeleteModalProps {
  isOpen?: boolean;
  toggle?: () => void;
  file?: { name?: string; file_type?: string };
  case_alias?: string;
  fileAlias?: string;
}
