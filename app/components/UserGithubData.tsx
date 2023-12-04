import React from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import UserGithubCard from './UserGithubCard'
import ViewContainer from '../styles/ViewContainer'
import { RepositoryList } from './RepositoryList'

const UserGithubData = () => {
  const { searchData } = useSelector((state: RootState) => state.searchData)
  const { repoData } = useSelector((state: RootState) => state.repoData)

  return (
    <ViewContainer>
      {
        searchData === null
          ? null
          : <UserGithubCard searchData={searchData} />
      }

      {
        repoData === null
          ? null
          : <RepositoryList repositoriesData={repoData} />
      }
    </ViewContainer>
  )
}

export default UserGithubData
