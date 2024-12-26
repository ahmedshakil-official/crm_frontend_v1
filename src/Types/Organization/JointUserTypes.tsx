export interface JointUserProps {
  jointUserInfo?: any | undefined;
  fetchJointUserInfo?: any | undefined;
  isLoading?: boolean;
  alias?: string;
  joint_user_details?: {
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    profile_image?: string;
    user_type?: string;
  };
  relationship?: string;
}
export interface AddJointUserModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
  handleFileUpload?: any;
}
export interface UpdateJointUserModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
  // alias?: any;
  user: any;
}
export interface JointUserDeleteModalProps {
  isOpen: boolean;
  toggle: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
  selectedUser?: any;
}
