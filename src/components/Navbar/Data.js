

const navItem = [
  {  
    id: 1,
    link: "/home",
    name: "Home",
    submenu: [],
  },
  {
    id: 2,
    
    name: "Visa Service",
    submenu: [
      { id: 1, name: 'UAE Visa', desc: "The latest industry news, updates and info", link:'/UaeVisa' },
      { id: 2, name: 'US Visa', desc: "The latest industry news, updates and info", link:'/USVisa' },
      { id: 3, name: 'UK Visa', desc: "The latest industry news, updates and info", link:'/UKVisa' },
    ]
   
  },
  {
    id: 3,
    name: "Business License",
    submenu: [
      { id: 1, name: 'Apply Online', desc: "The latest industry news, updates and info", link: '/business/apply' },
      { id: 2, name: 'Trade License', desc: "The latest industry news, updates and info", link: '/TradeLicense' },
      { id: 3, name: 'Business Types', desc: "The latest industry news, updates and info", link: '/business/types' },
      { id: 4, name: 'Privacy Policy', desc: "The latest industry news, updates and info", link: '/PrivacyPolicy' },
    ],
  },
  {
    id: 4,
    link: "/AirlinesTicket",
    name: "Airlines Ticket",
    submenu: [],
  },
  {
    id: 5,
    link: "/TourPlanner",
    name: "Tour Planner",
    submenu: [],
  },
  {
    id: 6,
    link: "/AboutUs",
    name: "About Us",
    submenu: [],
  },
];

export default navItem;
