export const PagesDropdownData = [
  {
    DropdownItemName: "About Us",
    Arrow: false,
    Link:"/About"
  },
  {
    DropdownItemName: "Black Friday Single",
    Arrow: false,
    Link:"/blackfriday"
  },
  {
    DropdownItemName: "Terms & Condition",
    Arrow: false,
    Link:"/termscondition"
  },
  {
    DropdownItemName: "Privacy Policy",
    Arrow: false,
    Link: "/Privacy"
  },
  {
    DropdownItemName: "Pricing",
    Arrow: true,
    Subdropdown:[
      {
        SubdropdownItemName: "Pricing Default",
        Link:"/Pricing"
      },
      {
        SubdropdownItemName: "Pricing Packages",
        Link:"/PricingPackages"
      },
      {
        SubdropdownItemName: "Web Hosting Packages",
        Link:"/WebHostingPackages"
      },
      {
        SubdropdownItemName: "Windows Hosting",
        Link:"/WindowsHosting"
      },
      {
        SubdropdownItemName: "Pricing Comparison",
        Link:"/PricingComparison"
      },
      {
        SubdropdownItemName: "Pricing Specifications",
        Link:"/PricingSpecifications"
      },
      {
        SubdropdownItemName: "VPS Pricing",
        Link:"/VPSPricing"
      },
    ]
  },
  {
    DropdownItemName: "Blog",
    Arrow: true,
    Subdropdown:[
      {
        SubdropdownItemName: "Blog Grid",
        Link:"/BlogGrid"
      },
      {
        SubdropdownItemName: "Blog Details",
        Link:"/BlogDetail"
      },
    ]
  },
  {
    DropdownItemName: "Specialty",
    Arrow: true,
    Subdropdown: [
      {
        SubdropdownItemName: "Search Result",
        Link:"/SearchResult"
      },
      {
        SubdropdownItemName: "Cover Page",
        Link:"/CoverPage"
      },
      {
        SubdropdownItemName: "Comming Soon",
        Link:"/CommingCsoon"
      },
      {
        SubdropdownItemName: "Thank You",
        Link:"/Thankyou"
      },
      {
        SubdropdownItemName:"Erorr 404",
        Link:"/erorr404"
      }
    ],
  },
  {
    DropdownItemName: "Login & Signup",
    Arrow: true,
    Subdropdown: [
      {
        SubdropdownItemName: "Login",
        href:"/login"
      },
      {
        SubdropdownItemName: "Register",
        Link:"/register"
      },
      {
        SubdropdownItemName: "Recover Account",
        Link:"/recoveraccount"
      },
    ],
  },
];
