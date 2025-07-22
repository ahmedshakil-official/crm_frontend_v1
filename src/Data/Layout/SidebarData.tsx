import { MenuItem } from "@/Types/LayoutTypes";

// Network Admin Menu
const NetworkAdminMenu: MenuItem[] = [
  {
    title: "Network",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/network",
      },
      {
        title: "Cases",
        icon: "Paper",
        type: "sub",
        children: [
          {
            path: "/dashboard/network/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/network/cases",
            title: "All Cases",
            type: "link",
          },
          {
            path: "/dashboard/network/activecases",
            title: "Active Cases",
            type: "link",
          },
          {
            path: "/dashboard/network/clients",
            title: "Clients",
            type: "link",
          },
        ],
      },
      {
        title: "Users",
        icon: "Profile",
        type: "sub",
        children: [
          {
            path: "/dashboard/network/organisations",
            title: "Organisations",
            type: "link",
          },
          {
            path: "/dashboard/network/registeredar",
            title: "Registered AR",
            type: "link",
          },
          {
            path: "/dashboard/network/introducers",
            title: "Introducers",
            type: "link",
          },
        ],
      },
      {
        title: "Reports & Tasks",
        type: "sub",
        icon: "Edit",
        lanClass: "lan-4",
        children: [
          {
            path: "/dashboard/network/usermanagement",
            title: "User Management",
            type: "link",
          },
          {
            path: "/dashboard/network/systemreports",
            title: "System Reports",
            type: "link",
          },
          {
            path: "/dashboard/network/auditlog",
            title: "Audit Log",
            type: "link",
          },
          {
            path: "/dashboard/network/securitypolicy",
            title: "Security Policy",
            type: "link",
          },
        ],
      },
    ],
  },
];

// OrganizationAdminMenu Menu
const OrganisationAdminMenu: MenuItem[] = [
  {
    title: "Organization",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/organisation",
      },
      {
        title: "Cases",
        icon: "Paper",
        type: "sub",
        children: [
          {
            path: "/dashboard/organisation/cases",
            title: "All Cases",
            type: "link",
          },
          {
            path: "/dashboard/organisation/activecases",
            title: "Active Cases",
            type: "link",
          },
        ],
      },
      {
        title: "Directors",
        icon: "Profile",
        type: "sub",
        children: [
          {
            path: "/dashboard/organisation/directors/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/organisation/directors/clients",
            title: "Clients",
            type: "link",
          },
          {
            path: "/dashboard/organisation/directors/advisers",
            title: "Advisers",
            type: "link",
          },
          {
            path: "/dashboard/organisation/directors/introducers",
            title: "Introducers",
            type: "link",
          },
          {
            path: "/dashboard/organisation/directors/supportstaff",
            title: "Support Staff",
            type: "link",
          },
        ],
      },
      {
        title: "User Settings",
        type: "sub",
        icon: "Setting",
        lanClass: "lan-4",
        children: [
          {
            path: "/dashboard/organisation/usersettings/usersandroles",
            title: "Users & Roles",
            type: "link",
          },
          {
            path: "/dashboard/organisation/usersettings/workflowsandintegrations",
            title: "Workflows & Integrations",
            type: "link",
          },
          {
            path: "/dashboard/organisation/usersettings/reportsandlogs",
            title: "Reports & Logs",
            type: "link",
          },
        ],
      },
    ],
  },
];

//Or Organisation adviser Menu
const OrganisationAdviserMenu: MenuItem[] = [
  {
    title: "Organisation Adviser",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        lanClass: "lan-3",
        path: "/dashboard/orgadviser",
        type: "link",
      },
      {
        title: "Users",
        type: "sub",
        icon: "Profile",
        lanClass: "lan-4",
        children: [
          {
            path: "/dashboard/orgadviser/reporting",
            title: "Reporting",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/marketinghub",
            title: "Marketing Hub",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/tasksandreminders",
            title: "Tasks & Reminders",
            type: "link",
          },
        ],
      },
      {
        title: "Cases",
        icon: "Paper",
        type: "sub",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgadviser/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/cases",
            title: "All Cases",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/activecases",
            title: "Active Cases",
            type: "link",
          },
        ],
      },
    ],
  },
];
//Or Organisation staff Menu
const OrganisationStaffMenu: MenuItem[] = [
  {
    title: "Org. Admin & Support Staff",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff",
      },
      {
        title: "Case Updates",
        icon: "Activity",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff/caseupdates",
      },
      {
        title: "Tasks & Reminders",
        icon: "Edit",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff/tasksandreminders",
      },
      {
        title: "Adviser Clients",
        icon: "Profile",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff/adviserclient",
      },
      {
        title: "Document Management",
        icon: "Paper",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff/documentmanagement",
      },
      {
        title: "Chat & Communication",
        icon: "Chat",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff/chatandcommunication",
      },
      {
        title: "Comments",
        icon: "Message",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/orgstaff/comments",
      },
    ],
  },
];

// CLIENT Menu
const ClientMenu: MenuItem[] = [
  {
    title: "Client",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard Home",
        icon: "Chart",
        type: "link",
        lanClass: "lan-3",
        path: "/dashboard/client",
      },
    ],
  },
];

// Export all menus
export {
  ClientMenu,
  NetworkAdminMenu,
  OrganisationAdminMenu,
  OrganisationAdviserMenu,
  OrganisationStaffMenu,
};

export const getMenuByRole = (role?: string): MenuItem[] => {
  switch (role) {
    case "NETWORK_ADMIN":
      return NetworkAdminMenu;
    case "ORGANIZATION_ADMIN":
      return OrganisationAdminMenu;
    case "ORGANIZATION_ADVISER":
      return OrganisationAdviserMenu;
    case "ORGANIZATION_SUPPORT":
      return OrganisationStaffMenu;
    case "CLIENT":
      return ClientMenu;
    default:
      return [];
  }
};

export const MenuList = (role?: string) => getMenuByRole(role);
