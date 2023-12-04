import { useState } from 'react'
import searchUserServices from '../services/searchUser.services'
import { searchUserSuccess } from '../feature/SearchData/reducer'
import { useDispatch } from 'react-redux'

export const useSearchUser = () => {
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    try {
      const { data } = await searchUserServices.getUser(searchText)
      dispatch(searchUserSuccess(data))
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
