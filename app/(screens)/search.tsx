import React from 'react'
import SearchBar from '../components/SearchBar'
import ViewContainer from '../styles/ViewContainer'
import UserRepository from '../components/UserRepository'

const SearchPage = () => {
  return (
    <ViewContainer justifyContent='start'>
      <SearchBar />
      <UserRepository />
    </ViewContainer>
  )
}

export default SearchPage
