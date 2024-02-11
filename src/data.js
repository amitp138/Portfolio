import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/projects",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Amit",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Pandey",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Mumbai",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 7666437162",
  },

  {
    id: 8,
    title: "Email : ",
    description: "amitpande1008@gmail",
  },

  // {
  //   id: 9,
  //   title: "Skype : ",
  //   description: "",
  // },

  {
    id: 10,
    title: "Langauges : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "2+",
    title: "Happy <br /> Customers",
  },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023-8 Months ",
    title: " Junior Web Developer <span> Ferrypal Pvt Ltd.</span>",
    desc: "As a Junior Web Developer at Ferrypal Pvt Ltd, contributed to affordable digital solutions for local businesses, empowering them in the digital space",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022-October",
    title: "HacktoberFest <span> Open Source </span>",
    desc: "participated in HacktoberFest(Open source month of October), contributing to 3 web dev projects.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 ",
    title: "Web Developer <span> SOS TECH Inc. </span>",
    desc: "At SOS TECH Inc, engaged in diverse digital services, including website development, UI/UX design, and social media marketing",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "10-SSC <span> S. </span>",
    desc: "Achieved 88.60%, displaying excellence in academics and dedication",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "12-HSC <span> Ramniranjan Jhunjhunwala</span>",
    desc: "Secured 77.54%, showcasing consistent performance and commitment to learning",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "Bachelor Degree <span> MCT's R.G.I.T</span>",
    desc: "Earned 9.1 CGPA, reflecting proficiency and passion in computer science and engineering",
  },
];

export const skills = [
  {
    id: 1,
    title: "ReactJs",
    percentage: "25",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "Git",
    percentage: "66",
  },

  {
    id: 5,
    title: "Github",
    percentage: "95",
  },

  {
    id: 6,
    title: "NodeJS",
    percentage: "50",
  },

  {
    id: 7,
    title: "MySQL",
    percentage: "65",
  },

  {
    id: 8,
    title: "Html",
    percentage: "45",
  },
  {
    id: 9,
    title: "Firebase",
    percentage: "45",
  },
  {
    id: 10,
    title: "Bootstrap",
    percentage: "45",
  },
  {
    id: 11,
    title: "C++",
    percentage: "45",
  },
  {
    id: 12,
    title: "OOPS",
    percentage: "45",
  },
  {
    id: 13,
    title: "Dsa",
    percentage: "45",
  },
  {
    id: 14,
    title: "Redux",
    percentage: "45",
  },
];

export const project = [
  {
    id: 1,
    img: Work1,
    title: "Ferrypal (Internship)",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: " Internship Project",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Ferrypal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Reactjs,Firebase,bootstrap ",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "<a href='https://www.ferrypal.com/' target='_blank'>Ferrypal</a>",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "TrendBud",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "<a href='https://trendbud.vercel.app/' target='_blank'>Trendbud</a>",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Box Office App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Webite",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React,js,css",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "<a href='https://amitp138.github.io/Box-Office-App/' target='_blank'>Box_ffice</a>",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Cryto Bazinga",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "WebSite",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React js ,Tailwind",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "<a href='https://crypto-bazinga.netlify.app/' target='_blank'>Cryto Bazinga</a>",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "ICARUS",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "ICARUS",
      },
      {
        title: "Language : ",
        desc: "React JS",
      },
      {
        title: "Preview : ",
        desc: "<a href='https://icarus23.netlify.app/' target='_blank'>ICARUS</a>",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Oishi Kitchen",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Oishi Kitchen",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Reat js , bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "<a href='https://oishikitchen.myferrypal.com/' target='_blank'>Oishi Kitchen</a>",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
