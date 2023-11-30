import axios, { type AxiosInstance } from 'axios'
import repositories from './../data/respositoriesData.json'
import { REACT_API_URL } from '@env'

class RepositorieServices {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: `${REACT_API_URL}`
    })
  }

  async getRepositories() {
    // Simulate the call and return the JSON
    return await Promise.resolve({
      data: repositories,
      status: 200
    })
  }
}

const repositorieServices = new RepositorieServices()
export default repositorieServices
