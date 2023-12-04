import React from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import UserGithubCard from './UserGithubCard'
import ViewContainer from '../styles/ViewContainer'

const UserRepository = () => {
  const { searchData } = useSelector((state: RootState) => state.searchData)

  return (
    <ViewContainer>
      {
        searchData === null
          ? null
          : <UserGithubCard searchData={searchData} />
      }
    </ViewContainer>
  )
}

export default UserRepository
