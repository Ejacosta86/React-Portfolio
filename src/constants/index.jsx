import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project4.webp";
import project4 from "../assets/project3.webp";



export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Express, Node, MongoDb, Tailwind, MySql, Javascript, Postgres, ";

export const PROJECTS = [
  {
    id: 1,
    title: "Note Taker",
    description:
      "an application called Note Taker that can be used to write and save notes.",
    imgSrc: project1,
    link: "https://github.com/Ejacosta86/noteTaker",
  },
  {
    id: 2,
    title: "E-Commerce Back End",
    description:
      "built a back end for an e-commerce site.",
    imgSrc: project2,
    link: "https://github.com/Ejacosta86/E-CommerceBE",
  },
  {
    id: 3,
    title: "Mood-Sync",
    description:
    "This is an application used to track patterns in a users mental health.",
    imgSrc: project3,
    link: "https://github.com/Mtduffey36/mood-sync",
  },
  {
    id: 4,
    title: "Plan Your Knight",
    description:
    "This application is available for UCF students, family, and fans to access nearby available parking, tailgating, and restaurants. The map in the application showcases available locations for the user to view.",
    imgSrc: project4,
    link: "https://github.com/grpproject1/Plan-Your-Knight",
  },
];

export const ABOUT =
  "I am a junior full stack web developer with a knack for turning complex problems into user-friendly applications by using solutions in a wide range of technologies from front-end development in JavaScript and React to server-side languages like MongoDB and SQL. I'm currently working in the MERN stack, to create seamless end-to-end solutions.";

export const EXPERIENCES = [
  {
    company: "Advent Health Hospice of Central Florida",
    role: "Lead Team Administrative Assistant",
    year: "2019 - Present",
    description:"Process general office/clerical duties by developing, maintaining,and organizing records and data. Handle department scheduling,telephone calls and assists the program care manager in anyway necessary to fulfill the functions of the clinical team. Lead trainer for any new team member, changes in current processes and creating solutions to issues with processes needing improvements and implementing changes."
  },
  {
    company: "Opis Island Lake Center",
    role: "Director of Admissions",
    year: "2012 - 2019",
    description:
      "Managed the referral intake and follow up process, admission process and participates in non-hospital and hospital referrals. Handled the explanation of insurance coverage, long term care processes and on-site evaluations. Implementation of standardized pre-admission/admission process and census development initiatives to achieve/exceed monthly activity targets and budgeted census goals.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/erica-acosta-dev/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  // phone: "+1 407 474 1207 ",
  email: "ejacosta86@gmail.com",
};