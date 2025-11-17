export interface Profile {
  name: string
  displayName?: string
  title: string
  animatedTitles?: string[]
  subtitle: string
  location: string
  bio: string
  avatar: string
  phone?: string
  links: {
    github: string
    linkedin: string
    twitter: string
    email: string
    resume: string
  }
}

export interface Skill {
  category: string
  items: string[]
  level: number
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  links: {
    github: string
    demo: string
  }
  featured: boolean
  status: "completed" | "in-progress" | "planned"
  date?: string
  metrics?: {
    users?: string
    performance?: string
    uptime?: string
    satisfaction?: string
    components?: string
    adoption?: string
    efficiency?: string
    downloads?: string
    week?: string
    type?: string
    focus?: string
    technology?: string
    feature?: string
    storage?: string
  }
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface PortfolioConfig {
  theme: "minimal" | "modern" | "dark"
  animations: boolean
  showContact: boolean
  featuredProjectsCount: number
  heroAnimation: "typewriter" | "fade" | "slide"
  scrollAnimations: boolean
  formspreeFormId: string
}

export interface Education {
  institution: string
  degree: string
  duration: string
  location: string
  description: string
}

export interface PortfolioData {
  profile: Profile
  skills: Skill[]
  projects: Project[]
  experience: Experience[]
  education?: Education[]
  config: PortfolioConfig
}

export interface PortfolioStore {
  data: PortfolioData | null
  isLoading: boolean
  error: string | null
  loadPortfolioData: () => Promise<void>
  clearError: () => void
}
