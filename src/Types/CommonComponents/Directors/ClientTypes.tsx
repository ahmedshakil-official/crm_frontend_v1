export interface ClientInfoProps {
  alias: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
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
    user_type: string;
  };
  created_at: string;
}
export interface ClientsProps {
  clientsPerPage?: number;
}
export interface AddClientModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export interface ViewClientModalProps {
  isOpen: boolean;
  toggle: () => void;
  selectedClient: Partial<ClientInfoProps>;
}
export interface UpdateClientModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: (clientData: Partial<ClientInfoProps>) => void;
  selectedClient: Partial<ClientInfoProps>;
}
export interface DeleteClientModalProps {
  isOpen: boolean;
  toggle: () => void;
  clientName: string;
  clientAlias: string;
}
