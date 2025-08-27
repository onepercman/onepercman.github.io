import portfolioData from "../../../public/data/portfolio.json"

export const PORTFOLIO_DATA = portfolioData

export const META_DATA = {
  siteName: "onepercman - Frontend Engineer & Web3 Enthusiast",
  description: PORTFOLIO_DATA.profile.bio,
  keywords: `Frontend Engineer, Web3 Developer, React, TypeScript, TailwindCSS, Blockchain, DeFi, onepercman, ${PORTFOLIO_DATA.profile.links.github}`,
  siteUrl: "https://onepercman.com",
  ogImage: "https://onepercman.com/images/og-image.png",
  author: `${PORTFOLIO_DATA.profile.name} (onepercman)`,
  title: PORTFOLIO_DATA.profile.title,
  location: PORTFOLIO_DATA.profile.location,
  email: PORTFOLIO_DATA.profile.links.email,
  github: PORTFOLIO_DATA.profile.links.github,
  linkedin: PORTFOLIO_DATA.profile.links.linkedin,
  twitter: PORTFOLIO_DATA.profile.links.twitter,
} as const

export const SOCIAL_URLS = {
  github: `https://github.com/${META_DATA.github}`,
  linkedin: `https://linkedin.com/in/${META_DATA.linkedin}`,
  twitter: `https://twitter.com/${META_DATA.twitter}`,
  twitterHandle: `@${META_DATA.twitter}`,
} as const
