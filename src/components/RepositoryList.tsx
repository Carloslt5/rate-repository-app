import React from 'react'
import { FlatList } from 'react-native'
import repositories from './../data/respositoriesData.json'
import { RepositoryItem } from './RepositoryItem'
import StyledCard from '../styles/StyledCard'

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <StyledCard>
          <RepositoryItem {...repo} />
        </StyledCard>
      )}
    />
  )
}
