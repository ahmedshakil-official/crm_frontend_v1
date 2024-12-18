export interface JointUserProps {
  jointUserInfo?: any | undefined;
  fetchJointUserInfo?: any | undefined;
  isLoading?: boolean;
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
