import { CheckboxGroup, FormDataTypes, FormValidationProp, InlineInputType } from "@/Types/FormType";
import { Bell, Calendar, Mail, Tag } from "react-feather";
import * as Yup from "yup";

//form-validation
export const TooltipFormValidationSubTitle = [{ text: "If your form layout allows it, you can swap the", code: `.{valid|invalid}` }, { text: "-feedback classes for" }];

export const TooltipInitialValue: FormDataTypes = { firstName: "", lastName: "", username: "", city: "", state: "", zip: "" };

export const TooltipValidationStateList = ["U.K", "India", "Thailand", "Newyork"];

export const TooltipValidationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required(),
  lastName: Yup.string().min(2).required(),
  username: Yup.string().min(2).required(),
  city: Yup.string().min(2).required(),
  state: Yup.string().min(2).required(),
  zip: Yup.string().min(2).required(),
});

export const ValidationFormInitialValue: FormValidationProp = { firstName: "", password: "", state: "", city: "", zip: "", payment: "", theme: "", file: "", description: "", terms: [] };

export const FormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your valid"),
  password: Yup.string().required("Please enter your valid password"),
  state: Yup.string().required("Please select a valid state."),
  city: Yup.string().required("Please provide a valid city."),
  zip: Yup.string().required("Please provide a valid zip."),
  payment: Yup.string().required(),
  theme: Yup.string().required("Invalid select feedback"),
  file: Yup.string().required("Invalid form file selected"),
  description: Yup.string().required("Please enter a message in the textarea."),
  terms: Yup.array().min(1),
});

export const BrowserDefaultsSubTitle = [{ text: `Not interested in custom validation feedback messages or writing JavaScript to change form behaviors?` }];

