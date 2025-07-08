import { MenuItem } from "@/Types/LayoutTypes";

// Network Admin Menu
const NetworkAdminMenu: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Network",

        icon: "Home-dashboard",
        type: "sub",
        badge: "1",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/network",
            title: "Dashboard",
            type: "link",
            lanClass: "lan-4",
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
        title: "Organisation",

        icon: "Home-dashboard",
        type: "sub",
        badge: "1",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/organisation",
            title: "Dashboard",
            type: "sub",
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
        title: "Home",
        icon: "Home-dashboard",
        type: "sub",
        badge: "4",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgadviser",
            title: "Dashboard",
            type: "link",
          },
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
        title: "Directors",
        icon: "Profile",
        type: "sub",
        badge: "3",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgadviser/directors/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/directors/clients",
            title: "Clients",
            type: "link",
          },
          {
            path: "/dashboard/orgadviser/directors/introducers",
            title: "Introducers",
            type: "link",
          },
        ],
      },
      {
        title: "Cases",
        icon: "Pie",
        type: "sub",
        badge: "3",
        lanClass: "lan-3",
        children: [
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
          {
            path: "/dashboard/orgadviser/removedcases",
            title: "Removed Case",
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
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Home",
        icon: "Home-dashboard",
        type: "sub",
        badge: "4",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgstaff",
            title: "Dashboard",
            type: "link",
          },
          {
            path: "/dashboard/orgstaff/tasksandreminders",
            title: "Tasks & Reminders",
            type: "link",
          },
        ],
      },
      {
        title: "Directors",
        icon: "Profile",
        type: "sub",
        badge: "3",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgstaff/directors/leads",
            title: "Leads",
            type: "link",
          },
          {
            path: "/dashboard/orgstaff/directors/introducers",
            title: "Introducers",
            type: "link",
          },
        ],
      },
      {
        title: "Cases",
        icon: "Pie",
        type: "sub",
        badge: "3",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/orgstaff/cases",
            title: "All Case",
            type: "link",
          },
          {
            path: "/dashboard/orgstaff/activecases",
            title: "Active Case",
            type: "link",
          },
          {
            path: "/dashboard/orgstaff/removedcases",
            title: "Removed Case",
            type: "link",
          },
        ],
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
