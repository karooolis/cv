import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Karolis Ramanauskas",
  initials: "KR",
  location: "Vilnius, Lithuania, EET",
  locationLink: "https://www.google.com/maps/place/Vilnius",
  about:
    "Full-stack engineer focused on building products with extra attention to detail.",
  summary:
    "As a full-stack engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/3159964?s=400&u=450056fc5538e12690b6d2dc8cf155ec5ae885b1&v=4",
  personalWebsiteUrl: "https://krl.is",
  contact: {
    email: "hi@krl.is",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/karooolis",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karolisram/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/karooolis",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Lancaster University",
      degree: "BSc Computer Science",
      start: "2013",
      end: "2016",
    },
    {
      school: "0xMacro",
      degree: "Smart Contract Security Fellowship",
      start: "2023",
      end: "2023",
    },
  ],
  awards: [
    {
      title: "ETHGlobal Istanbul",
      date: "Nov 2023",
      description:
        "Won the 1st place in CoW Programmatic Framework track, as well as integration prizes in WalletConnect and Gnosis Chain tracks. The project was a multi-chain and multi-currency payroll system.",
    },
    {
      title: "Hack4Vilnius",
      date: "Oct 2023",
      description:
        "Hack4Vilnius is a 3-days hackathon with the aim on improving Vilnius city. Our solution https://idejavilniui.lt/, citizens engagement platform, won the 1st place, 1500 EUR in prizes and future mentorship.",
    },
    {
      title: "Hack Lancaster Most Beautiful Data Award",
      date: "Nov 2014",
      description:
        "Hack4Vilnius is a 3-days hackathon with the aim on improving Vilnius city. Our solution https://idejavilniui.lt/, citizens engagement platform, won the 1st place, 1500 EUR in prizes and future mentorship.",
    },
    {
      title: "Lithuania Developer Days 1st place",
      date: "Jul 2014",
      description:
        "Lithuania Developer Days 2014 was a multi-day educational event/hackathon where you got points for various completed tasks like setting up a new HTML5 app, cloud-based server and similar.",
    },
  ],
  work: [
    {
      company: "0xMacro",
      link: "https://0xmacro.com/",
      badges: ["Remote"],
      title: "Smart Contracts Auditing Apprenticeship",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Participated in audits of numerous projects for real-world clients such as ThirdWeb, Synthetix, PoolTogether, and more. Learned best development and security practices for building secure smart contracts. Technologies: Foundry, Hardhat, Solidity.",
    },
    {
      company: "Volvo Cars",
      link: "https://www.volvocars.com/",
      badges: ["Remote"],
      title: "Full-stack Engineer & Tech Lead",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description:
        "Developed and optimized components for Volvo Cars' design system. Led the creation of a custom CMS and internalization tool. Coded the front- end and GraphQL layers, and set up the infrastructure. Technologies: React, Next.js, TypeScript, GraphQL",
    },
    {
      company: "Uber",
      link: "https://www.uber.com/",
      badges: [],
      title: "Full-stack Engineer",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description:
        "Worked on observability tools for incident discovery and mitigation, serving over 3,000 Uber engineers. Spearheaded the front-end development of two internal tools for incident mitigation, involving complex functionalities like annotation, labeling, real-time alerts, custom graphs, and efficient handling of large data sets.",
    },
    {
      company: "Toptal",
      link: "https://www.toptal.com",
      badges: ["Remote"],
      title: "Full-stack Engineer",
      logo: NSNLogo,
      start: "2017",
      end: "2018",
      description:
        "Successfully completed multiple full-stack freelance projects, resulting in high levels of client satisfaction.",
    },
    {
      company: "Nielsen",
      link: "https://www.nielsen.com/",
      badges: [""],
      title: "Data Scientist",
      logo: NSNLogo,
      start: "2017",
      end: "2018",
      description:
        "Analyzed data for large companies to identify profitable product categories and optimize pricing strategies as a data scientist. Transitioned to a software development role, creating Python scripts for workflow automation, and developing complex data visualizations using D3.js to support client data analysis.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Solidity",
  ],
  projects: [],
} as const;
