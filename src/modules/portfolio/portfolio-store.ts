import { create } from "zustand"
import { portfolioData } from "./portfolio-data"
import type { PortfolioData } from "./portfolio-types"

interface PortfolioStore {
	data: PortfolioData
}

export const usePortfolioStore = create<PortfolioStore>(() => ({
	data: portfolioData,
}))
