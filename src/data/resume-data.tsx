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
    "As a full-stack engineer, I have successfully taken multiple projects from 0 to 1. I enjoy collaborating with stakeholders bringing clarity to ambiguity by effectively refining requirements, wireframing, prototyping, and using proven software development practices to deliver the results. Currently, I mostly work with TypeScript, React, Next.js, Node.js, and GraphQL.",
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
      description: "1st place, CoW Programmatic Framework track",
    },
    {
      title: "Hack4Vilnius",
      date: "Oct 2023",
      description: "1st place, main track",
    },
    {
      title: "Hack Lancaster",
      date: "Nov 2014",
      description: "Most Beautiful Data Award",
    },
    {
      title: "Lithuania Developer Days",
      date: "Jul 2014",
      description: "1st place, main track",
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
        "Participated in audits for high-TVL protocols such as Synthetix, PoolTogether, and more. Learned best development and security practices for building secure smart contracts. Technologies: Foundry, Hardhat, Solidity.",
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
        "Developed and optimized components for Volvo Cars' design system. Led the creation of a custom CMS and internalization tool. Technologies: React, Next.js, TypeScript, GraphQL, Docker.",
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
        "Spearheaded front-end development of observability tools for incident discovery and mitigation, serving over 3,000 Uber engineers. Technologies: React, Flow, GraphQL, Docker.",
    },
    {
      company: "Toptal",
      link: "https://www.toptal.com/resume/karolis-ramanauskas",
      badges: ["Remote"],
      title: "Full-stack Engineer",
      logo: NSNLogo,
      start: "2017",
      end: "2018",
      description:
        "Successfully completed multiple full-stack freelance projects, resulting in high levels of client satisfaction. Technologies: React, JavaScript.",
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
        "Crunched data for large companies to optimize pricing strategies. Transitioned to a software development role, creating Python scripts for workflow automation, and developing complex data visualizations using D3.js to support client data analysis. Technologies: React, D3.js, Python.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "GraphQL",
    "Solidity",
  ],
  projects: [],
} as const;
