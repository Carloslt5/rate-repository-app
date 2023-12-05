import { useState } from 'react'
import searchUserServices from '../services/searchUser.services'
import { searchUserRequest, searchUserRequestError, searchUserSuccess } from '../store/features/SearchData/reducer'
import { useDispatch } from 'react-redux'
import { repoDataSuccess } from '../store/features/RepoData/reducer'
import { AxiosError } from 'axios'

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
      if (error instanceof AxiosError) {
        dispatch(searchUserRequestError())
        alert('User not found')
        setSearchText('')
      }
    }
  }

  return {
    searchText,
    setSearchText,
    handleSubmit
  }
}
