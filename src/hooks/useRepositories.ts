import { useEffect, useState } from 'react'
import repositorieServices from '../services/repositories.services'
import { type Repository } from '../data/Repository.type'

export const useRepositories = () => {
  const [repositories, setRespositories] = useState<Repository[] | null>(null)

  const loadRepositories = async () => {
    try {
      const { data } = await repositorieServices.getRepositories()
      // console.log(JSON.stringify(data, null, 2))
      setRespositories(data)
    } catch (error) {
      console.log('Error loading repositories', error)
    }
  }

  useEffect(() => {
    void loadRepositories()
  }, [])

  return { repositories }
}
