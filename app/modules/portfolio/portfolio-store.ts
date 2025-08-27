import { create } from "zustand"
import type { PortfolioData, PortfolioStore } from "./portfolio-types"

export const usePortfolioStore = create<PortfolioStore>((set, _get) => ({
  data: null,
  isLoading: false,
  error: null,

  loadPortfolioData: async () => {
    try {
      set({ isLoading: true, error: null })

      const response = await fetch("/data/portfolio.json")
      if (!response.ok) {
        throw new Error("Failed to load portfolio data")
      }

      const data: PortfolioData = await response.json()
      set({ data, isLoading: false })
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        isLoading: false,
      })
    }
  },

  clearError: () => {
    set({ error: null })
  },
}))
