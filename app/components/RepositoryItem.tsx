import React from 'react'
import StyledCard from '../styles/StyledCard'
import { type RepoData } from '../types/repoData.type'
import RepositoryItemHeader from './RepositoryItemHeader'

export const RepositoryItem = ({ repoData }: { repoData: RepoData }) => {
  return (
    <StyledCard >
      <RepositoryItemHeader {...repoData} />
    </StyledCard >
  )
}
