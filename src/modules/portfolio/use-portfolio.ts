import { usePortfolioStore } from "./portfolio-store"

export function usePortfolio() {
  const { data } = usePortfolioStore()

  return {
    data,
  }
}
