import React from 'react'
import SearchBar from '../components/SearchBar'
import UserGithubData from '../components/UserGithubData'
import MainContainer from '../styles/MainContainer'
import { ScrollView } from 'react-native'

const SearchPage = () => {
  return (
    <ScrollView>
      <MainContainer justifyContent='start'>
        <SearchBar />
        <UserGithubData />
      </MainContainer>
    </ScrollView>

  )
}

export default SearchPage
