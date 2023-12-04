import React from 'react'
import SearchBar from '../components/SearchBar'
import UserRepository from '../components/UserRepository'
import MainContainer from '../styles/MainContainer'

const SearchPage = () => {
  return (
    <MainContainer justifyContent='start'>
      <SearchBar />
      <UserRepository />
    </MainContainer>
  )
}

export default SearchPage
