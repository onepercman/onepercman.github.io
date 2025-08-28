import { create } from "zustand"
import type { PortfolioData } from "./portfolio-types"
import { portfolioData } from "./portfolio-data"

interface PortfolioStore {
  data: PortfolioData
}

export const usePortfolioStore = create<PortfolioStore>(() => ({
  data: portfolioData,
}))
