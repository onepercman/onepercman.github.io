import { useEffect } from "react"
import { usePortfolioStore } from "./portfolio-store"

export function usePortfolio() {
  const { data, isLoading, error, loadPortfolioData, clearError } =
    usePortfolioStore()

  useEffect(() => {
    if (!data && !isLoading) {
      loadPortfolioData()
    }
  }, [data, isLoading, loadPortfolioData])

  return {
    data,
    isLoading,
    error,
    reload: loadPortfolioData,
    clearError,
  }
}
