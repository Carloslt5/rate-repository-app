import { useState } from 'react'
import searchUserServices from '../services/searchUser.services'

export const useSearchUser = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = async () => {
    const { data } = await searchUserServices.getUser(searchText)
    console.log(JSON.stringify(data, null, 2))
  }
  return {
    searchText,
    setSearchText,
    handleSearch
  }
}
