import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCheckServerHealthy = () => {
  const apiUrl = "http://localhost:8000"

  const {
    data,
    refetch,
    isLoading: isServerHealthyLoading,
    error,
  } = useQuery(["healthy"], () => {
    return axios.get(`${apiUrl}/healthy`).then(res => res.data)
  })

  const refetchServerHealthy = () => {
    console.log("Server Health Refetched")
    refetch()
  }

  const serverHealthyData = data

  return { serverHealthyData, refetchServerHealthy, isServerHealthyLoading }
}
