import image1 from "./img/image1.png"
import image2 from "./img/image2.png"
import image3 from "./img/image3.png"
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
      { id: 1, name: 'UAE Visa',img:image1,title:"United Arab Amirates", link:'/UaeVisa' },
      { id: 2, name: 'US Visa',img:image2,title:"United Arab Amirates", link:'/USVisa' },
      { id: 3, name: 'UK Visa',img:image3,title:"United Arab Amirates" , link:'/UKVisa' },
    ]
   
  },
  {
    id: 3,
    name: "Business License",
    submenu: [
      { id: 1, name: 'Visa: New / Renew & Visits', link: '/visa' },
      { id: 2, name: 'Business Startup, Trade License', link: '/business-startup' },
      { id: 3, name: 'Ejari, Business Location Setup', link: '/ejari' },
      { id: 4, name: 'Certificate Attestation', link: '/certificate-attestation' },
      { id: 5, name: 'Legal Translation', link: '/legal-translation' },
      { id: 6, name: 'RTA Applications', link: '/rta-applications' },
      { id: 7, name: 'Dubai Police Applications', link: '/dubai-police' },
      { id: 8, name: 'Health Insurance', link: '/health-insurance' },
      { id: 9, name: 'Passport Renewals', link: '/passport-renewals' },
      { id: 10, name: 'Consulate Applications', link: '/consulate-applications' },
      { id: 11, name: 'Photocopy Color/B&W', link: '/photocopy' },
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
