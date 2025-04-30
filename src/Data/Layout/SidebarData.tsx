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
    title: "Components",
    Items: [
      {
        title: "Bonus-Ui",
        icon: "Ticket-star",
        id: 20,
        type: "sub",
        active: false,
        children: [
          { path: "/bonus_ui/scrollable", title: "Scrollable", type: "link" },
          { path: "/bonus_ui/tree_view", title: "Tree View", type: "link" },
          { path: "/bonus_ui/toasts", title: "Toasts", type: "link" },
          { path: "/bonus_ui/rating", title: "Rating", type: "link" },
          { path: "/bonus_ui/dropzone", title: "Dropzone", type: "link" },
          { path: "/bonus_ui/tour", title: "Tour", type: "link" },
          {
            path: "/bonus_ui/sweetalert_2",
            title: "SweetAlert2",
            type: "link",
          },
          {
            path: "/bonus_ui/reactstrap_carousel",
            title: "Reactstrap Carousel",
            type: "link",
          },
          { path: "/bonus_ui/ribbons", title: "Ribbons", type: "link" },
          { path: "/bonus_ui/pagination", title: "Pagination", type: "link" },
          { path: "/bonus_ui/breadcrumb", title: "Breadcrumb", type: "link" },
          {
            path: "/bonus_ui/range_slider",
            title: "Range Slider",
            type: "link",
          },
          {
            path: "/bonus_ui/image_cropper",
            title: "Image Cropper",
            type: "link",
          },
          { path: "/bonus_ui/basic_cards", title: "Basic Card", type: "link" },
          {
            path: "/bonus_ui/creative_cards",
            title: "Creative Card",
            type: "link",
          },
          { path: "/bonus_ui/timeline", title: "Timeline", type: "link" },
        ],
      },

      {
        title: "Icons",
        icon: "Activity",
        id: 21,
        type: "sub",
        active: false,
        children: [
          { path: `/icons/flag_icons`, title: "Flag Icon", type: "link" },
          {
            path: "/icons/font_awesome_icon",
            title: "Fontawesome Icon",
            type: "link",
          },
          { path: "/icons/feather_icon", title: "Feather Icon", type: "link" },
          {
            path: `/icons/iconly_sprite`,
            title: "Iconly Sprite",
            type: "link",
          },
          { path: "/icons/ico_icon", title: "Ico Icon", type: "link" },
          { path: "/icons/themify_icon", title: "Themify Icon", type: "link" },
          { path: `/icons/wheather_icon`, title: "Weather Icon", type: "link" },
        ],
      },
      {
        title: "Charts",
        icon: "Chart",
        type: "sub",
        id: 23,
        active: false,
        children: [
          { path: "/charts/apex_chart", type: "link", title: "Apex Chart" },
          { path: "/charts/google_chart", type: "link", title: "Google Chart" },
          {
            path: "/charts/chart_js_chart",
            type: "link",
            title: "Chart JS Chart",
          },
        ],
      },
    ],
  },
  {
    title: "Forms & Table",
    Items: [
      {
        title: "Forms",
        id: 17,
        icon: "Filter",
        type: "sub",
        active: false,
        children: [
          {
            title: "Form Controls",
            type: "sub",
            children: [
              {
                path: "/forms/form_controls/validation_form",
                title: "Form Validation",
                type: "link",
              },
              {
                path: "/forms/form_controls/base_input",
                title: "Base Inputs",
                type: "link",
              },
              {
                path: "/forms/form_controls/checkbox_radio",
                title: "Checkbox & Radio",
                type: "link",
              },
              {
                path: "/forms/form_controls/input_groups",
                title: "Input Groups",
                type: "link",
              },
              {
                path: "/forms/form_controls/input_mask",
                title: "Input Mask",
                type: "link",
              },
              {
                path: "/forms/form_controls/mega_option",
                title: "Mega Option",
                type: "link",
              },
            ],
          },
          {
            title: "Form Widget",
            type: "sub",
            children: [
              {
                path: "/forms/form_widget/datepicker",
                title: "Datepicker",
                type: "link",
              },
              {
                path: "/forms/form_widget/touchspin",
                title: "Touchspin",
                type: "link",
              },
              {
                path: "/forms/form_widget/switch",
                title: "Switch",
                type: "link",
              },
              {
                path: "/forms/form_widget/typeahead",
                title: "Typeahead",
                type: "link",
              },
              {
                path: "/forms/form_widget/clipboard",
                title: "Clipboard",
                type: "link",
              },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            children: [
              {
                path: "/forms/form_layout/form_wizard_1",
                title: "Form Wizard 1",
                type: "link",
              },
              {
                path: "/forms/form_layout/form_wizard_2",
                title: "Form Wizard 2",
                type: "link",
              },
              {
                path: "/forms/form_layout/two_factor",
                title: "Two Factor",
                type: "link",
              },
            ],
          },
        ],
      },

      {
        title: "Table",
        icon: "Edit-line",
        id: 18,
        type: "sub",
        children: [
          {
            title: "Reactstrap Tables",
            type: "sub",
            children: [
              {
                title: "Basic Tables",
                type: "link",
                path: "/table/reactstrap_table/basic_table",
              },
              {
                title: "Table Components",
                type: "link",
                path: "/table/reactstrap_table/table_component",
              },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            children: [
              {
                path: "/table/data_table/basic_init",
                title: "Basic Init",
                type: "link",
              },
              {
                path: "/table/data_table/advance_init",
                title: "Advance Init",
                type: "link",
              },
              { path: "/table/data_table/api", title: "API", type: "link" },
              {
                path: "/table/data_table/data_sources",
                title: "Data Source",
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    Items: [
      {
        icon: "Paper-plus",
        id: 24,
        active: false,
        path: "/pages/sample_page",
        title: "Sample Page",
        type: "link",
      },
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
