export interface IntroducerInfoProps {
  alias: string;
  user: {
    first_name: string;
    last_name: string;
    profile_image: string;
    nid: string;
    user_type: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
  role: string;
  designation: string;
  official_email: string;
  official_phone: string;
  permanent_address: string;
  present_address: string;
  dob: string;
  gender: string;
  joining_date: string;
  registration_number: string;
  degree: string;
  created_by: {
    first_name: string;
    last_name: string;
  };
  created_at: string;
}
export interface AddIntroducerModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
}
export interface UpdateIntroducerModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: (introducerData: Partial<IntroducerInfoProps>) => void;
  selectedIntroducer: Partial<IntroducerInfoProps>;
  fetchIntroducers?: any;
}
export interface DeleteIntroducerModalProps {
  isOpen: boolean;
  toggle: () => void;
  onDelete: () => void;
  introducerName: string;
  isDeleting?: any;
}
