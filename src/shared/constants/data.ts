export interface Project {
	title: string
	year: number
	description: string
	role: string
	techStack: string[]
	thumbnail: string
	longThumbnail: string
	images: string[]
	slug: string
	liveUrl?: string
	sourceCode?: string
}

export const GENERAL_INFO = {
	name: "Trung Tran Duy",
	title: "Senior Frontend Engineer / Frontend Lead",
	email: "onepercman@gmail.com",

	emailSubject: "Let's collaborate on a project",
	emailBody: "Hi Trung, I am reaching out to you because...",

	summary:
		"Senior Frontend Engineer with 4+ years of experience building and owning complex frontend systems across enterprise, consumer, and Web3 products. Strong background in frontend architecture, data-heavy interfaces, real-time systems, and zero-to-one product development. Experienced in frontend technical leadership, mentoring junior engineers, and delivering production systems under scale and performance constraints.",
}

export const SOCIAL_LINKS = [
	{ name: "github", url: "https://github.com/onepercman" },
	{ name: "linkedin", url: "https://www.linkedin.com/in/onepercman" },
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
			name: "Next.js",
			icon: "/logo/next.png",
		},
		{
			name: "Vite",
			icon: "/logo/vite.svg",
		},
		{
			name: "Tailwind CSS",
			icon: "/logo/tailwind.png",
		},
		{
			name: "Redux",
			icon: "/logo/redux.png",
		},
		{
			name: "Zustand",
			icon: "/logo/zustand.png",
		},
		{
			name: "Three.js",
			icon: "/logo/threejs.svg",
		},
	],
	web3: [
		{
			name: "Wagmi",
			icon: "/logo/wagmi.svg",
		},
		{
			name: "Ethers.js",
			icon: "/logo/ethers.png",
		},
		{
			name: "Web3.js",
			icon: "/logo/web3js.png",
		},
	],
	tools: [
		{
			name: "Git",
			icon: "/logo/git.png",
		},
		{
			name: "Figma",
			icon: "/logo/figma.svg",
		},
		{
			name: "Jira",
			icon: "/logo/jira.svg",
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
		thumbnail: "/projects/thumbnail/thevapelabs.jpg",
		longThumbnail: "/projects/long/thevapelabs.jpg",
		images: [
			"/projects/images/thevapelabs-1.png",
			"/projects/images/thevapelabs-2.png",
			"/projects/images/thevapelabs-3.png",
		],
	},
	{
		title: "WM - DeFi Premarket & OTC Platform",
		slug: "wm-defi-otc",
		year: 2024,
		description: `
      A decentralized premarket and OTC trading platform using escrow-based smart contracts for transparent P2P transactions.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>Escrow-based smart contract integration</li>
        <li>P2P trading interface</li>
        <li>Transparent transaction flows</li>
        <li>Risk awareness UI components</li>
        <li>Trust indicators and verification</li>
      </ul><br/>

      Focus on Trust & Transparency:
      <ul>
        <li>Clear visibility of escrow states</li>
        <li>Risk warnings and confirmations</li>
        <li>Transaction history and tracking</li>
        <li>User reputation systems</li>
      </ul>
      `,
		role: `
      Senior Frontend Engineer at The X Lab<br/>
      <ul>
        <li>Developed complete frontend for OTC platform</li>
        <li>Integrated smart contract interactions</li>
        <li>Implemented trust and safety features</li>
        <li>Focused on user risk awareness</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Wagmi",
			"Viem",
			"Smart Contracts",
			"Tailwind CSS",
		],
		thumbnail: "/projects/thumbnail/wm-defi-otc.jpg",
		longThumbnail: "/projects/long/wm-defi-otc.jpg",
		images: [
			"/projects/images/wm-defi-otc-1.png",
			"/projects/images/wm-defi-otc-2.png",
			"/projects/images/wm-defi-otc-3.png",
		],
	},
	{
		title: "AU - AI Agent Platform",
		slug: "au-ai-agent",
		year: 2024,
		description: `
      A platform enabling users to create, configure, and share AI agents without technical knowledge, with subscription and token-based features.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>Intuitive agent configuration workflows</li>
        <li>Subscription management system</li>
        <li>Token-based feature access</li>
        <li>Agent sharing and discovery</li>
        <li>User-friendly interface for non-technical users</li>
      </ul><br/>

      Focus Areas:
      <ul>
        <li>Simplified complex AI configuration into guided flows</li>
        <li>Built accessible UI for diverse user skill levels</li>
        <li>Integrated payment and subscription systems</li>
        <li>Designed scalable component architecture</li>
      </ul>
      `,
		role: `
      Solo Frontend Engineer at The X Lab<br/>
      <ul>
        <li>Owned all frontend development end-to-end</li>
        <li>Designed and implemented complete UI/UX</li>
        <li>Integrated with AI backend services</li>
        <li>Delivered production-ready platform independently</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Next.js",
			"Zustand",
			"React Query",
			"Tailwind CSS",
		],
		thumbnail: "/projects/thumbnail/au-ai-agent.jpg",
		longThumbnail: "/projects/long/au-ai-agent.jpg",
		images: [
			"/projects/images/au-ai-agent-1.png",
			"/projects/images/au-ai-agent-2.png",
			"/projects/images/au-ai-agent-3.png",
		],
	},
	{
		title: "SC - Derivatives Trading Platform",
		slug: "sc-trading",
		year: 2024,
		description: `
      An advanced orderbook-based derivatives trading platform supporting leverage up to x1000, with real-time price charts and accurate PnL calculations.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>Real-time orderbook and trade matching</li>
        <li>Live price charts for BTC and ETH</li>
        <li>Accurate PnL/ROI calculations with leverage</li>
        <li>Prediction market module (Polymarket-inspired)</li>
        <li>Complex financial UI with data-intensive updates</li>
      </ul><br/>

      Technical Challenges:
      <ul>
        <li>Optimized real-time data handling for thousands of updates per second</li>
        <li>Implemented precise financial calculations for leveraged positions</li>
        <li>Built responsive trading interface with minimal latency</li>
        <li>Ensured data accuracy across multiple concurrent operations</li>
      </ul>
      `,
		role: `
      Frontend Lead at The X Lab<br/>
      <ul>
        <li>Owned frontend architecture and implementation</li>
        <li>Led technical decisions for real-time trading systems</li>
        <li>Implemented complex trading logic and calculations</li>
        <li>Maintained code quality across the project</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Zustand",
			"WebSocket",
			"TradingView Charts",
			"Tailwind CSS",
		],
		thumbnail: "/projects/thumbnail/sc-trading.jpg",
		longThumbnail: "/projects/long/sc-trading.jpg",
		images: [
			"/projects/images/sc-trading-1.png",
			"/projects/images/sc-trading-2.png",
			"/projects/images/sc-trading-3.png",
		],
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
		thumbnail: "/projects/thumbnail/mcity-metaverse.jpg",
		longThumbnail: "/projects/long/mcity-metaverse.jpg",
		images: [
			"/projects/images/mcity-metaverse-1.png",
			"/projects/images/mcity-metaverse-2.png",
			"/projects/images/mcity-metaverse-3.png",
		],
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
		thumbnail: "/projects/thumbnail/onus-chain-explorer.jpg",
		longThumbnail: "/projects/long/onus-chain-explorer.jpg",
		images: [
			"/projects/images/onus-chain-explorer-1.png",
			"/projects/images/onus-chain-explorer-2.png",
			"/projects/images/onus-chain-explorer-3.png",
		],
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
		thumbnail: "/projects/thumbnail/run-together.jpg",
		longThumbnail: "/projects/long/run-together.jpg",
		images: [
			"/projects/images/run-together-1.png",
			"/projects/images/run-together-2.png",
			"/projects/images/run-together-3.png",
		],
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
		thumbnail: "/projects/thumbnail/animverse-gamefi.jpg",
		longThumbnail: "/projects/long/animverse-gamefi.jpg",
		images: [
			"/projects/images/animverse-gamefi-1.png",
			"/projects/images/animverse-gamefi-2.png",
			"/projects/images/animverse-gamefi-3.png",
		],
	},
	{
		title: "Web3 White-Label Products (Confidential)",
		slug: "web3-white-label",
		year: 2023,
		description: `
      Delivered dozens of Web3 white-label products including DEXs, launchpads, and trading platforms for international partners under NDA.<br/><br/>

      Project Scope:<br/>
      <ul>
        <li>Built customizable DEX (Decentralized Exchange) interfaces</li>
        <li>Developed token launchpad platforms with vesting and distribution</li>
        <li>Implemented trading dashboards with real-time price feeds</li>
        <li>Created reusable component libraries for rapid deployment</li>
        <li>Focused on core user flows and reliable delivery</li>
      </ul><br/>

      Technical Approach:
      <ul>
        <li>Established scalable architecture for multi-tenant deployments</li>
        <li>Built theme customization system for brand flexibility</li>
        <li>Integrated with multiple blockchain networks (ETH, BSC, Polygon)</li>
        <li>Optimized for fast iteration and client-specific requirements</li>
      </ul>
      `,
		role: `
      Frontend Engineer at Moonlab<br/>
      <ul>
        <li>Led frontend development for multiple white-label products</li>
        <li>Built reusable component systems for rapid deployment</li>
        <li>Delivered DEXs and launchpads for international clients</li>
        <li>Ensured code quality and reliable product delivery under NDA</li>
      </ul>
      `,
		techStack: [
			"React",
			"TypeScript",
			"Web3.js",
			"Wagmi",
			"Redux",
			"Tailwind CSS",
			"Multi-chain",
		],
		thumbnail: "/projects/thumbnail/web3-white-label.jpg",
		longThumbnail: "/projects/long/web3-white-label.jpg",
		images: [
			"/projects/images/web3-white-label-1.png",
			"/projects/images/web3-white-label-2.png",
			"/projects/images/web3-white-label-3.png",
		],
	},
	{
		title: "Son La Hydropower Company - CMS Platform",
		slug: "sonla-hpc-cms",
		year: 2022,
		description: `
      Enterprise CMS/CRM platform for Son La Hydropower Company, one of Vietnam's largest state-owned hydropower facilities.<br/><br/>

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
        <li>Owned frontend development for CMS platform</li>
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
		thumbnail: "/projects/thumbnail/sonla-hpc-cms.jpg",
		longThumbnail: "/projects/long/sonla-hpc-cms.jpg",
		images: [
			"/projects/images/sonla-hpc-cms-1.png",
			"/projects/images/sonla-hpc-cms-2.png",
			"/projects/images/sonla-hpc-cms-3.png",
		],
	},
	{
		title: "Vinh Tan Thermal Power Company - Public Portal",
		slug: "vinhtan-tpc-portal",
		year: 2021,
		description: `
      Public information portal for Vinh Tan Thermal Power Company, a major state-owned thermal power plant in Vietnam.<br/><br/>

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
        <li>Contributed to frontend development for public portal</li>
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
		thumbnail: "/projects/thumbnail/vinhtan-tpc-portal.jpg",
		longThumbnail: "/projects/long/vinhtan-tpc-portal.jpg",
		images: [
			"/projects/images/vinhtan-tpc-portal-1.png",
			"/projects/images/vinhtan-tpc-portal-2.png",
			"/projects/images/vinhtan-tpc-portal-3.png",
		],
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
