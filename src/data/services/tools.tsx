import { Braces } from "lucide-react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { CgUiKit } from "react-icons/cg";
import {
  DiIllustrator,
  DiPhotoshop,
  DiPostgresql,
  DiSqllite,
} from "react-icons/di";
import { FaWebflow } from "react-icons/fa6";

import {
  FaFigma,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaServer,
  FaSketch,
  FaVuejs,
  FaWordpressSimple,
} from "react-icons/fa";
import { GrCss3, GrMysql } from "react-icons/gr";
import {
  RiFirebaseLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { RxFramerLogo } from "react-icons/rx";
import { TfiLayoutTabWindow } from "react-icons/tfi";
export const tools = {
  "ui-ux-design": {
    title: "Design Tools",
    subtitle: "Tools we use",
    description:
      "We use industry-leading design tools to create exceptional user experiences and bring your ideas to life.",
    buttonText: "Start Your Design Project",
    categories: [
      {
        title: "Design & Prototyping",
        tools: [
          {
            name: "Figma",
            icon: <FaFigma className="text-2xl text-primary" />,
          },
          {
            name: "Sketch App",
            icon: <FaSketch className="text-2xl text-primary" />,
          },
          {
            name: "Adobe Photoshop",
            icon: <DiPhotoshop className="text-2xl text-primary" />,
          },
          {
            name: "Adobe Illustrator",
            icon: <DiIllustrator className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
  "business-website-development": {
    title: "Development Tools",
    subtitle: "Technologies we use",
    description:
      "We build modern, responsive websites using cutting-edge technologies and frameworks.",
    buttonText: "Start Your Website Project",
    categories: [
      {
        title: "Front-end Technologies",
        tools: [
          {
            name: "HTML5",
            icon: <AiOutlineHtml5 className="text-2xl text-primary" />,
          },
          {
            name: "CSS3",
            icon: <GrCss3 className="text-2xl text-primary" />,
          },
          {
            name: "JavaScript (ES6+)",
            icon: <FaJs className="text-2xl text-primary" />,
          },
          {
            name: "TypeScript",
            icon: <BiLogoTypescript className="text-2xl text-primary" />,
          },
          {
            name: "React",
            icon: <FaReact className="text-2xl text-primary" />,
          },
          {
            name: "Next.js",
            icon: <RiNextjsLine className="text-2xl text-primary" />,
          },
          {
            name: "Redux",
            icon: <BiLogoRedux className="text-2xl text-primary" />,
          },
          {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-2xl text-primary" />,
          },
          {
            name: "Vue.js",
            icon: <FaVuejs className="text-2xl text-primary" />,
          },
          {
            name: "ShadCN",
            icon: <TfiLayoutTabWindow className="text-2xl text-primary" />,
          },
          {
            name: "Sass/SCSS",
            icon: <FaSass className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "No Code Development",
        tools: [
          {
            name: "Framer",
            icon: <RxFramerLogo className="text-2xl text-primary" />,
          },
          {
            name: "Webflow",
            icon: <FaWebflow className="text-2xl text-primary" />,
          },
          {
            name: "WordPress",
            icon: <FaWordpressSimple className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Back-end Technologies",
        tools: [
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-2xl text-primary" />,
          },
          {
            name: "Express.js",
            icon: <FaServer className="text-2xl text-primary" />,
          },
          {
            name: "Nest.js",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Database Management",
        tools: [
          {
            name: "PostgreSQL",
            icon: <DiPostgresql className="text-2xl text-primary" />,
          },
          {
            name: "MySQL",
            icon: <GrMysql className="text-2xl text-primary" />,
          },
          {
            name: "MongoDB",
            icon: <BiLogoMongodb className="text-2xl text-primary" />,
          },
          {
            name: "SQLite",
            icon: <DiSqllite className="text-2xl text-primary" />,
          },
          {
            name: "Firebase",
            icon: <RiFirebaseLine className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
  "ecommerce-development": {
    title: "E-commerce Stack",
    subtitle: "Technologies we use",
    description:
      "We build secure, scalable e-commerce platforms with fast storefronts and robust back-office.",
    buttonText: "Start Your Store",
    categories: [
      {
        title: "Storefront & UI",
        tools: [
          {
            name: "Next.js",
            icon: <RiNextjsLine className="text-2xl text-primary" />,
          },
          {
            name: "React",
            icon: <FaReact className="text-2xl text-primary" />,
          },
          {
            name: "TypeScript",
            icon: <BiLogoTypescript className="text-2xl text-primary" />,
          },
          {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-2xl text-primary" />,
          },
          {
            name: "Sass/SCSS",
            icon: <FaSass className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Payments & Integrations",
        tools: [
          {
            name: "Stripe",
            icon: <Braces className="text-2xl text-primary" />,
          },
          {
            name: "PayPal",
            icon: <Braces className="text-2xl text-primary" />,
          },
          {
            name: "REST/GraphQL APIs",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Backend & Data",
        tools: [
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-2xl text-primary" />,
          },
          {
            name: "Express.js",
            icon: <FaServer className="text-2xl text-primary" />,
          },
          {
            name: "PostgreSQL",
            icon: <DiPostgresql className="text-2xl text-primary" />,
          },
          {
            name: "MongoDB",
            icon: <BiLogoMongodb className="text-2xl text-primary" />,
          },
          {
            name: "Firebase",
            icon: <RiFirebaseLine className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
  "admin-panel-development": {
    title: "Application Tools",
    subtitle: "Technologies we use",
    description:
      "We develop scalable web applications using modern technologies and AI-powered tools.",
    buttonText: "Start Your App Project",
    categories: [
      {
        title: "Front-end Technologies",
        tools: [
          {
            name: "React",
            icon: <FaReact className="text-2xl text-primary" />,
          },
          {
            name: "Next.js",
            icon: <RiNextjsLine className="text-2xl text-primary" />,
          },
          {
            name: "TypeScript",
            icon: <BiLogoTypescript className="text-2xl text-primary" />,
          },
          {
            name: "Redux",
            icon: <BiLogoRedux className="text-2xl text-primary" />,
          },
          {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-2xl text-primary" />,
          },
          {
            name: "Material-UI",
            icon: <CgUiKit className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Back-end Technologies",
        tools: [
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-2xl text-primary" />,
          },
          {
            name: "Express.js",
            icon: <FaServer className="text-2xl text-primary" />,
          },
          {
            name: "Nest.js",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Database Management",
        tools: [
          {
            name: "PostgreSQL",
            icon: <DiPostgresql className="text-2xl text-primary" />,
          },
          {
            name: "MongoDB",
            icon: <BiLogoMongodb className="text-2xl text-primary" />,
          },
          {
            name: "Firebase",
            icon: <RiFirebaseLine className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
  "website-development": {
    title: "Development Tools",
    subtitle: "Technologies we use",
    description:
      "We build modern, responsive websites using cutting-edge technologies and frameworks.",
    buttonText: "Start Your Website Project",
    categories: [
      {
        title: "Front-end Technologies",
        tools: [
          {
            name: "HTML5",
            icon: <AiOutlineHtml5 className="text-2xl text-primary" />,
          },
          {
            name: "CSS3",
            icon: <GrCss3 className="text-2xl text-primary" />,
          },
          {
            name: "JavaScript (ES6+)",
            icon: <FaJs className="text-2xl text-primary" />,
          },
          {
            name: "TypeScript",
            icon: <BiLogoTypescript className="text-2xl text-primary" />,
          },
          {
            name: "React",
            icon: <FaReact className="text-2xl text-primary" />,
          },
          {
            name: "Next.js",
            icon: <RiNextjsLine className="text-2xl text-primary" />,
          },
          {
            name: "Redux",
            icon: <BiLogoRedux className="text-2xl text-primary" />,
          },
          {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-2xl text-primary" />,
          },
          {
            name: "Vue.js",
            icon: <FaVuejs className="text-2xl text-primary" />,
          },
          {
            name: "ShadCN",
            icon: <TfiLayoutTabWindow className="text-2xl text-primary" />,
          },
          {
            name: "Sass/SCSS",
            icon: <FaSass className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "No Code Development",
        tools: [
          {
            name: "Framer",
            icon: <RxFramerLogo className="text-2xl text-primary" />,
          },
          {
            name: "Webflow",
            icon: <FaWebflow className="text-2xl text-primary" />,
          },
          {
            name: "WordPress",
            icon: <FaWordpressSimple className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Back-end Technologies",
        tools: [
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-2xl text-primary" />,
          },
          {
            name: "Express.js",
            icon: <FaServer className="text-2xl text-primary" />,
          },
          {
            name: "Nest.js",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Database Management",
        tools: [
          {
            name: "PostgreSQL",
            icon: <DiPostgresql className="text-2xl text-primary" />,
          },
          {
            name: "MySQL",
            icon: <GrMysql className="text-2xl text-primary" />,
          },
          {
            name: "MongoDB",
            icon: <BiLogoMongodb className="text-2xl text-primary" />,
          },
          {
            name: "SQLite",
            icon: <DiSqllite className="text-2xl text-primary" />,
          },
          {
            name: "Firebase",
            icon: <RiFirebaseLine className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
  "saas-dashboard-development": {
    title: "SaaS & Dashboard Tools",
    subtitle: "Technologies we use",
    description:
      "We develop scalable SaaS platforms and data-driven dashboards using modern technologies and frameworks.",
    buttonText: "Start Your SaaS Project",
    categories: [
      {
        title: "Front-end Technologies",
        tools: [
          {
            name: "React",
            icon: <FaReact className="text-2xl text-primary" />,
          },
          {
            name: "Next.js",
            icon: <RiNextjsLine className="text-2xl text-primary" />,
          },
          {
            name: "TypeScript",
            icon: <BiLogoTypescript className="text-2xl text-primary" />,
          },
          {
            name: "Redux",
            icon: <BiLogoRedux className="text-2xl text-primary" />,
          },
          {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className="text-2xl text-primary" />,
          },
          {
            name: "Material-UI",
            icon: <CgUiKit className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Back-end Technologies",
        tools: [
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-2xl text-primary" />,
          },
          {
            name: "Express.js",
            icon: <FaServer className="text-2xl text-primary" />,
          },
          {
            name: "Nest.js",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Database Management",
        tools: [
          {
            name: "PostgreSQL",
            icon: <DiPostgresql className="text-2xl text-primary" />,
          },
          {
            name: "MongoDB",
            icon: <BiLogoMongodb className="text-2xl text-primary" />,
          },
          {
            name: "Firebase",
            icon: <RiFirebaseLine className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Tools",
    subtitle: "Technologies we use",
    description:
      "We develop high-performance mobile applications using native and cross-platform technologies.",
    buttonText: "Start Your Mobile App Project",
    categories: [
      {
        title: "Native Development",
        tools: [
          {
            name: "Swift (iOS)",
            icon: <Braces className="text-2xl text-primary" />,
          },
          {
            name: "Kotlin (Android)",
            icon: <Braces className="text-2xl text-primary" />,
          },
          {
            name: "Java (Android)",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Cross-Platform",
        tools: [
          {
            name: "React Native",
            icon: <FaReact className="text-2xl text-primary" />,
          },
          {
            name: "Flutter",
            icon: <Braces className="text-2xl text-primary" />,
          },
          {
            name: "Ionic",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Backend & APIs",
        tools: [
          {
            name: "Node.js",
            icon: <FaNodeJs className="text-2xl text-primary" />,
          },
          {
            name: "Firebase",
            icon: <RiFirebaseLine className="text-2xl text-primary" />,
          },
          {
            name: "REST APIs",
            icon: <Braces className="text-2xl text-primary" />,
          },
          {
            name: "GraphQL",
            icon: <Braces className="text-2xl text-primary" />,
          },
        ],
      },
      {
        title: "Database",
        tools: [
          {
            name: "MongoDB",
            icon: <BiLogoMongodb className="text-2xl text-primary" />,
          },
          {
            name: "PostgreSQL",
            icon: <DiPostgresql className="text-2xl text-primary" />,
          },
          {
            name: "SQLite",
            icon: <DiSqllite className="text-2xl text-primary" />,
          },
        ],
      },
    ],
  },
};
