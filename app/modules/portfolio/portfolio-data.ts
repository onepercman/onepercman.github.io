import type { PortfolioData } from "./portfolio-types"

export const portfolioData: PortfolioData = {
  profile: {
    name: "Trung Tran Duy",
    displayName: "Trung Tran Duy aka onepercman",
    title: "Frontend Engineer",
    animatedTitles: ["Frontend Engineer", "Web3 Enthusiast"],
    subtitle: "Delivering high-quality web development solutions",
    location: "Hanoi, Vietnam",
    bio: "Frontend Engineer with a zen approach to crafting efficient web and Web3 applications. Passionate about clean code, optimal performance, and seamless user experiences.",
    phone: "+84 918048534",
    avatar: "/images/avatar.png",
    links: {
      github: "onepercman",
      linkedin: "onepercman",
      twitter: "onepercman",
      email: "contact@onepercman.com",
      resume: "/files/resume.pdf"
    }
  },
  skills: [
    {
      category: "Frontend Frameworks",
      items: ["ReactJS", "NextJS", "TypeScript", "TailwindCSS", "Vite"],
      level: 95
    },
    {
      category: "State Management",
      items: ["Redux", "Zustand", "Valtio", "Jotai"],
      level: 90
    },
    {
      category: "Web3 Development",
      items: ["Ethers.js", "Wagmi", "Viem", "Typechain", "Solana SDK", "Sei", "Sui", "Aptos"],
      level: 85
    },
    {
      category: "Mobile & Other",
      items: ["Telegram Mini Apps", "Component Systems", "Build Tools"],
      level: 80
    }
  ],
  projects: [
    {
      id: "tailwind-schemes",
      title: "Tailwind-schemes",
      description: "The first open-source plugin to support dynamic color settings for multi themes on tailwindcss. Reached 1300+ downloads in the first week of public release of version 1.0",
      technologies: ["TailwindCSS", "Plugin Development", "TypeScript"],
      links: {
        github: "https://github.com/onepercman/tailwind-schemes",
        demo: "https://www.npmjs.com/package/tailwind-schemes"
      },
      featured: true,
      status: "completed",
      metrics: {
        downloads: "1300+",
        week: "First week",
        type: "Open Source"
      },
      date: "June 2023"
    },
    {
      id: "react-tvcx",
      title: "React-tvcx", 
      description: "A library that provides functions to help users create a reusable component system for their projects using React, Tailwind CSS, and TypeScript. It simplifies the creation and management of components with support for variant styles and context-based slot management.",
      technologies: ["React", "TailwindCSS", "TypeScript", "Component System"],
      links: {
        github: "https://github.com/onepercman/react-tvcx",
        demo: "https://www.npmjs.com/package/react-tvcx"
      },
      featured: true,
      status: "completed",
      metrics: {
        type: "Library",
        focus: "Component System",
        technology: "React + Tailwind"
      },
      date: "May 2024"
    },
    {
      id: "use-valtio-store",
      title: "use-valtio-store",
      description: "This React hook provides a way to manage state using Valtio, supporting persistent states with localStorage and sessionStorage.",
      technologies: ["React", "Valtio", "TypeScript", "State Management"],
      links: {
        github: "https://github.com/onepercman/use-valtio-store",
        demo: "https://www.npmjs.com/package/use-valtio-store"
      },
      featured: true,
      status: "completed",
      metrics: {
        type: "React Hook",
        feature: "Persistent State",
        storage: "localStorage + sessionStorage"
      },
      date: "January 2024"
    },
    {
      id: "mojaui-react",
      title: "MojaUI React",
      description: "Open-source reusable UI library built on TailwindCSS and Ark-UI. A comprehensive component library for modern React applications.",
      technologies: ["React", "TailwindCSS", "Ark-UI", "TypeScript"],
      links: {
        github: "https://github.com/onepercman/mojaui",
        demo: "https://www.npmjs.com/package/@mojaui/react"
      },
      featured: false,
      status: "completed",
      date: "June 2024"
    },
    {
      id: "onus-chain",
      title: "ONUS Chain",
      description: "ETH layer2 blockchain network partners with ONUS. Developed the UI for block explorer, landing page, and various blockchain interfaces.",
      technologies: ["React", "Web3", "Blockchain", "ETH Layer2"],
      links: {
        github: "#",
        demo: "https://onuschain.io"
      },
      featured: false,
      status: "completed",
      date: "February 2022"
    },
    {
      id: "mcity",
      title: "Mcity",
      description: "Metaverse project releases tokens and NFT on BSC network. Mainly responsible for developing the project's dapps and user interfaces.",
      technologies: ["React", "Web3", "BSC", "NFT", "Metaverse"],
      links: {
        github: "#",
        demo: "#"
      },
      featured: false,
      status: "completed",
      date: "December 2022"
    }
  ],
  experience: [
    {
      company: "Freelancer",
      position: "Developer",
      duration: "August 2023 – Present",
      location: "Hanoi, Vietnam",
      description: "Specializing in providing frontend technical solutions for various clients. Focus on modern web development technologies and best practices.",
      technologies: ["ReactJS", "TypeScript", "NextJS", "Web3", "TailwindCSS"],
      achievements: [
        "Delivered high-quality frontend solutions",
        "Specialized in Web3 and blockchain interfaces",
        "Maintained client satisfaction and project quality"
      ]
    },
    {
      company: "Moonlab",
      position: "Frontend Engineer",
      duration: "April 2022 – August 2023",
      location: "Vietnam",
      description: "Head of frontend development team. Provided and ensured frontend technical quality of the company's main products including GameFi, DeFi, Quest-to-earn, Move-to-earn, AMM Dex, and CEX platforms.",
      technologies: ["React", "TypeScript", "Web3", "Blockchain", "DeFi"],
      achievements: [
        "Led frontend development team",
        "Delivered multiple blockchain projects",
        "Ensured high technical quality standards",
        "Worked on GameFi and DeFi platforms"
      ]
    },
    {
      company: "Teracom",
      position: "Frontend Engineer", 
      duration: "June 2021 – April 2022",
      location: "Vietnam",
      description: "Participated in developing outsourcing projects for public and private enterprises. Focused on building user interfaces and fixing bugs for various client projects.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Web Development"],
      achievements: [
        "Delivered outsourcing projects for enterprises",
        "Developed web portals and CMS systems",
        "Worked on government and corporate projects",
        "Maintained high code quality standards"
      ]
    }
  ],
  education: [
    {
      institution: "Academy of Cryptography Techniques",
      degree: "Software Engineer",
      duration: "September 2017 – June 2022",
      location: "Vietnam",
      description: "Studied software engineering with focus on modern development practices and technologies."
    }
  ],
  config: {
    theme: "minimal",
    animations: true,
    showContact: true,
    featuredProjectsCount: 3,
    heroAnimation: "typewriter", 
    scrollAnimations: true,
    formspreeFormId: "mgvlvvar"
  }
}