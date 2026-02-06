export interface Project {
	title: string
	year: number
	description: string
	role: string
	techStack: string[]
	thumbnail: string
	images: string[]
	slug: string
	liveUrl?: string
	sourceCode?: string
}

export const GENERAL_INFO = {
	name: "Trung Tran Duy",
	nickname: "onepercman",
	title: "Senior Frontend Engineer / Frontend Lead",
	email: "onepercman@gmail.com",
	phone: "+84 889388820",
	avatar: "/images/avatar.png",

	emailSubject: "Let's collaborate on a project",
	emailBody: "Hi Trung, I am reaching out to you because...",

	summary:
		"Senior Frontend Engineer with 4+ years of experience building and owning complex frontend systems across enterprise, consumer, and Web3 products. Strong background in frontend architecture, data-heavy interfaces, real-time systems, and zero-to-one product development. Experienced in frontend technical leadership, mentoring junior engineers, and delivering production systems under scale and performance constraints.",
}

export const SOCIAL_LINKS = [
	{ name: "github", url: "https://github.com/onepercman" },
	{ name: "linkedin", url: "https://www.linkedin.com/in/onepercman" },
	{ name: "twitter", url: "https://twitter.com/onepercman" },
]

export const MY_STACK = {
	frontend: [
		{
			name: "React",
			icon: "/logo/react.png",
		},
		{
			name: "TypeScript",
			icon: "/logo/ts.png",
		},
		{
			name: "JavaScript",
			icon: "/logo/js.png",
		},
		{
			name: "Next.js",
			icon: "/logo/next.png",
		},
		{
			name: "TanStack",
			icon: "/logo/tanstack.png",
		},
		{
			name: "Vite",
			icon: "/logo/vite.svg",
		},
		{
			name: "Redux",
			icon: "/logo/redux.png",
		},
		{
			name: "Zustand",
			icon: "/logo/zustand.svg",
		},
		{
			name: "Tailwind CSS",
			icon: "/logo/tailwind.png",
		},
		{
			name: "Framer Motion",
			icon: "/logo/framer-motion.svg",
		},
		{
			name: "GSAP",
			icon: "/logo/gsap.png",
		},
		{
			name: "EthersJs",
			icon: "/logo/ethersjs.png",
		},
		{
			name: "Viem",
			icon: "/logo/viem.png",
		},
		{
			name: "Wagmi",
			icon: "/logo/wagmi.svg",
		},
	],
	backend: [
		{
			name: "Node.js",
			icon: "/logo/node.png",
		},
		{
			name: "NestJS",
			icon: "/logo/nest.svg",
		},
		{
			name: "Express",
			icon: "/logo/express.png",
		},
		{
			name: "Hono",
			icon: "/logo/hono.svg",
		},
		{
			name: "PostgreSQL",
			icon: "/logo/postgreSQL.png",
		},
		{
			name: "MongoDB",
			icon: "/logo/mongodb.svg",
		},
	],
	tools: [
		{
			name: "Git",
			icon: "/logo/git.png",
		},
		{
			name: "GitHub",
			icon: "/logo/github.png",
		},
		{
			name: "Docker",
			icon: "/logo/docker.svg",
		},
		{
			name: "Claude Code",
			icon: "/logo/claude-code.svg",
		},
	],
}

