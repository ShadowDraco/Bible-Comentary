import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useUpdateUser = () => {
  const apiUrl = "http://localhost:8000"

  const {
    data,
    refetch,
    isLoading: isUpdateUserLoading,
    error,
  } = useQuery(["currentUser"], () => {
    return axios.post(`${apiUrl}/update-user`).then(res => data)
  })

  const refetchUpdateUser = () => {
    console.log("currentUser reupdated")
    refetch()
  }

  const updatedUserData = data

  return { updatedUserData, refetchUpdateUser, isUpdateUserLoading }
}
