export const SimpleAccordionSubTitle = [
  {
    text: "Using the  ",
    code: ".accordion ",
  },
  {
    text: "class to expand/collapse to accordion content.",
  },
];

export const FlushAccordionSubTitle = [
  {
    text: "Add ",
    code: ".accordion-flush",
  },
  {
    text: " to remove the default background-color, border, etc.",
  },
];

export const MultipleCollapseSubTitle = [
  {
    text: "Use ",
    code: "href",
  },
  {
    text: " on",
    code: " data-bs-toggle attribute",
  },
  {
    text: " to show and hide multiple elements.",
  },
];

export const IconAccordionSubTitle = [
  {
    text: "Use ",
    code: "icons ",
  },
  {
    text: "with ",
    code: ".accordion ",
  },
  {
    text: "to give better look.",
  },
];

export const OutlineAccordionSubTitle = [
  {
    text: "Set border outline with accordion using ",
    code: ".accordion-wrapper",
  },
  {
    text: " class.",
  },
];

export const HorizontalAccordionSubTitle = [
  {
    text: "Add the ",
    code: ".collapse-horizontal",
  },
  {
    text: " modifier class to transition the width instead of height and set a width on the immediate child element.",
  },
];

export const CollapesAccordionSubTitle = [
  {
    text: "Use a link with the href attribute ",
    code: ' (and a role="button").',
  },
  {
    text: " In both cases, the",
    code: ' data-bs-toggle="collapse"',
  },
  {
    text: " is required.",
  },
];

export const ElementsWebDesignList = ["-->Layout", "-->Images", "-->Visual hierarchy", "-->Color scheme", "-->Typography", "-->Navigation", "-->Readability", "-->Content"];

export const FlushData = [
  {
    id: "flush1",
    head: "What is bootstrap?",
    child: [{ text: "--> Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website." }, { text: "--> It is absolutely free to download and use." }],
  },
  {
    id: "flush2",
    head: "Why Should You Use Bootstrap?",
    child: [{ text: "First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started." }, { text: "One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them." }, { text: "You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. " }, { text: "To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects." }],
  },
  {
    id: "flush3",
    head: "Bootstrap Image System",
    child: [{ text: "Bootstrap handles the image display and responsiveness with its predefined HTML and CSSrules." }, { text: "Adding the .img-responsive class will automatically resize images based on theusers' screen size. This will benefit your website’s performance, as reducing image sizes ispart of the site optimization process." }, { text: "Bootstrap also provides additional classes likeimg-circle and .img-rounded, which help to modify the images' shape." }],
  },
];

export const IconDemoData = [
  {
    id: "icon1",
    icon: <i className="fa-regular fa-bell" />,
    head: " Keep in touch",
    text: (
      <p>
        <em className="text-danger">
          {" "}
          {'" This page might not behave as expected because Windows Internet Explorer'}
          {"isn't"} {'configured to load unsigned ActiveX controls."'}
        </em>{" "}
        {'or "Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer." (Both phrased as conditions that may cause future problems.)'}
      </p>
    ),
  },
  {
    id: "icon2",
    icon: <i className="fa-regular fa-comment" />,
    head: " Chats with others",
    text: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>{"You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails."}</li>
        <li>
          {" "}
          <strong>{"Chat: "}</strong> {"Use when you prefer a dedicated chat experience and don't mind switching between different apps."}
        </li>
      </ul>
    ),
  },
  {
    id: "icon3",
    icon: <i className="fa-regular fa-square-check" />,
    head: " Right way to code ",
    text: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>{"1) Decide on the indentation and keep it that way."}</li>
        <li>{"2) Make comments."}</li>
        <li>{"3) Consistent name scheme."}</li>
        <li>{"4) Don't repeat code."}</li>
        <li>{"5) Avoid writing long code lines."}</li>
        <li>{"6) Break down a big task into smaller chunks."}</li>
        <li>{"7) Organize your program into smaller files."}</li>
        <li>{"8) Write clever code that is also readable."}</li>
      </ul>
    ),
  },
];

export const OutlineData = [
  {
    id: "outline1",
    head: "What do web designers do?",
    text: (
      <p>
        {"Web design"}
        <em className="text-danger"> {"identifies the goals"}</em> {"of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements."}
      </p>
    ),
  },
  {
    id: "outline2",
    head: "What is the use of web design?",
    text: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li>
          <strong> {"Search engine optimization:"} </strong>
          {"Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it."}
        </li>
        <li>
          <strong> {"Mobile responsiveness:"}</strong> {"Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease."}
        </li>
        <li>
          {" "}
          <strong> {"Improved sales:"}</strong>
          {"Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales."}
        </li>
      </ul>
    ),
  },
  {
    id: "outline3",
    head: "What are the elements of web design?",
    text: (
      <ul className="d-flex flex-column gap-2 accordions-content">
        <li> {"The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:"}</li>
        <li>{"--> Layout"}</li>
        <li>{"--> Images"}</li>
        <li>{"--> Visual hierarchy"}</li>
        <li>{"--> Color scheme"}</li>
        <li>{"--> Typography"}</li>
        <li>{"--> Navigation"}</li>
        <li>{"--> Readability"}</li>
        <li>{"--> Content"}</li>
      </ul>
    ),
  },
];

export const SimpleDemoItem = [
  { id: 1, strongText: "Search engine optimization:", text: "Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it." },
  { id: 2, strongText: "Mobile responsiveness:", text: "Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease." },
  { id: 1, strongText: "Improved sales:", text: "Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales." },
];

export const SimpleAccordion1 = (
  <>
    <p className="mb-0">
      Web design <em className="font-danger">identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.
    </p>
  </>
);
export const SimpleAccordion2 = (
  <p>
    <strong> Search engine optimization: </strong> Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it. <br /> <br />
    <strong> Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease. <br />
    <br /> <strong> Improved sales:</strong>Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.
  </p>
);
export const SimpleAccordion3 = (
  <>
    <p>The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:</p>
    <ul className="d-flex flex-column gap-2 accordions-content">
      <li>{"--> Layout"}</li>
      <li>{"--> Images"}</li>
      <li>{"--> Visual hierarchy"}</li>
      <li>{"--> Color scheme"}</li>
      <li>{"--> Typography"}</li>
      <li>{"--> Navigation"}</li>
      <li>{"--> Readability"}</li>
      <li>{"--> Content"}</li>
    </ul>
  </>
);

export const AccordionList = [
  {
    id: "1",
    icon: true,
    accordionHeaderClass: "accordion-light-primary",
    accordionHeading: "What do web designers do ?",
    spanClass: "font-primary",
    bodyText: SimpleAccordion1,
  },
  {
    id: "2",
    icon: true,
    accordionHeaderClass: "accordion-light-primary",
    accordionHeading: "What is the use of web design?",
    spanClass: "font-primary",
    bodyText: SimpleAccordion2,
  },
  {
    id: "3",
    icon: true,
    accordionHeaderClass: "accordion-light-primary",
    accordionHeading: "What are the elements of web design?",
    spanClass: "font-primary",
    bodyText: SimpleAccordion3,
  },
];
