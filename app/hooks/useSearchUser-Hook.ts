import { useState } from 'react'
import searchUserServices from '../services/searchUser.services'
import { searchUserRequest, searchUserSuccess } from '../store/features/SearchData/reducer'
import { useDispatch } from 'react-redux'
import { repoDataSuccess } from '../store/features/RepoData/reducer'

export const useSearchUser = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    try {
      dispatch(searchUserRequest())
      const { data: userGithub } = await searchUserServices.getUser(searchText)
      const { data: repoData } = await searchUserServices.getRepositories(userGithub.login)
      dispatch(searchUserSuccess(userGithub))
      dispatch(repoDataSuccess(repoData))
      setSearchText('')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    searchText,
    setSearchText,
    handleSubmit
  }
}
