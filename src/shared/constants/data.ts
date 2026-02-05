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
