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
        id: 1,
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
        badge: "3",
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

// Advisor Menu
const AdvisorMenu: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    type: "group",
    Items: [
      {
        title: "Organisation",
        id: 1,
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
        title: "Dashboards",
        id: 1,
        icon: "Home-dashboard",
        type: "sub",
        badge: "1",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/client",
            title: "Main Menu",
            type: "link",
          },
        ],
      },
    ],
  },
];

// Function to get menu based on role
export const getMenuByRole = (role?: string): MenuItem[] => {
  switch (role) {
    case "NETWORK_ADMIN":
      return NetworkAdminMenu;
    case "ADVISOR":
      return AdvisorMenu;
    case "LEAD":
      return LeadMenu;
    default:
      return [];
  }
};

// Export the legacy MenuList for backward compatibility
export const MenuList = NetworkAdminMenu;

// Export the role-specific menus if needed elsewhere
export { AdvisorMenu, LeadMenu, NetworkAdminMenu };
