import React from 'react'
import StyledCard from '../styles/StyledCard'
import { type RepoData } from '../types/repoData.type'
import { RepositoryItemHeader } from './RepositoryItemHeader'
import ViewContainer from '../styles/ViewContainer'
import { RepositoryStats } from './RepositoryStats'

export const RepositoryItem = ({ repoData }: { repoData: RepoData }) => {
  return (
    <ViewContainer>
      <StyledCard style={{ gap: 10 }}>
        <RepositoryItemHeader {...repoData} />
        <RepositoryStats {...repoData} />
      </StyledCard >
    </ViewContainer>
  )
}
