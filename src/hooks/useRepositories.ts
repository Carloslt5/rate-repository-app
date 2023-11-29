import { useEffect, useState } from 'react'
import repositorieServices from '../services/repositories.services'

interface RepositoryListData {
  edges: Array<{ node: any }>
}

export const useRepositories = () => {
  const [repositories, setRespositories] = useState<RepositoryListData | null>(null)

  const loadRepositories = async () => {
    try {
      const { data } = await repositorieServices.getRepositories()
      setRespositories(data)
      // console.log(JSON.stringify(data, null, 2))
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

  return { repositories: repositoryNodes }
}
