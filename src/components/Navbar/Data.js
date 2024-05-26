

const navItem = [
  {  
    id: 1,
    link: "home",
    name: "Home",
    submenu: [],
  },
  {
    id: 2,
    link: "VisaService",
    name: "Visa Service",
    submenu: [
      { id: 1, name: 'Blog', desc: "The latest industry news, updates and info", link: '/visa/blog' },
      { id: 2, name: 'Customer stories', desc: "The latest industry news, updates and info", link: '/visa/stories' },
      { id: 3, name: 'Video tutorials', desc: "The latest industry news, updates and info", link: '/visa/tutorials' },
      { id: 4, name: 'Documentation', desc: "The latest industry news, updates and info", link: '/visa/documentation' },
      { id: 5, name: 'Help and support', desc: "The latest industry news, updates and info", link: '/visa/support' },
    ],
  },
  {
    id: 3,
    link: "BusinessLicense",
    name: "Business License",
    submenu: [
      { id: 1, name: 'Apply Online', desc: "The latest industry news, updates and info", link: '/business/apply' },
      { id: 2, name: 'Renew License', desc: "The latest industry news, updates and info", link: '/business/renew' },
      { id: 3, name: 'Business Types', desc: "The latest industry news, updates and info", link: '/business/types' },
      { id: 4, name: 'Fees and Charges', desc: "The latest industry news, updates and info", link: '/business/fees' },
    ],
  },
  {
    id: 4,
    link: "AirlinesTicket",
    name: "Airlines Ticket",
    submenu: [],
  },
  {
    id: 5,
    link: "TourPlanner",
    name: "Tour Planner",
    submenu: [],
  },
  {
    id: 6,
    link: "AboutUs",
    name: "About Us",
    submenu: [],
  },
];

export default navItem;
