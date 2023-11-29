import React from 'react'
import { FlatList } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import StyledCard from '../styles/StyledCard'
import Loader from './Loader'
import { useRepositories } from '../hooks/useRepositories'

export const RepositoryList = () => {
  const { repositories } = useRepositories()

  return (
    <>
      {
        (repositories == null)
          ? <Loader />
          : <FlatList
            data={repositories}
            renderItem={({ item: repo }) => (
              <StyledCard>
                <RepositoryItem {...repo} />
              </StyledCard>
            )}
          />
      }
    </>
  )
}