export const PROJECTS: Project[] = [
	{
		title: "TheVapeLabs - DePIN Platform",
		slug: "thevapelabs",
		year: 2024,
		description: `
      A DePIN (Decentralized Physical Infrastructure Network) platform integrating physical vape/pod devices with Web3 software.<br/><br/>

      Key Responsibilities:<br/>
      <ul>
        <li>Solo frontend engineer owning UI/UX across all team products</li>
        <li>Led frontend development for core web app, marketing site, and landing pages</li>
        <li>Built user interfaces translating device states and system data into clear experiences</li>
        <li>Designed scalable frontend architecture for rapid iteration and maintainability</li>
      </ul><br/>

      Technical Achievements:
      <ul>
        <li>Established design system and component architecture from scratch</li>
        <li>Integrated real-time device data visualization</li>
        <li>Optimized performance across multiple product surfaces</li>
        <li>Delivered production-ready platform independently</li>
      </ul>
      `,
		role: `
      Senior Frontend Engineer (Solo) at TheVapeLabs<br/>
      <ul>
        <li>Owned all frontend development end-to-end</li>
        <li>Architected scalable solutions for DePIN product</li>
        <li>Led UI/UX design and implementation</li>
        <li>Maintained code quality across all products</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Next.js",
			"Vite",
			"Zustand",
			"Tailwind CSS",
			"Web3",
		],
		thumbnail: "/projects/thumbnail/thevapelabs-1.png",
		images: [
			"/projects/images/thevapelabs-1.png",
			"/projects/images/thevapelabs-2.png",
			"/projects/images/thevapelabs-3.png",
		],
		liveUrl: "https://thevapelabs.io/",
	},
	{
		title: "Mcity - Metaverse Platform",
		slug: "mcity-metaverse",
		year: 2023,
		description: `
      A metaverse platform featuring interactive 3D environments with immersive landing pages and performance-optimized 3D rendering.<br/><br/>

      Technical Implementation:<br/>
      <ul>
        <li>Built with Three.js and react-three-fiber</li>
        <li>Interactive 3D canvas experiences</li>
        <li>Performance-optimized for web browsers</li>
        <li>Balanced visual richness with loading times</li>
        <li>Responsive 3D interactions across devices</li>
      </ul><br/>

      Challenges Solved:
      <ul>
        <li>Optimized 3D asset loading and rendering</li>
        <li>Implemented efficient scene management</li>
        <li>Maintained 60fps performance on target devices</li>
        <li>Created smooth user interactions in 3D space</li>
      </ul>
      `,
		role: `
      Frontend Lead at Moonlab<br/>
      <ul>
        <li>Led 3D frontend development</li>
        <li>Architected performance-optimized solutions</li>
        <li>Integrated Three.js with React ecosystem</li>
        <li>Ensured cross-browser compatibility</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Three.js",
			"react-three-fiber",
			"WebGL",
			"Tailwind CSS",
		],
		thumbnail: "/projects/thumbnail/mcity-1.png",
		images: [
			"/projects/images/mcity-metaverse-1.png",
			"/projects/images/mcity-metaverse-2.png",
			"/projects/images/mcity-metaverse-3.png",
		],
		liveUrl: "https://mcity.net",
	},
	{
		title: "ONUS Chain Block Explorer",
		slug: "onus-chain-explorer",
		year: 2023,
		description: `
      A production-ready block explorer for ONUS Chain (Layer-2 on BSC), providing comprehensive on-chain data visualization.<br/><br/>

      Technical Work:<br/>
      <ul>
        <li>Researched and customized Blockscout open-source codebase</li>
        <li>Implemented block and transaction browsing</li>
        <li>Built address and smart contract inspection tools</li>
        <li>Created network activity dashboards</li>
        <li>Optimized for large-scale blockchain data</li>
      </ul><br/>

      Deliverables:
      <ul>
        <li>Full-featured block explorer</li>
        <li>Real-time network statistics</li>
        <li>Smart contract verification interface</li>
        <li>Production deployment and maintenance</li>
      </ul>
      `,
		role: `
      Frontend Lead at Moonlab<br/>
      <ul>
        <li>Owned frontend for block explorer</li>
        <li>Customized Blockscout for ONUS Chain</li>
        <li>Implemented custom features and optimizations</li>
        <li>Delivered production-ready explorer</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Blockscout",
			"Elixir/Phoenix",
			"PostgreSQL",
			"Web3.js",
		],
		thumbnail: "/projects/thumbnail/onuschain-1.png",
		images: [
			"/projects/images/onus-chain-explorer-1.png",
			"/projects/images/onus-chain-explorer-2.png",
			"/projects/images/onus-chain-explorer-3.png",
		],
		liveUrl: "https://onuschain.io",
	},
	{
		title: "Run Together (Move-to-Earn)",
		slug: "run-together",
		year: 2022,
		description: `
      A Web3 move-to-earn platform combining blockchain with NFC-enabled physical shoes, achieving remarkable market traction.<br/><br/>

      Key Achievements:<br/>
      <ul>
        <li>7,413 NFTs sold within 30 minutes</li>
        <li>15,000+ app downloads within 6 days</li>
        <li>Peak #2 ranking on Google Play Vietnam</li>
        <li>3,000+ active users</li>
        <li>Featured on VTV (Vietnam Television)</li>
      </ul><br/>

      Technical Implementation:
      <ul>
        <li>Built scalable frontend architecture to handle high-traffic launches</li>
        <li>Integrated Web3 wallet connections and NFT minting flows</li>
        <li>Implemented real-time activity tracking and reward systems</li>
        <li>Optimized performance for mobile-first experience</li>
      </ul>
      `,
		role: `
      Frontend Lead at Moonlab<br/>
      <ul>
        <li>Led frontend development for the entire platform</li>
        <li>Architected scalable solutions for high-traffic scenarios</li>
        <li>Collaborated with backend team on Web3 integrations</li>
        <li>Ensured smooth user experience during peak loads</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Web3.js",
			"Redux",
			"Tailwind CSS",
			"NFT Integration",
		],
		thumbnail: "/projects/thumbnail/runtogether-1.png",
		images: [
			"/projects/images/run-together-1.png",
			"/projects/images/run-together-2.png",
			"/projects/images/run-together-3.png",
		],
		liveUrl: "https://runtogether.vn/",
	},
	{
		title: "Animverse - GameFi Platform",
		slug: "animverse-gamefi",
		year: 2022,
		description: `
      A zero-to-one GameFi project featuring NFT marketplace, presale/IDO pages, and comprehensive landing pages.<br/><br/>

      Key Responsibilities:<br/>
      <ul>
        <li>Owned entire frontend development from scratch</li>
        <li>Built landing pages showcasing game mechanics and tokenomics</li>
        <li>Implemented NFT marketplace with minting and trading features</li>
        <li>Developed presale/IDO pages with wallet integration</li>
        <li>Early hands-on experience with Web3 primitives</li>
      </ul><br/>

      Technical Achievements:
      <ul>
        <li>Integrated wagmi and Web3 libraries for blockchain interactions</li>
        <li>Built reusable components for NFT display and transactions</li>
        <li>Implemented wallet connection flows across multiple providers</li>
        <li>Delivered complete frontend independently as solo engineer</li>
      </ul>
      `,
		role: `
      Frontend Engineer at Moonlab<br/>
      <ul>
        <li>Solo frontend ownership for zero-to-one project</li>
        <li>Built NFT marketplace and IDO platform</li>
        <li>Integrated Web3 wallet and smart contract interactions</li>
        <li>Delivered production-ready GameFi application</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Wagmi",
			"Web3.js",
			"NFT Integration",
			"Tailwind CSS",
		],
		thumbnail: "/projects/thumbnail/animverse-1.png",
		images: [
			"/projects/images/animverse-gamefi-1.png",
			"/projects/images/animverse-gamefi-2.png",
			"/projects/images/animverse-gamefi-3.png",
		],
		liveUrl: "https://animverse.com/",
	},
	{
		title: "Son La Hydropower Company",
		slug: "sonla-hpc",
		year: 2022,
		description: `
      Enterprise CMS/CRM platform and public portal for Son La Hydropower Company, one of Vietnam's largest state-owned hydropower facilities.<br/><br/>

      Project Scope:<br/>
      <ul>
        <li>Built comprehensive content management system for internal operations</li>
        <li>Developed CRM features for stakeholder and partner management</li>
        <li>Implemented document management and approval workflows</li>
        <li>Created reporting dashboards for operational data</li>
        <li>SEO-optimized public information portal</li>
      </ul><br/>

      Technical Contributions:
      <ul>
        <li>Led frontend refactoring from legacy codebase to modern stack</li>
        <li>Migrated from vanilla JavaScript to Next.js and TypeScript</li>
        <li>First team member to implement SSR for improved SEO and performance</li>
        <li>Established component architecture and coding standards</li>
      </ul>
      `,
		role: `
      Frontend Engineer (Junior) at Teracom<br/>
      <ul>
        <li>Owned frontend development for CMS/CRM and public portal</li>
        <li>Led refactoring efforts to modernize codebase</li>
        <li>Pioneered SSR implementation for government portal</li>
        <li>Delivered production-ready enterprise system</li>
      </ul>
      `,
		techStack: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"HTML/CSS",
			"SSR",
			"SEO",
		],
		thumbnail: "/projects/thumbnail/sonlahpc-1.png",
		images: [
			"/projects/images/sonla-hpc-1.png",
			"/projects/images/sonla-hpc-2.png",
			"/projects/images/sonla-hpc-3.png",
		],
		liveUrl: "https://sonlahpc.com.vn/",
	},
	{
		title: "Vinh Tan Thermal Power Company",
		slug: "vinhtan-tpc",
		year: 2021,
		description: `
      Public portal and CMS for Vinh Tan Thermal Power Company, a major state-owned thermal power plant in Vietnam.<br/><br/>

      Project Scope:<br/>
      <ul>
        <li>Built public-facing portal for company information and news</li>
        <li>Implemented news management system with categorization</li>
        <li>Created project showcase and company profile sections</li>
        <li>Developed contact and inquiry forms for public engagement</li>
        <li>Optimized for search engine visibility and accessibility</li>
      </ul><br/>

      Technical Implementation:
      <ul>
        <li>Contributed to digital transformation initiative</li>
        <li>Implemented responsive design for multi-device access</li>
        <li>Applied SEO best practices for government portal requirements</li>
        <li>Ensured WCAG accessibility standards compliance</li>
      </ul>
      `,
		role: `
      Frontend Engineer (Intern) at Teracom<br/>
      <ul>
        <li>Contributed to frontend development for public portal and CMS</li>
        <li>Implemented responsive and accessible UI components</li>
        <li>Applied SEO optimization techniques</li>
        <li>Delivered government-standard web portal</li>
      </ul>
      `,
		techStack: [
			"React",
			"JavaScript",
			"HTML/CSS",
			"SEO",
			"Responsive Design",
			"Accessibility",
		],
		thumbnail: "/projects/thumbnail/vinhtantpc-1.png",
		images: [
			"/projects/images/vinhtan-tpc-1.png",
			"/projects/images/vinhtan-tpc-2.png",
			"/projects/images/vinhtan-tpc-3.png",
		],
		liveUrl: "https://www.vinhtantpc.com.vn/",
	},
]

export const MY_EXPERIENCE = [
	{
		title: "Senior Frontend Engineer (Solo)",
		company: "TheVapeLabs",
		duration: "Feb 2024 - Nov 2024",
		description:
			"Solo frontend engineer owning UI/UX across all products. Led development for core web app, marketing site, and landing pages. Built interfaces for DePIN product integrating physical vape devices with software.",
	},
	{
		title: "Frontend Lead / Senior Frontend Engineer",
		company: "The X Lab",
		duration: "Nov 2023 - Aug 2024",
		description:
			"Frontend Lead for multiple private products. Responsible for architecture, code quality, and complex UI logic in real-time and financial systems. Led projects: SC (Trading Platform), AU (AI Agent Platform), WM (DeFi OTC).",
	},
	{
		title: "Frontend Lead",
		company: "Moonlab",
		duration: "Apr 2022 - Aug 2023",
		description:
			"First formal Frontend Lead role. Shared ownership of codebase, made stack decisions, established coding standards. Mentored two interns who became core engineers. Led: Run Together (Move-to-Earn), ONUS Chain Explorer, Mcity (Metaverse).",
	},
	{
		title: "Frontend Engineer (Intern → Junior)",
		company: "Teracom",
		duration: "Jun 2021 - Apr 2022",
		description:
			"Contributed to digital-transformation projects for government and state-owned enterprises. Led refactoring efforts, migrated legacy codebases to Next.js and TypeScript. First to apply SSR for SEO improvements.",
	},
]

export const EDUCATION = {
	degree: "Software Engineering",
	school: "Academy of Cryptography Techniques",
	duration: "2017 - 2022",
}
