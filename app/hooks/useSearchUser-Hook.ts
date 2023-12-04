import { useState } from 'react'
import searchUserServices from '../services/searchUser.services'
import { searchUserSuccess } from '../store/features/SearchData/reducer'
import { useDispatch } from 'react-redux'
import { repoDataSuccess } from '../store/features/RepoData/reducer'
import { Keyboard } from 'react-native'

export const useSearchUser = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    try {
      const { data: userGithub } = await searchUserServices.getUser(searchText)
      const { data: repoData } = await searchUserServices.getRepositories(userGithub.login)
      dispatch(searchUserSuccess(userGithub))
      dispatch(repoDataSuccess(repoData))
      Keyboard.dismiss()
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