export const ValidationFormSubTitle = [{ text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback." }];

export const Options = [
  { value: "us", label: "U.S" },
  { value: "thailand", label: "Thailand" },
  { value: "india", label: "India" },
  { value: "uk", label: "U.K" },
];

export const ValidationRadioList = [
  { id: 1, text: "MasterCard" },
  { id: 2, text: "Visa" },
];

//base-input
export const BasicFormSubTitle = [{ text: "Use the", code: `.form-label ` }, { text: "and", code: `.form-control ` }, { text: "through create basic form." }];

export const FloatingFormSubTitle = [{ text: "Use the", code: `.form-floating` }, { text: " through create floating form." }];

export const SelectSizingSubTitle = [{ code: ".form-select" }, { text: "to trigger the custom styles" }];

export const FormControlSizingSubTitle = [
  { text: `Set heights using classes like`, code: ".form-control-lg" },
  { code: `.form-control-sm`, text: `and` },
];

export const EdgesInputStyleSubTitle = [{ text: `Give textual form controls like `, code: ` <input>` }, { text: `s and` }];

export const FlatStyleSubTitle = [
  { text: "Set heights using classes like ", code: ".form-control-lg" },
  { text: " and ", code: ".form-control-sm ." },
];

//checkbox & radios
export const DefaultCheckBoxSubTitle = [{ text: `Use the`, code: `.form-check-input  ` }, { text: `and`, code: `.form-check-label ` }, { text: "for checkbox." }];

export const DefaultRadioSubTitle = [{ text: `Use the`, code: `.form-check-input ` }, { text: `and`, code: `.form-check-label ` }, { text: "for radios." }];

export const CustomCheckBoxSubTitle = [{ text: `Use the`, code: `.form-check-input  ` }, { text: `and`, code: `.form-check-label ` }, { text: "for checkbox. And filled checkbox used" }];

export const ImagesWithCheckBoxSubTitle = [{ code: `.form-check-input  `, text: `Use the` }, { text: `and`, code: `.form-check-label ` }, { text: "for image checkbox." }];

export const ImagesWithRadioBoxSubTitle = [{ code: `.form-check-input  `, text: `Use the` }, { text: `and`, code: `.form-check-label ` }, { text: "for image radio." }];

export const CustomRadioBoxSubTitle = [{ code: `.form-check-input  `, text: `Use the` }, { text: `and`, code: `.form-check-label ` }, { text: "for radios." }];

export const DefaultSwitchesSubTitle = [{ code: `.form-switch`, text: `Use the` }, { text: `and`, code: `.form-check-label ` }, { text: "for switches." }];

export const InlineInputTypesSubTitle = [
  { code: ` .form-check-inline `, text: `Group checkboxes or radios on the same horizontal row by adding` },
  { text: `to any`, code: ` .form-check .` },
];

export const AnimatedButtonsSubTitle = [{ code: `.radio_animated `, text: `Use the` }, { text: `through animated checkbox and radios.` }];

export const BasicRadioAndCheckBoxSubTitle = [{ code: `.form-check-inline `, text: `Use the` }, { text: `through display inline.` }];

export const RadioToggleButtonsSubTitle = [{ text: "The choice between these two approaches will depend on the type of toggle you are creating." }];

export const DefaultCheckboxData: CheckboxGroup[] = [
  {
    id: 1,
    title: "Default Checks",
    child: [
      { id: "10", labelText: "Default checkbox" },
      { id: "11", labelText: "Checked checkbox", check: "checked" },
    ],
  },
  {
    id: 2,
    title: "Disabled Checks",
    child: [
      { id: "12", labelText: "Disabled checkbox", disabled: "disabled" },
      { id: "13", labelText: "Disabled Checked checkbox", check: "checked", disabled: "disabled" },
    ],
  },
  {
    id: 3,
    title: "Right Checks",
    child: [
      { id: "14", groupClass: "form-check-reverse", labelText: "Reverse checkbox" },
      { id: "15", groupClass: "form-check-reverse", labelText: "Disabled reverse checkbox", check: "checked", disabled: "disabled" },
    ],
  },
];

export const DefaultRadioData: CheckboxGroup[] = [
  {
    id: 1,
    title: "Custom Radios",
    child: [
      { id: "Default1", labelText: "Default radio", name: "flexRadioDefault" },
      { id: "Default2", labelText: "Default checked radio", check: "checked", name: "flexRadioDefault" },
    ],
  },
  {
    id: 2,
    title: "Disabled Radios",
    child: [
      { id: "Disabled", labelText: "Disabled radio", disabled: "disabled", name: "flexRadioDisabled" },
      { id: "CheckedDisabled", labelText: "Disabled Checked radio", check: "checked", disabled: "disabled", name: "flexRadioDisabled" },
    ],
  },
  {
    id: 3,
    title: "Right Radios",
    child: [
      { id: "Default3", groupClass: "form-check-reverse", labelText: "Default radio", name: "flexRadioDefault" },
      { id: "CheckedDisabled1", groupClass: "form-check-reverse", labelText: "Disabled checked radio", check: "checked", disabled: "disabled", name: "flexRadioDefault" },
    ],
  },
];

export const IconCheckboxData = [
  { id: "1", icon: "fa-solid fa-sliders", text: "Sliders" },
  { id: "2", icon: "fa-solid fa-user", text: "User", check: "checked" },
  { id: "3", icon: "fa-solid fa-tag", text: "Tags" },
  { id: "4", icon: "fa-brands fa-android", text: "Android" },
  { id: "5", icon: "fa-regular fa-eye-slash", text: "Hidden" },
  { id: "6", icon: "fa-regular fa-folder-open", text: "Folder" },
  { id: "7", icon: "fa-solid fa-paper-plane", text: "Send" },
  { id: "8", icon: "fa-solid fa-cloud-arrow-up", text: "Upload" },
];

export const ImageWithCheckboxData = [
  { id: 1, title: "Custom", image: "1.jpg" },
  { id: 2, title: "Checked Image", image: "2.jpg", check: "checked" },
  { id: 3, title: "Disable Image", image: "3.jpg", disabled: "disabled" },
  { id: 4, title: "Disable Checked Image", image: "4.jpg", disabled: "disabled", check: "checked" },
];

export const ImageWithRadioData = [
  { id: 1, title: "Custom", image: "5.jpg" },
  { id: 2, title: "Checked Image", image: "6.jpg", check: "checked" },
  { id: 3, title: "Disable Image", image: "7.jpg", disabled: "disabled" },
  { id: 4, title: "Disable Checked Image", image: "8.jpg", disabled: "disabled", check: "checked" },
];

export const BorderedRadioData = [
  { id: 1, color: "secondary", check: "checked", text: "Koho Theme" },
  { id: 2, color: "success", text: "Roxo Theme" },
  { id: 3, color: "danger", text: "Voxo Theme" },
  { id: 4, color: "info", text: "Zeta Theme" },
];

export const IconRadioData = [
  { id: "1", icon: "fa-solid fa-sliders", text: "Sliders" },
  { id: "2", icon: "fa-solid fa-eye-slash", text: "Hidden", check: "checked" },
  { id: "3", icon: "fa-regular fa-folder-open", text: "Folder" },
  { id: "4", icon: "fa-solid fa-paper-plane", text: "Send" },
  { id: "5", icon: "fa-solid fa-user", text: "User" },
  { id: "6", icon: "fa-solid fa-trash", text: "Trash" },
  { id: "7", icon: "fa-brands fa-github", text: "github" },
  { id: "8", icon: "fa-solid fa-circle-play", text: "Play" },
];

export const FilledRadioData = [
  { id: 11, color: "primary", check: "checked", text: "Product" },
  { id: 12, color: "danger", text: "Order history" },
  { id: 13, color: "warning", text: "Invoice" },
  { id: 14, color: "secondary", text: "Wishlist" },
];

export const DefaultSwitchesData: CheckboxGroup[] = [
  {
    id: 1,
    title: "Custom Switches",
    child: [
      { id: "11", labelText: "Default switch checkbox input" },
      { id: "12", labelText: "Checked switch checkbox input", check: "checked" },
    ],
  },
  {
    id: 2,
    title: "Disabled Switches",
    child: [
      { id: "21", labelText: "Disabled switch checkbox input", disabled: "disabled" },
      { id: "22", labelText: "Disabled checked switch checkbox input", check: "checked", disabled: "disabled" },
    ],
  },
  {
    id: 3,
    title: "Right Switches",
    child: [
      { id: "31", groupClass: "form-check-reverse", labelText: "Reverse switch checkbox input" },
      { id: "32", groupClass: "form-check-reverse", labelText: "Disabled switch checkbox input", disabled: "disabled" },
    ],
  },
];

export const InlineInputTypesData: InlineInputType[] = [
  {
    id: 1,
    title: "Inline Checkbox",
    child: [
      { id: 11, type: "checkbox", check: "checked", text: "I" },
      { id: 12, type: "checkbox", text: "II" },
      { id: 13, disabled: "disabled", type: "checkbox", text: "III (disabled)" },
    ],
  },
  {
    id: 2,
    title: "Inline Radios",
    child: [
      { id: 14, type: "radio", check: "checked", name: "inlineRadioOptions", text: "1" },
      { id: 15, type: "radio", name: "inlineRadioOptions", text: "2" },
      { id: 16, type: "radio", name: "inlineRadioOptions", disabled: "disabled", text: "3 (disabled)" },
    ],
  },
];

export const AnimatedButtonsData: InlineInputType[] = [
  {
    id: 1,
    title: "Select your payment method",
    child: [
      { id: 11, type: "radio", name: "rdo-ani", text: "Visa" },
      { id: 12, type: "radio", name: "rdo-ani", text: "MasterCard" },
      { id: 13, type: "radio", name: "rdo-ani", check: "checked", text: "Paypal" },
      { id: 14, type: "radio", name: "rdo-ani", text: "G-pay" },
      { id: 15, type: "radio", name: "rdo-ani", text: "Bitpay" },
    ],
  },
  {
    id: 2,
    title: "What is your favorite social media?",
    child: [
      { id: 21, type: "checkbox", text: "Instagram" },
      { id: 22, type: "checkbox", text: "Facebook" },
      { id: 23, type: "checkbox", check: "checked", text: "Whatsapp" },
      { id: 24, type: "checkbox", text: "Twitter" },
    ],
  },
];

export const BasicCheckboxRadioData: InlineInputType[] = [
  {
    id: 1,
    divClass: "checkbox-radio",
    title: "Simple Checkbox",
    child: [
      { id: 11, formGroupClass: "checkbox checkbox-dark mb-0", text: "Blog", type: "checkbox" },
      { id: 12, formGroupClass: "checkbox checkbox-dark mb-0", text: "Gallery", check: "checked", type: "checkbox" },
      { id: 13, formGroupClass: "checkbox checkbox-dark mb-0", text: "Faq", type: "checkbox" },
      { id: 14, formGroupClass: "checkbox checkbox-dark mb-0", text: "Email", type: "checkbox" },
      { id: 15, formGroupClass: "checkbox checkbox-dark mb-0", text: "Icons", type: "checkbox" },
    ],
  },
  {
    id: 2,
    title: "Simple Radios",
    divClass: "simple-radios",
    child: [
      { id: 21, formGroupClass: "radio radio-primary", check: "checked", text: "Maps", type: "radio", name: "radio5" },
      { id: 22, formGroupClass: "radio radio-primary", text: "Tasks", type: "radio", name: "radio5" },
      { id: 23, formGroupClass: "radio radio-primary", text: "To-do", type: "radio", name: "radio5" },
      { id: 24, formGroupClass: "radio radio-primary", text: "Forms", type: "radio", name: "radio5" },
      { id: 25, formGroupClass: "radio radio-primary", text: "Login", type: "radio", name: "radio5" },
    ],
  },
];

//Input groups
export const ButtonAddonsSubTitle = [{ text: "Multiple add-ons are supported and can be mixed with buttons input versions." }];

export const CustomFormsSubTitle = [{ text: "Input groups include support for", code: "custom selects and custom file inputs" }];

export const CustomFileInputSubTitle = [{ text: "Input groups include support for custom selects and custom", code: "file uploads" }];

export const ButtonsWithDropdownSubTitle = [
  { text: "Use the", code: ".input-group " },
  { text: "and", code: `[aria-label='']` },
];

export const SegmentedButtonsSubTitle = [{ text: "Multiple add-ons are supported and can be mixed with", code: " dropdowns " }, { text: "versions." }];

export const CheckBoxesAndRadiosSubTitle = [{ text: "Place any checkbox or radio option within an input group's addon instead of text. We recommend adding", code: ".mt-0" }];

export const SizingSubTitle = [{ text: "Add the relative form sizing classes to the", code: " .input-group" }];

export const MultipleInputsSubTitle = [{ text: "While multiple", code: `<input>` }];

export const BasicInputGroupsSubTitle = [{ text: "Place one add-on or button on either side of an input. ", code: `<label>` }, { text: "s outside the input group." }];

export const VarationOfAddonsSubTitle = [{ text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. ", code: `<label>` }, { text: "s outside the input group." }];

export const PixelstrapSelectList = ["Tivo", "CRM", "Roxo"];
export const FavoriteColorsData = ["Yellow", "Red", "Orange"];
export const FavoriteChocolatesData = ["Dark Chocolates", "Dairy Milk", "Kitkat"];
export const FavoriteThemesData = ["Oslo", "Koho", "Voxo"];
export const ButtonDropdownData1 = ["Ecommerce", "Email", "Users", "Bookmarks"];
export const ButtonDropdownData2 = ["Starter kit", "Gallery", "Blog", "Maps"];
export const ButtonDropdownData3 = ["Widgets", "Project", "Contacts", "Tasks"];
export const ButtonDropdownData4 = ["To-Do", "FAQ", "Knowledgebase", "Support Ticket"];
export const SegmentedButtonsData1 = ["Learning", "Editors", "Users", "Social App"];
export const SegmentedButtonsData2 = ["Search Result", "Tasks", "Projects", "Animation"];

//input-mask
export const InputMasksSubTitle = [{ text: "Input mask used in form-validations,forms,card-details,and etc." }];

//mega-options
export const VariationRadioData = [{ text: "Use the ", code: "radio " }, { text: "attribute through create variation of radio designs." }];

export const VariationRadioDataList = [
  {
    colClass: "col-md-6",
    title: "Select your payment method",
    child: [
      { id: 1, labelText: "BOB", image: "ecommerce/card.png", name: "radio1" },
      { id: 2, labelText: "MasterCard", image: "ecommerce/mastercard.png", check: "checked", name: "radio1", defaultChecked: true },
      { id: 3, labelText: "Paypal", image: "ecommerce/paypal.png", name: "radio1" },
      { id: 4, labelText: "VISA", image: "ecommerce/visa.png", name: "radio1" },
    ],
  },
  {
    colClass: "col-md-6",
    title: "What are the most important things to learn about web design?",
    child: [
      { id: 5, labelText: "A. HTML", name: "radio2" },
      { id: 6, labelText: "B. CSS", name: "radio2" },
      { id: 7, labelText: "C. Javascript", defaultChecked: true, name: "radio2" },
      { id: 8, labelText: "D. Above the all", name: "radio2" },
    ],
  },
  {
    title: "Radios With Creative Options & SVG Icons",
    child: [
      { id: 9, labelText: "The notification icon displayed new messages.", icon: <Bell className="mega-icons stroke-danger" />, iconColor: "danger", name: "radio3" },
      { id: 10, labelText: "The download icon indicated completion.", icon: <Calendar className="mega-icons stroke-success" />, iconColor: "success", name: "radio3" },
      { id: 11, labelText: "The tag icon allowed easy categorization.", icon: <Tag className="mega-icons stroke-dark" />, iconColor: "stroke-dark", check: "checked", name: "radio3", defaultChecked: true },
      { id: 12, labelText: "The email icon was inaccessibly located.", icon: <Mail className="mega-icons stroke-primary" />, iconColor: "primary", name: "radio3" },
    ],
  },
];

export const VariationCheckboxData = [{ text: "We can create any creative design by using ", code: "(type='checkbox')" }, { text: "attribute." }];

export const VariationCheckboxDataList = [
  { id: 1, color: "success", labelText: "Reading" },
  { id: 2, color: "success", labelText: "Watching TV", check: true },
  { id: 3, color: "danger", labelText: "Listening to music" },
  { id: 4, color: "danger", labelText: "Playing video games" },
  { id: 5, color: "success", labelText: "Painting/Drawing" },
];

export const UpgradeVariationData = [
  { id: 1, text: "Voxo", sales: "270 Sales" },
  { id: 2, text: "Cuba", sales: "4.8K Sales" },
  { id: 3, text: "Multikart", sales: "2.6k Sales" },
  { id: 4, text: "Viho", sales: "2k Sales", check: true },
];

export const MegaOptionDefaultData = [
  {
    text: "This option is show by default you don't need to add any extra class.",
  },
];

export const DefaultFormData = [
  { id: 1, color: "primary", badgeTitle: "COD", digits: "50 INR", shipingText: "Estimated 2 Day Shipping ( Duties end tax may be due delivery )" },
  { id: 2, color: "secondary", badgeTitle: "Fast", digits: "100 INR", shipingText: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )" },
];

export const WithoutBorderData = [{ text: "By adding ", code: ".plain-style " }, { text: "class to", code: " .mega-inline" }, { text: "you can archive this style." }];

export const WithoutBorderDataList = [
  { id: 1, color: "warning", badgeTitle: "$39", digits: "100 MBPS", plansText: "Plans for 2/4/6 months are offered to new clients.", check: true },
  { id: 2, color: "info", badgeTitle: "$50", digits: "Hired", plansText: "Plans for 2 years projects offered to new clients." },
];

export const SolidBorderStyleData = [
  {
    text: "Use the ",
    code: ".offer-style ",
  },
  {
    text: "class to",
    code: " .mega-inline",
  },
  {
    text: "you can archive this style.",
  },
];

export const SolidBorderStyleDataList = [
  { id: 1, image: "blog/img.png", spanText: "We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration." },
  { id: 2, image: "blog/blog.jpg", spanText: "When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors." },
];

export const OfferBorderStyleData = [
  {
    text: "Use the ",
    code: ".offer-style ",
  },
  {
    text: "class to",
    code: " .mega-inline",
  },
  {
    text: " you can archive this style.",
  },
];

export const OfferBorderStyleDataList = [
  { id: 1, color: "success", image: "email-template/11.jpg", spanText: "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion." },
  { id: 2, color: "danger", image: "email-template/10.jpg", spanText: "Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.", check: true },
];

export const InlineStyeData = [
  {
    text: "For Create inline megaoption add ",
    code: ".mega-inline",
  },
  {
    text: " class in form tag",
  },
];

export const InlineStyeDataList = [
  { id: 1, color: "warning", badgeTitle: "COD", digits: "50 INR", shipingText: "Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )" },
  { id: 2, color: "secondary", badgeTitle: "Fast", digits: "100 INR", shipingText: "Estimated 1 Day Shipping ( Duties end tax may be due upon delivery )" },
  { id: 3, color: "secondary", badgeTitle: "Standard", digits: "80 INR", shipingText: "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )" },
  { id: 4, color: "warning", badgeTitle: "Local", digits: "Free", shipingText: "Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )" },
];

export const VerticalStyleData = [
  {
    text: "vertical style in mega-options. Use the ",
    code: ".mega-vertical ",
  },
  {
    text: "class through created vertical alignments.",
  },
];

export const VerticalStyleDataList = [
  {
    megaTitle: "Delivery Option",
    child: [
      { id: 1, color: "primary", name: "radio5", mediaBodyClass: "megaoption-space", badgeTitle: "COD", digits: "50 INR", spanText: "Estimated 10 to 15 Day Shipping ( Duties end taxes may be due delivery )" },
      { id: 2, color: "secondary", name: "radio5", mediaBodyClass: "megaoption-space", badgeTitle: "Fast", digits: "100 INR", spanText: "Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )" },
      { id: 3, color: "success", name: "radio5", mediaBodyClass: "megaoption-space", badgeTitle: "Standard", digits: "80 INR", spanText: "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due delivery )" },
      { id: 4, color: "info", name: "radio5", mediaBodyClass: "megaoption-space", badgeTitle: "Local", digits: "Free", spanText: "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )", check: true },
    ],
  },
  {
    megaTitle: "Buying Option",
    child: [
      {
        id: 5,
        color: "warning",
        cardClass: "mb-0",
        name: "radio7",
        badgeTitle: "Pixelstrap",
        digits: "250 INR",
        check: true,
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, starClass: "text-warning" },
          { id: 2, starClass: "text-warning" },
          { id: 3, starClass: "text-warning" },
          { id: 4, starClass: "text-warning" },
          { id: 5, starClass: "text-warning m-r-5" },
        ],
        spanText: "5 start rating",
      },
      {
        id: 6,
        color: "danger",
        cardClass: "mb-0",
        name: "radio7",
        badgeTitle: "Multikart",
        digits: "150 INR",
        spanClass: "rating-star-wrapper",
        star: [{ id: 1, starClass: "text-warning" }, { id: 2, starClass: "text-warning" }, { id: 3 }, { id: 4 }, { id: 5, starClass: "m-r-5" }],
        spanText: "2 start rating",
      },
    ],
  },
];

export const HorizontalStyleData = [
  {
    text: "horizontal style in mega-options. Use the ",
    code: ".mega-horizontal",
  },
  {
    text: "class through created vertical alignments.",
  }, 
];

export const HorizontalStyleDataList = [
  {
    megaTitle: "Delivery Option",
    child: [
      { id: 1, color: "primary", name: "radio22", mediaBodyClass: "megaoption-space", badgeTitle: "COD", digits: "50 INR", spanText: "Estimated 5 Day Shipping ( Duties end taxes may be due delivery )" },
      { id: 2, colClass: "offset-sm-3", color: "secondary", name: "radio22", mediaBodyClass: "megaoption-space", badgeTitle: "Fast", digits: "100 INR", spanText: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )", check: true },
    ],
  },
  {
    megaTitle: "Buying Option",
    child: [
      {
        id: 3,
        color: "success",
        name: "radios23",
        badgeTitle: "Pixelstrap",
        digits: "250 INR",
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, starClass: "text-warning" },
          { id: 2, starClass: "text-warning" },
          { id: 3, starClass: "text-warning" },
          { id: 4, starClass: "text-warning" },
          { id: 5, starClass: "text-warning m-r-5" },
        ],
        spanText: "5 start rating",
      },
      {
        id: 4,
        colClass: "offset-sm-3",
        cardClass: "mb-0",
        color: "info",
        name: "radios23",
        badgeTitle: "Tivo",
        digits: "150 INR",
        check: true,
        spanClass: "rating-star-wrapper",
        star: [{ id: 1, starClass: "text-warning" }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5, starClass: "m-r-5" }],
        spanText: "1 start rating",
      },
    ],
  },
];
