import React from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import UserGithubCard from './UserGithubCard'
import ViewContainer from '../styles/ViewContainer'
import { RepositoryList } from './RepositoryList'
import Loader from './Loader'

const UserGithubData = () => {
  const { searchData, searchLoading } = useSelector((state: RootState) => state.searchData)
  const { repoData } = useSelector((state: RootState) => state.repoData)

  return (
    <ViewContainer>
      {searchLoading ? <Loader /> : false}
      {(searchData !== null) && <UserGithubCard searchData={searchData} />}
      {(repoData !== null) && <RepositoryList repositoriesData={repoData} />}
    </ViewContainer>
  )
}

export default UserGithubData
