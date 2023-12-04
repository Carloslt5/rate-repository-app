import React from 'react'
import { RepositoryItem } from './RepositoryItem'
import StyledText from '../styles/StyledText'
import { type RepoData } from '../types/repoData.type'

export const RepositoryList = ({ repositoriesData }: { repositoriesData: RepoData[] }) => {
  return (
    <>
      <StyledText
        fontWeight='bold'
        align='center'
        fontSize='subheading'
      >
        Repository List
      </StyledText>

      {
        repositoriesData.map(repo => (
          <RepositoryItem key={repo.id} repoData={repo} />
        ))
      }
    </>
  )
}
