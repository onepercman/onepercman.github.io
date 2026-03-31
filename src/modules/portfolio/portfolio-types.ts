export interface Project {
	id: string
	title: string
	description: string
	image: string
	year?: string
	role?: string
	category: string
	tags: string[]
	link: string
	gradientFrom: string
	gradientTo: string
	layout: "desktop" | "mobile"
	screenshots?: string[]
}

export interface Experience {
	id: string
	company: string
	role: string
	period: string
	description: string
}

export interface AboutInfo {
	title: string
	description: string[]
	image: string
	images?: string[]
	highlights?: {
		label: string
		description: string
		position: { x: number; y: number }
	}[]
}

export interface ContactInfo {
	email: string
	socials: {
		name: string
		url: string
		icon: string
	}[]
}

export interface OtherItem {
	id: string
	title: string
	description: string
	href: string
	icon: string
	gradientFrom: string
	gradientTo: string
	isExternal?: boolean
	badge?: string
}
