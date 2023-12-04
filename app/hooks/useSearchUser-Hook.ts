import { useState } from 'react'
import searchUserServices from '../services/searchUser.services'
import { searchUserSuccess } from '../feature/SearchData/reducer'
import { useDispatch } from 'react-redux'

export const useSearchUser = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    const { data } = await searchUserServices.getUser(searchText)
    dispatch(searchUserSuccess(data))
  }
  return {
    searchText,
    setSearchText,
    handleSubmit
  }
}
