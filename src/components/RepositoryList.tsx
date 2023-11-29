import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import StyledCard from '../styles/StyledCard'
import repositorieServices from '../services/repositories.services'
import Loader from './Loader'

interface RepositoryListData {
  edges: Array<{ node: any }>
}

export const RepositoryList = () => {
  const [repositories, setRespositories] = useState<RepositoryListData | null>(null)

  const loadRepositories = async () => {
    try {
      const { data } = await repositorieServices.getRepositories()
      setRespositories(data)
      console.log('-----------', data)
    } catch (error) {
      console.log('Error loading repositories', error)
    }
  }
  const repositoryNodes = (repositories != null)
    ? repositories.edges.map(edge => edge.node)
    : null

  useEffect(() => {
    void loadRepositories()
  }, [])

  return (
    <>
      {
        (repositories == null)
          ? <Loader />
          : <FlatList
            data={repositoryNodes}
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
