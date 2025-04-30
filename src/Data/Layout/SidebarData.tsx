import { MenuItem } from "@/Types/LayoutTypes";

export const UserListData = [
  {
    icon: "Profile",
    text: "Account",
    href: "/users/user_profile",
  },
  {
    icon: "Message",
    text: "Inbox",
    href: "/app/letter_box",
  },
  {
    icon: "Document",
    text: "Task",
    href: "/app/todo",
  },
  {
    icon: "Edit",
    text: "Add User",
    href: "/others/authentication/registersimple",
  },
];

export const MenuList: MenuItem[] | undefined = [
  {
    title: "General",
    lanClass: "lan-1",
    Items: [
      {
        title: "Dashboards",
        id: 1,
        icon: "Home-dashboard",
        type: "sub",
        badge: "5",
        lanClass: "lan-3",
        children: [
          {
            path: "/dashboard/default",
            title: "Default",
            type: "link",
            lanClass: "lan-4",
          },
          // { path: "/dashboard/organization", title: "Organization", type: "link", lanClass: "lan-4" },
          {
            title: "Organization",
            type: "link",
            children: [
              {
                path: "/dashboard/organization",
                title: "My Organization",
                type: "link",
              },
              {
                path: "/dashboard/organization/allcase",
                title: "Cases",
                type: "link",
                children: [
                  {
                    path: "/dashboard/organization/allcase",
                    title: "All Case",
                    type: "link",
                  },
                  {
                    path: "/dashboard/organization/activecase",
                    title: "Active Case",
                    type: "link",
                  },
                  {
                    path: "/dashboard/organization/closedcase",
                    title: "Closed Case",
                    type: "link",
                  },
                ],
              },
            ],
          },
          {
            path: "/dashboard/network",
            title: "Network",
            type: "link",
            lanClass: "lan-4",
          },
          { path: "/dashboard/education", title: "Education", type: "link" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    Items: [
      {
        title: "Others",
        icon: "Password",
        id: 25,
        type: "sub",
        children: [
          {
            title: "Error Pages",
            type: "sub",
            children: [
              {
                path: "/others/error_pages/error_page1",
                title: "Error Page 1",
                type: "link",
              },
              {
                path: "/others/error_pages/error_page2",
                title: "Error Page 2",
                type: "link",
              },
              {
                path: "/others/error_pages/error_page3",
                title: "Error Page 3",
                type: "link",
              },
              {
                path: "/others/error_pages/error_page4",
                title: "Error Page 4",
                type: "link",
              },
              {
                path: "/others/error_pages/error_page5",
                title: "Error Page 5",
                type: "link",
              },
              {
                path: "/others/error_pages/error_page6",
                title: "Error Page 6",
                type: "link",
              },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            children: [
              {
                path: "/others/authentication/loginsimple",
                title: "Login Simple",
                type: "link",
              },
              {
                path: "/others/authentication/loginbgimage",
                title: "Login With Bg Image",
                type: "link",
              },
              {
                path: "/others/authentication/loginbgimagetwo",
                title: "Login With Image Two",
                type: "link",
              },
              {
                path: "/others/authentication/loginvalidation",
                title: "Login With Validation",
                type: "link",
              },
              {
                path: "/others/authentication/logintooltip",
                title: "Login With Tooltip",
                type: "link",
              },
              {
                path: "/others/authentication/loginsweetalert",
                title: "Login With Sweetalert",
                type: "link",
              },
              {
                path: "/others/authentication/registersimple",
                title: "Register Simple",
                type: "link",
              },
              {
                path: "/others/authentication/registerbgimage",
                title: "Register With Bg Image",
                type: "link",
              },
              {
                path: "/others/authentication/registerbgimagetwo",
                title: "Register With Bg Two",
                type: "link",
              },
              {
                path: "/others/authentication/registerwizard",
                title: "Register Wizard",
                type: "link",
              },
              {
                path: "/others/authentication/unlockuser",
                title: "Unlock User",
                type: "link",
              },
              {
                path: "/others/authentication/forgetpassword",
                title: "Forget Password",
                type: "link",
              },
              {
                path: "/others/authentication/createpassword",
                title: "Reset Password",
                type: "link",
              },
              {
                path: "/others/authentication/maintenance",
                title: "Maintenance",
                type: "link",
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            children: [
              {
                path: "/others/coming_soon/comingsoonsimple",
                title: "Coming Simple",
                type: "link",
              },
              {
                path: "/others/coming_soon/comingbgvideo",
                title: "Coming With Bg Video",
                type: "link",
              },
              {
                path: "/others/coming_soon/comingbgimg",
                title: "Coming With Bg Image",
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    Items: [
      {
        title: "Gallery",
        icon: "Gallery",
        id: 26,
        type: "sub",
        active: false,
        children: [
          {
            path: "/gallery/gallery_grids",
            title: "Gallery Grids",
            type: "link",
          },
          {
            path: "/gallery/gallery_grid_with_description",
            title: "Gallery Grid Desc",
            type: "link",
          },
          {
            path: "/gallery/masonry_gallery",
            title: "Masonry Gallery",
            type: "link",
          },
          {
            path: "/gallery/masonry_gallery_with_description",
            title: "Masonry With Desc",
            type: "link",
          },
          {
            path: "/gallery/hover_effect",
            title: "Hover Effect",
            type: "link",
          },
        ],
      },

      {
        title: "Blog",
        icon: "Game",
        id: 27,
        type: "sub",
        active: false,
        children: [
          { path: "/blog/blog_details", title: "Blog Details", type: "link" },
          { path: "/blog/blog_single", title: "Blog Single", type: "link" },
          { path: "/blog/add_post", title: "Add Post", type: "link" },
        ],
      },
      {
        path: "/miscellaneous/faq",
        icon: "Danger",
        type: "link",
        active: false,
        title: "FAQ",
      },
      {
        title: "Job Search",
        icon: "Filter-2",
        id: 28,
        type: "sub",
        active: false,
        children: [
          { path: "/job_search/card_view", title: "Cards View", type: "link" },
          { path: "/job_search/list_view", title: "List View", type: "link" },
          { path: "/job_search/job_detail", title: "Job Detail", type: "link" },
          { path: "/job_search/apply", title: "Apply", type: "link" },
        ],
      },
      {
        title: "Learning",
        icon: "Work",
        id: 29,
        type: "sub",
        active: false,
        children: [
          {
            path: "/learning/learning_list",
            title: "Learning List",
            type: "link",
          },
          {
            path: "/learning/detailed_course",
            title: "Detailed Course",
            type: "link",
          },
        ],
      },
      {
        title: "Maps",
        icon: "Discovery",
        type: "sub",
        id: 30,
        active: false,
        children: [
          { path: "/map/google_map", type: "link", title: "Google Map" },
          { path: "/map/leaflet_map", type: "link", title: "Leaflet Map" },
        ],
      },
      {
        title: "Editors",
        id: 31,
        icon: "Shield",
        type: "sub",
        active: false,
        children: [
          { path: "/editor/quill_editor", type: "link", title: "Quill Editor" },
          {
            path: "/editor/ace_editor",
            type: "link",
            title: "ACE Code Editor",
          },
        ],
      },

      {
        id: 32,
        path: "/miscellaneous/knowledgebase",
        icon: "Setting",
        type: "link",
        active: false,
        title: "Knowledgebase",
      },
      {
        id: 33,
        path: "/miscellaneous/support_ticket",
        icon: "Ticket",
        type: "link",
        active: false,
        title: "Support Ticket",
      },
    ],
  },
];
