import { MenuItem } from "@/Types/LayoutTypes";

// Network Admin Menu
const NetworkAdminMenu: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        type: "link",
        badge: "1",
        lanClass: "lan-3",
        path: "/dashboard/network",
      },
      {
        title: "Cases",
        icon: "Pie",
        type: "sub",
        badge: "3",
        children: [
          {
            path: "/dashboard/network/cases",
            title: "All Case",
            type: "link",
          },
          {
            path: "/dashboard/network/activecase",
            title: "Active Case",
            type: "link",
          },
          {
            path: "/dashboard/network/closedcase",
            title: "Closed Case",
            type: "link",
          },
        ],
      },
      {
        title: "Directors",
        icon: "Profile",
        type: "sub",
        badge: "4",
        children: [
          {
            path: "/dashboard/network/directors/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/network/directors/clients",
            title: "Clients",
            type: "link",
          },
          {
            path: "/dashboard/network/directors/advisers",
            title: "Advisers",
            type: "link",
          },
          {
            path: "/dashboard/network/directors/introducers",
            title: "Introducers",
            type: "link",
          },
        ],
      },
      {
        title: "User Settings",
        type: "sub",
        icon: "Setting",
        badge: "4",
        lanClass: "lan-4",
        children: [
          {
            path: "/dashboard/network/usersettings/usermanagement",
            title: "User Management",
            type: "link",
          },
          {
            path: "/dashboard/network/usersettings/systemreports",
            title: "System Reports",
            type: "link",
          },
          {
            path: "/dashboard/network/usersettings/auditlog",
            title: "Audit Log",
            type: "link",
          },
          {
            path: "/dashboard/network/usersettings/securitypolicy",
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
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        type: "link",
        badge: "1",
        lanClass: "lan-3",
        path: "/dashboard/organisation",
      },
      {
        title: "Cases",
        icon: "Pie",
        type: "sub",
        badge: "3",
        children: [
          {
            path: "/dashboard/organisation/cases",
            title: "All Case",
            type: "link",
          },
          {
            path: "/dashboard/organisation/activecase",
            title: "Active Case",
            type: "link",
          },
          {
            path: "/dashboard/organisation/closedcase",
            title: "Closed Case",
            type: "link",
          },
        ],
      },
      {
        title: "Directors",
        icon: "Profile",
        type: "sub",
        badge: "4",
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
        badge: "3",
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
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Dashboard",
        icon: "Chart",
        badge: "4",
        lanClass: "lan-3",
        path: "/dashboard/orgadviser",
        type: "link",
      },
      {
        title: "Users",
        type: "sub",
        icon: "Profile",
        badge: "3",
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
        badge: "3",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgadviser/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/cases",
            title: "All Case",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/activecases",
            title: "Active Case",
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
    title: "Home",
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

// Lead Menu
const LeadMenu: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Client Home",
        icon: "Home-dashboard",
        type: "sub",
        badge: "1",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/client",
            title: "Dashboard",
            type: "link",
          },
        ],
      },
    ],
  },
];

// Export all menus
export {
  LeadMenu,
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
    case "LEAD":
      return LeadMenu;
    default:
      return [];
  }
};

export const MenuList = (role?: string) => getMenuByRole(role);
