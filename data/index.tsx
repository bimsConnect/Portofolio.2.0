import {
  DraftingCompass,
  HandHelping,
  Blocks,
  Wrench,
  Code,
  Braces,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaX } from "react-icons/fa6";

export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const services = [
  {
    ico: <Code />,
    title: "Custom Website Development",
    description:
      "Expertise in building high-performing, responsive, and accessible websites. " +
      "Utilize the latest technologies and frameworks to ensure an optimal user experience",
  },
  {
    ico: <Braces />,
    title: "Web Application Development",
    description:
      "Expertise in building robust and secure web applications. " +
      "Integrate advanced functionalities like e-commerce, online payments, and content management systems",
  },
  {
    ico: <HandHelping />,
    title: "Technology Consulting",
    description:
      "Offer strategic advice to help businesses leverage technology effectively. " +
      "Recommend the best technology solutions to meet your client's business goals",
  },
  {
    ico: <Blocks />,
    title: "System Integration",
    description:
      "Connect your website or web application with third-party systems like CRMs, ERPs, and marketing platforms. " +
      "Build custom integrations to meet your client's specific requirements.",
  },
  {
    ico: <Wrench />,
    title: "Maintenance and Support",
    description:
      "Monitor performance and troubleshoot issues promptly. " +
      "Regularly update code and technologies for security and compatibility",
  },
  {
    ico: <DraftingCompass />,
    title: "Mockup Integration",
    description:
      "Bridge the gap between design and development, ensuring pixel-perfect implementation. Maintain design fidelity throughout the development process",
  },
];

export const works = [
  {
    title: "My-Portofolio",
    description:
      "A simple and beautiful portfolio to present Muhammad Bisma Career.",
    className: "md:col-span-1",
    image: "/images/works/work3.png",
    link: "/"
  },
  {
    title: "Featured Project E-School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sapiente, voluptatum dolores deserunt repellat minus aspernatur facere aspe",
    className: "md:col-span-1",
    image: "/images/works/work1.png",
    link: "/"
  },
  {
    title: "Kitabantu-Indonesia",
    description: "Website Pencaker",
    className: "md:col-span-1",
    image: "/images/works/work2.png",
    link: "/"
  },
  {
    title: "Dapur Inspirasi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sapiente, voluptatum dolores deserunt repellat minus aspernatur facere aspe",
    className: "md:col-span-1",
    image: "/images/works/work4.png",
    link: "/"
  },
  {
    title: "My-First Project",
    description:
      "Algoritma One Time Pad pada Pesan Rahasia yang Menghasilkan QRR Code",
    className: "md:col-span-2",
    image: "/images/works/work5.png",
    link: "/"
  },
  // {
  //   title: "Tailus UI React",
  //   description:
  //     "Highly customizable components for crafting modern, personalized websites and applications.",
  //   className: "md:col-span-1",
  //   image: "/images/works/work5.png",
  //   link: "/"
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/muhammad-bisma-5266b22b6/",
  },
  {
    id: 2,
    img: <FaGithub />,
    href: "https://github.com/bimsConnect",
  },
  {
    id: 3,
    img: <FaInstagram />,
    href: "https://www.instagram.com/beynn_15/",
  },
];

export const skills = [
  { name: "frontend", description: "", percentage: 80 },
  { name: "backend", description: "", percentage: 50 },
];

export const skillsIcons = [
  "typescript",
  "javascript",
  "webstorm",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "mongodb",
  "figma",
];
