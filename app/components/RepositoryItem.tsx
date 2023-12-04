import React from 'react'
import StyledCard from '../styles/StyledCard'
import { type RepoData } from '../types/repoData.type'
import RepositoryItemHeader from './RepositoryItemHeader'
import ViewContainer from '../styles/ViewContainer'

export const RepositoryItem = ({ repoData }: { repoData: RepoData }) => {
  return (
    <ViewContainer>
      <StyledCard >
        <RepositoryItemHeader {...repoData} />
      </StyledCard >
    </ViewContainer>
  )
}
