import React from 'react'
import { type Repository } from '../data/Repository.type'
import { RepositoryStats } from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'
import StyledCard from '../styles/StyledCard'

export const RepositoryItem: React.FC<Repository> = (repo) => {
  const { id } = repo

  return (
    <StyledCard
      border
      key={id}
    >
      <RepositoryItemHeader {...repo} />
      <RepositoryStats {...repo} />
    </StyledCard >
  )
}
